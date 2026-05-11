import { toast } from "sonner";
import { useEffect, useRef, useState } from "react";
import { FaPhoneAlt, FaAt, FaPaperPlane } from "react-icons/fa";
import ContactImg from "/assets/images/contact/contact_img.webp";

const Contact = () => {
  const widgetRef = useRef(null);
  const widgetIdRef = useRef(null);

  const [turnstileToken, setTurnstileToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // return;
    const tryRender = () => {
      if (
        !window.turnstile ||
        !widgetRef.current ||
        widgetIdRef.current !== null
      ) {
        return;
      }

      widgetIdRef.current = window.turnstile.render(widgetRef.current, {
        sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
        theme: "dark",
        callback: (token) => {
          setTurnstileToken(token);
        },
        "expired-callback": () => {
          setTurnstileToken("");
        },
        "error-callback": () => {
          setTurnstileToken("");
        },
      });
    };

    const interval = setInterval(() => {
      if (window.turnstile) {
        tryRender();
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);

      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  const resetTurnstile = () => {
    setTurnstileToken("");

    if (widgetIdRef.current !== null && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      toast.error("Vyplň všetky polia.");
      return;
    }

    if (!turnstileToken) {
      toast.error("Potvrď, že nie si robot.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            turnstileToken,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Odoslanie formulára zlyhalo.");
      }
      toast.success("Správa bola úspešne odoslaná.");
      form.reset();
      resetTurnstile();
    } catch (error) {
      toast.error(error.message || "Nastala chyba pri odosielaní.");
      resetTurnstile();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <form id="form" className="animate-bottom" onSubmit={handleSubmit}>
            <div className="contact-left-title">
              <h1>Napíšte mi</h1>
              <div className="gradient-line"></div>
            </div>
            <div className="contact-input-container">
              <div>
                <input
                  type="text"
                  name="name"
                  minLength={2}
                  placeholder="Meno"
                  className="contact-inputs"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="contact-inputs"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  minLength={10}
                  placeholder="Správa"
                  className="contact-inputs"
                ></textarea>
              </div>
            </div>
            <div ref={widgetRef}></div>
            <button
              type="submit"
              id="submitContact"
              name="submitContact"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? "Odosielam..." : "Odoslať"}</span>
              <FaPaperPlane />
            </button>
          </form>
          <div className="contact-details">
            <div className="contact-details-title">
              <h2>Kontaktné údaje:</h2>
              <div className="gradient-line"></div>
            </div>
            <div className="contact-details-content">
              <div className="phone">
                <FaPhoneAlt />
                <p>
                  <a href="tel:+421908809710">+421 901 123 456</a>
                </p>
              </div>
              <div className="email">
                <FaAt />
                <p>
                  <a href="mailto:example@gmail.com">example@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <img src={ContactImg} alt="Contact" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
