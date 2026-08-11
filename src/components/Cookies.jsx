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
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const { consent, acceptAll, declineAll, savePreferences } =
    useCookieConsent();

  useEffect(() => {
    if (consent !== null) {
      if (consent.analytics) loadGoogleAnalytics();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
      requestAnimationFrame(() => setIsAnimating(true));
    }, 1500);

    return () => clearTimeout(timer);
  }, [consent]);

  const closeBanner = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      setShowSettings(false);
    }, 500);
  };

  const handleAcceptAll = () => {
    acceptAll();
    loadGoogleAnalytics();
    closeBanner();
    alert(document.cookie);
  };

  const handleDeclineAll = () => {
    declineAll();
    closeBanner();
  };

  const handleSavePreferences = () => {
    savePreferences({ analytics: analyticsEnabled });
    if (analyticsEnabled) loadGoogleAnalytics();
    closeBanner();
  };

  return (
    <>
      {isVisible && (
        <div className={`cookies-banner ${isAnimating ? "cookies-show" : ""}`}>
          {!showSettings ? (
            <>
              <div className="cookies-banner-header">
                <FaCookieBite />
                <h2>Táto stránka používa cookies</h2>
                <IoMdClose onClick={handleDeclineAll} />
              </div>
              <div className="cookies-banner-content">
                <p>
                  Záleží nám na tom, aby sa ti u nás dobre listovalo. Používame
                  preto cookies, jedny sú nevyhnutné pre správny chod stránky,
                  druhé nám pomáhajú zistiť, čo návštevníkov zaujíma najviac.{" "}
                  <Link
                    to="/cookies"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Viac o cookies...
                  </Link>
                </p>
              </div>
              <div className="cookies-buttons">
                <button
                  className="cookies-button"
                  id="acceptBtn"
                  onClick={handleAcceptAll}
                >
                  Povoliť všetko
                </button>
                <button
                  className="cookies-button"
                  id="declineBtn"
                  onClick={handleDeclineAll}
                >
                  Zamietnuť
                </button>
                <button
                  className="cookies-button"
                  id="settingsBtn"
                  onClick={() => setShowSettings(true)}
                >
                  Nastavenia
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="cookies-banner-header">
                <FaCookieBite />
                <h2>Nastavenia cookies</h2>
                <IoMdClose onClick={handleDeclineAll} />
              </div>
              <div className="cookies-settings-content">
                <div className="cookies-category">
                  <div className="cookies-category-header">
                    <div>
                      <span className="cookies-category-title">Nevyhnutné</span>
                      <p className="cookies-category-desc">
                        Zabezpečujú základné funkcie stránky ako navigácia a
                        prístup k zabezpečeným sekciám. Bez nich stránka nemôže
                        správne fungovať.
                      </p>
                    </div>
                    <div
                      className="cookies-toggle cookies-toggle--locked"
                      title="Vždy aktívne"
                    >
                      <div className="cookies-toggle-thumb" />
                    </div>
                  </div>
                </div>

                <div className="cookies-category">
                  <div className="cookies-category-header">
                    <div>
                      <span className="cookies-category-title">Analytické</span>
                      <p className="cookies-category-desc">
                        Pomáhajú nám pochopiť, ako návštevníci používajú stránku
                        (Google Analytics). Všetky údaje sú anonymné.
                      </p>
                    </div>
                    <button
                      className={`cookies-toggle ${analyticsEnabled ? "cookies-toggle--on" : ""}`}
                      onClick={() => setAnalyticsEnabled((prev) => !prev)}
                      aria-label="Prepnúť analytické cookies"
                    >
                      <div className="cookies-toggle-thumb" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="cookies-buttons">
                <button
                  className="cookies-button"
                  id="backBtn"
                  onClick={() => setShowSettings(false)}
                >
                  Späť
                </button>
                <button
                  className="cookies-button"
                  id="acceptBtn"
                  onClick={handleSavePreferences}
                >
                  Uložiť nastavenia
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Cookies;
