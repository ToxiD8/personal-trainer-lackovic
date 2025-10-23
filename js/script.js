/* Prevent Caret on Non-Inputs: */

const bullets = document.querySelectorAll(".swiper-pagination");

// prevent focus
bullets.forEach((bullet) => {
  bullet.addEventListener("mousedown", (e) => e.preventDefault());
});

// Cookies

const cookieBox = document.querySelector(".cookies_container");
const cookie_buttons = document.querySelectorAll(".cookies_button");

const executeCodes = () => {
  if (!cookieBox) return;
  // if cookies are already set, do not show the box
  if (document.cookie.includes("personal_trainer_lackovic")) return;

  cookieBox.classList.add("cookies_show");

  cookie_buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("cookies_show");

      // if button has acceptBtn id
      if (button.id === "acceptBtn") {
        // set cookies for 1 month
        document.cookie =
          "cookieBy = personal_trainer_lackovic; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

// executeCodes function will be called when the page loads
window.addEventListener("load", executeCodes);

// Progress

let scrollProgress = document.getElementById("progress");

if (scrollProgress) {
  function calcScrollValue() {
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
  }

  scrollProgress.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", calcScrollValue);
  window.addEventListener("load", calcScrollValue);
}

// Scroll animation

let nav_a = document.querySelectorAll("header nav a, .footerNav a");
let navbarCollapse = document.querySelector(".navbar-collapse");

nav_a.forEach(function (link) {
  link.addEventListener("click", function (e) {
    let id = this.getAttribute("href");

    if (id === "#logo") {
      e.preventDefault();

      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse, { toggle: false }).hide();
      }

      history.pushState(null, null, "#home");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    let target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();

    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse, { toggle: false }).hide();
    }

    history.pushState(null, null, id);

    let scrollToSection =
      target.getBoundingClientRect().top + window.pageYOffset;

    if (scrollToSection < 0) scrollToSection = 0;

    window.scrollTo({
      top: scrollToSection - 40,
      behavior: "smooth",
    });
  });
});

//  Pricing button scroll to Contact

let pricingButton = document.querySelectorAll(".price_container .btn");

pricingButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse, { toggle: false }).hide();
    }

    let contactId = document.getElementById("contact");
    let scrollToContact =
      contactId.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: scrollToContact - 40,
      behavior: "smooth",
    });
  });
});

// Scroll animation to the same position from cookies.php

window.addEventListener("load", function () {
  if (window.location.hash) {
    let target = document.querySelector(window.location.hash);
    if (target) {
      let scrollToSection =
        target.getBoundingClientRect().top + window.pageYOffset;

      if (scrollToSection < 0) scrollToSection = 0;

      window.scrollTo({
        top: scrollToSection - 40,
        behavior: "smooth",
      });
    }
  }
});

// Intersection Observer

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
      // } else {
      //   entry.target.classList.remove("show");
      // }
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden-left, .hidden-right");
hiddenElements.forEach((el) => {
  observer.observe(el);
});

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
    e.preventDefault();

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
    formData.append("submitContact", "1");

    const scrollY = window.scrollY;

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
        window.scrollTo({ top: scrollY });
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
        // fallback in case of fetching the session failed
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
