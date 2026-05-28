import { FaCookieBite } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Cookies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // scrolls smoothly to section from navbar links
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 300);
    }
  }, [location]);

  useEffect(() => {
    const cookiesExist = document.cookie.includes("cookiesAccepted=true");

    if (!cookiesExist) {
      setIsVisible(true);
      setTimeout(() => {
        setIsAnimating(true);
      }, 300);
    }
  }, []);

  const handleDecline = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  const handleAccept = () => {
    document.cookie =
      "cookiesAccepted=true; max-age=2592000; path=/; SameSite=Lax; Secure";
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div
          className={`cookies_container ${isAnimating ? "cookies_show" : ""}`}
        >
          <div className="cookies_window">
            <FaCookieBite />
            <h2>Táto stránka používa cookies</h2>
          </div>
          <div className="cookies_data">
            <p>
              Súbory cookie používame na zhromažďovanie a analýzu informácií o
              výkone a používaní stránok, na poskytovanie funkcií sociálnych
              médií a na vylepšenie a prispôsobenie obsahu a reklám.
              <Link
                to="/cookies"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Viac o cookies...
              </Link>
            </p>
          </div>
          <div className="cookies_buttons">
            <button
              className="cookies_button"
              id="acceptBtn"
              onClick={handleAccept}
            >
              Povoliť
            </button>
            <button
              className="cookies_button"
              id="declineBtn"
              onClick={handleDecline}
            >
              Zamietnuť
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
