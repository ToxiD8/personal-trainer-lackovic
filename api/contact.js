import nodemailer from "nodemailer";

const escapeHtml = (str) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function verifyTurnstile(token) {
  const formData = new URLSearchParams();
  formData.append("secret", process.env.TURNSTILE_SECRET_KEY);
  formData.append("response", token);

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body: formData },
  );
  return response.json();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, email, message, turnstileToken } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "Chýbajú povinné polia." });
    }

    if (!turnstileToken) {
      return res
        .status(400)
        .json({ success: false, message: "Chýba Turnstile token." });
    }

    const verifyData = await verifyTurnstile(turnstileToken);
    if (!verifyData.success) {
      console.error("Turnstile verification failed:", verifyData);
      return res
        .status(400)
        .json({ success: false, message: "Captcha nebola overená." });
    }

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Nová správa z formulára od ${name}`,
      text: `Meno: ${name}\nEmail: ${email}\n\nSpráva:\n${message}`,
      html: `
        <h2>Nová správa z kontaktného formulára</h2>
        <p><strong>Meno:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Správa:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return res
      .status(200)
      .json({ success: true, message: "Správa bola úspešne odoslaná." });
  } catch (error) {
    console.error("Chyba pri odosielaní emailu:", error);
    return res
      .status(500)
      .json({ success: false, message: "Nepodarilo sa odoslať správu." });
  }
}
