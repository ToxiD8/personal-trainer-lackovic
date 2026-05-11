import { useNavigate, useLocation } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
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
            <AiFillInstagram className="social-icon" />
          </a>
        </div>
        <div className="footerNav">
          <ul>
            <li>
              <button onClick={(e) => handleNavClick(e, "about")}>O mne</button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick(e, "pricing")}>
                Cenník
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick(e, "feedback")}>
                Referencie
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick(e, "faq")}>Faq</button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick(e, "contact")}>
                Kontakt
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>© 2026 Simona Lackovičová</p>
      </div>
    </footer>
  );
};

export default Footer;
