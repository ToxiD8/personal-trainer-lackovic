import { FaCookieBite } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCookieConsent from "../utils/useCookieConsent";

const GA_ID = "G-RHSJVQ329G";

const loadGoogleAnalytics = () => {
  if (document.getElementById("ga-script")) return;

  const script1 = document.createElement("script");
  script1.id = "ga-script";
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `;
  document.head.appendChild(script2);
};

const Cookies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { consent, accept, decline } = useCookieConsent();

  useEffect(() => {
    if (consent === "true") loadGoogleAnalytics();
    if (consent !== null) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, [consent]);

  const closeBanner = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  const handleAccept = () => {
    accept();
    loadGoogleAnalytics();
    closeBanner();
  };

  const handleDecline = () => {
    decline();
    closeBanner();
  };

  return (
    <>
      {isVisible && (
        <div className={`cookies-banner ${isAnimating ? "cookies_show" : ""}`}>
          <div className="cookies-banner-header">
            <FaCookieBite />
            <h2>Táto stránka používa cookies</h2>
            <IoMdClose onClick={closeBanner} />
          </div>
          <div className="cookies-banner-content">
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
          <div className="cookies-buttons">
            <button
              className="cookies-button"
              id="acceptBtn"
              onClick={handleAccept}
            >
              Povoliť
            </button>
            <button
              className="cookies-button"
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
