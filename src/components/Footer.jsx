import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaAt } from "react-icons/fa";
import { FaThreads, FaLocationDot } from "react-icons/fa6";
import { MdPlayArrow } from "react-icons/md";
import logo from "/assets/images/logo/logo.webp";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    navigate("/", { state: { scrollTo: sectionId } });
  };

  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-widget">
            <div
              className="footer-logo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src={logo}
                alt="Logo"
                className="logo"
                width="107"
                height="100"
              />
            </div>
            <p>Tréning a výživa pre ľudí, ktorí chcú výsledky, nie skratky.</p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/profile.php?id=100004710452990"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="social-icon" />
              </a>
              <a
                href="https://www.instagram.com/s.lackovic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a
                href="https://www.threads.com/@s.lackovic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
              >
                <FaThreads className="social-icon" />
              </a>
            </div>
          </div>
          <div className="footer-widget">
            <h2>Menu</h2>
            <div className="footer-nav">
              <ul>
                <li>
                  <MdPlayArrow />
                  <button onClick={() => handleNavClick("about")}>O mne</button>
                </li>
                <li>
                  <MdPlayArrow />
                  <button onClick={() => handleNavClick("pricing")}>
                    Cenník
                  </button>
                </li>
                <li>
                  <MdPlayArrow />
                  <button onClick={() => handleNavClick("feedback")}>
                    Recenzie
                  </button>
                </li>
                <li>
                  <MdPlayArrow />
                  <button onClick={() => handleNavClick("faq")}>Faq</button>
                </li>
                <li>
                  <MdPlayArrow />
                  <button onClick={() => handleNavClick("contact")}>
                    Kontakt
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-widget">
            <h2>Kontakt</h2>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaLocationDot />
                </div>
                <div className="footer-contact-content">
                  <h3>Adresa</h3>
                  <p>Fabrika Gym</p>
                  <p>Nitrianska 70</p>
                  <p>958 01 Partizánske</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaPhoneAlt />
                </div>
                <div className="footer-contact-content">
                  <h3>Telefón</h3>
                  <p>(+421) 908 809 710</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaAt />
                </div>
                <div className="footer-contact-content">
                  <h3>E-mail</h3>
                  <p>lackovicovasimon@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© 2026 Simona Lackovičová | Všetky práva vyhradené</p>
          </div>
          <div className="footer-bottom-right">
            <ul>
              <li>
                <a
                  href="/ochrana-osobnych-udajov"
                  className="footer-bottom-link"
                >
                  Zásady ochrany súkromia
                </a>
              </li>
              <li>
                <a href="/cookies" className="footer-bottom-link">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
