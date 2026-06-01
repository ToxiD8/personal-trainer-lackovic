import { toast } from "sonner";
import { useEffect, useRef, useState } from "react";
import {
  FaPhoneAlt,
  FaAt,
  FaPaperPlane,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaThreads, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const widgetRef = useRef(null);
  const widgetIdRef = useRef(null);

  const [turnstileToken, setTurnstileToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    return;
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
      const response = await fetch("/api/contact", {
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
      });

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
        <div className="contact-row">
          <div className="contact-left">
            <form id="form" className="animate-bottom" onSubmit={handleSubmit}>
              <div className="contact-left-title">
                <h1>Napíšte mi</h1>
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
              <div className="cf-turnstile" ref={widgetRef}></div>
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
          </div>
          <div className="contact-right animate-bottom">
            <div className="contact-details">
              <div className="contact-details-title">
                <h2>Kontaktné údaje:</h2>
              </div>
              <div className="contact-details-content">
                <div className="phone">
                  <div className="contact-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="phone-content">
                    <h4>Telefón</h4>
                    <p>
                      <a href="tel:+421908809710">(+421) 908 809 710</a>
                    </p>
                  </div>
                </div>
                <div className="email">
                  <div className="contact-icon">
                    <FaAt />
                  </div>
                  <div className="email-content">
                    <h4>E-mail</h4>
                    <p>
                      <a href="mailto:lackovicovasimon@gmail.com">
                        lackovicovasimon@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="address">
                  <div className="contact-icon">
                    <FaLocationDot />
                  </div>
                  <div className="address-content">
                    <h4>Adresa</h4>
                    <p>Fabrika Gym</p>
                    <p>Nitrianská 70</p>
                    <p>958 01 Partizánske</p>
                  </div>
                </div>
                <div className="socials">
                  <a
                    href="https://www.facebook.com/profile.php?id=100004710452990"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="social-icon" />
                  </a>
                  <a
                    href="https://www.instagram.com/s.lackovic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="social-icon" />
                  </a>
                  <a
                    href="https://www.threads.com/@s.lackovic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaThreads className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d659.2645519039531!2d18.366976169673894!3d48.627868184605546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714cf2063f18f95%3A0x8a639706f8fa680e!2sFabrika%20Gym!5e0!3m2!1ssk!2ssk!4v1778839311722!5m2!1ssk!2ssk"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fabrika Gym mapa"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
