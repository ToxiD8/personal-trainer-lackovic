// Progress

let scrollProgress = document.getElementById("progress");

scrollProgress.addEventListener("click", () => {
  document.documentElement.scrollTop = 0; // Scroll to top
});

let calcScrollValue = () => {
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.style.background = `conic-gradient(#AB2E56 ${scrollValue}%, #d9d9d9 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

/* Feedback */

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
});

/* Contact */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const name_input = document.getElementById("name_input");
  const email_input = document.getElementById("email_input");
  const message_input = document.getElementById("message_input");
  const name_error_message = document.getElementById("name-error-message");
  const email_error_message = document.getElementById("email-error-message");
  const message_error_message = document.getElementById(
    "message-error-message"
  );

  if (!form || !name_input || !email_input || !message_input) return;

  // Clear error messages on input
  [name_input, email_input, message_input].forEach((input) => {
    input.addEventListener("input", () => {
      input.parentElement.classList.remove("incorrect");
      if (input === name_input) name_error_message.innerText = "";
      if (input === email_input) email_error_message.innerText = "";
      if (input === message_input) message_error_message.innerText = "";
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // prevent reload

    // Validate
    const errors = getFormErrors(
      name_input.value,
      email_input.value,
      message_input.value
    );

    if (Object.keys(errors).length > 0) {
      name_error_message.innerText = errors.name || "";
      email_error_message.innerText = errors.email || "";
      message_error_message.innerText = errors.message || "";

      if (errors.name) name_input.parentElement.classList.add("incorrect");
      if (errors.email) email_input.parentElement.classList.add("incorrect");
      if (errors.message)
        message_input.parentElement.classList.add("incorrect");
      return;
    }

    // Submit form via fetch
    const formData = new FormData(form);
    formData.append("submitContact", "1"); // important!

    const scrollY = window.scrollY; // Save scroll position

    try {
      const res = await fetch("send-email.php", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to submit form");

      const sessionRes = await fetch("contact-json.php");
      const sessionData = await sessionRes.json();

      if (sessionData.message) {
        Swal.fire({
          title: "Ďakujem za správu!",
          text: sessionData.message,
          icon: "success",
          confirmButtonColor: "#AB2E56",
        });
        form.reset();
        window.scrollTo({ top: scrollY }); // Restore scroll
      }
    } catch (err) {
      console.error(err);

      try {
        const sessionRes = await fetch("contact-json.php");
        const sessionData = await sessionRes.json();

        Swal.fire({
          title: "Chyba",
          text:
            sessionData.message ||
            "Správu sa nepodarilo odoslať. Skúste to neskôr prosím.",
          icon: "error",
          confirmButtonColor: "#AB2E56",
        });
      } catch (e) {
        // If even fetching the session failed, fallback
        Swal.fire({
          title: "Chyba",
          text: "Správu sa nepodarilo odoslať. Skúste to neskôr prosím.",
          icon: "error",
          confirmButtonColor: "#AB2E56",
        });
      }
    }
  });
});

function getFormErrors(name, email, message) {
  const errors = {};

  if (!name) {
    errors.name = "Uveďte prosím meno";
  } else if (name.length <= 2) {
    errors.name = "Meno musí obsahovať aspoň 3 znaky";
  }

  if (!email) {
    errors.email = "Uveďte prosím email";
  }

  if (!message) {
    errors.message = "Uveďte prosím text";
  } else if (message.length <= 2) {
    errors.message = "Správa musí obsahovať aspoň 3 znaky";
  }

  return errors;
}

/* Prevent Caret on Non-Inputs: */

const bullets = document.querySelectorAll(".swiper-pagination");

bullets.forEach((bullet) => {
  bullet.addEventListener("mousedown", (e) => e.preventDefault()); // Prevent focus
});
