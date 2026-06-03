import { FaCookieBite } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  // scrolls smoothly to section from navbar links
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.state?.scrollTo) {
  //     setTimeout(() => {
  //       const section = document.getElementById(location.state.scrollTo);
  //       if (section) {
  //         const top = section.getBoundingClientRect().top + window.scrollY;
  //         window.scrollTo({ top, behavior: "smooth" });
  //       }
  //     }, 300);
  //   }
  // }, [location]);

  // parsing cookie
  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookiesAccepted="))
      ?.split("=")[1];

    if (cookieValue === "true") loadGoogleAnalytics();

    if (cookieValue !== undefined) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const closeBanner = () => {
    setIsAnimating(false);

    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  const handleAccept = () => {
    document.cookie =
      "cookiesAccepted=true; max-age=2592000; path=/; SameSite=Lax; Secure";
    loadGoogleAnalytics();
    closeBanner();
  };

  const handleDecline = () => {
    document.cookie =
      "cookiesAccepted=false; max-age=2592000; path=/; SameSite=Lax; Secure";
    closeBanner();
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
