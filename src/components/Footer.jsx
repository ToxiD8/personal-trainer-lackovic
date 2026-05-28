import { useNavigate, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaAt } from "react-icons/fa";
import { FaThreads, FaLocationDot } from "react-icons/fa6";
import { MdPlayArrow } from "react-icons/md";
import { Link } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";
import logo from "/assets/images/logo/logo.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
    setTogglerExpanded(false);
  };

  return (
    <footer id="footer">
      <div className="footer-overlay" />
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-widget">
            <div className="footer-logo">
              <Link onClick={() => window.scrollTo(0, 0)}>
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="footer-socials">
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
          <div className="footer-widget">
            <h5>Menu</h5>
            <div className="footer-nav">
              <ul>
                <li>
                  <MdPlayArrow />
                  <button onClick={(e) => handleNavClick(e, "about")}>
                    O mne
                  </button>
                </li>
                <li>
                  <MdPlayArrow />
                  <button onClick={(e) => handleNavClick(e, "pricing")}>
                    Cenník
                  </button>
                </li>
                <li>
                  <MdPlayArrow />
                  <button onClick={(e) => handleNavClick(e, "feedback")}>
                    Referencie
                  </button>
                </li>
                <li>
                  <MdPlayArrow />
                  <button onClick={(e) => handleNavClick(e, "faq")}>Faq</button>
                </li>
                <li>
                  <MdPlayArrow />
                  <button onClick={(e) => handleNavClick(e, "contact")}>
                    Kontakt
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-widget">
            <h5>Kontakt</h5>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaLocationDot />
                </div>
                <div className="footer-contact-content">
                  <h6>Adresa</h6>
                  <p>Fabrika Gym</p>
                  <p>Nitrianská 70</p>
                  <p>958 01 Partizánske</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaPhoneAlt />
                </div>
                <div className="footer-contact-content">
                  <h6>Telefón</h6>
                  <p>(+421) 908 809 710</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <FaAt />
                </div>
                <div className="footer-contact-content">
                  <h6>E-mail</h6>
                  <p>lackovicovasimon@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Simona Lackovičová | Všetky práva vyhradené</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
