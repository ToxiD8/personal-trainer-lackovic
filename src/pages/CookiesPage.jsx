import { useNavigate } from "react-router-dom";

const CookiesPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="cookies-wrapper">
      <div className="cookies-container">
        <h1>Cookies</h1>
        <div className="cookies-content">
          <h2>Ako pracujeme so súbormi cookie?</h2>
          <p>
            Na zaistenie bezproblémového chodu našej webovej stránky niekedy
            používame malé dátové súbory nazývané cookies. Používame ich výlučne
            na základné fungovanie stránky a analýzu návštevnosti.
          </p>

          <h2>Čo vlastne cookies sú?</h2>
          <p>
            Cookies je malý textový súbor, ktorý sa uloží do vášho zariadenia
            počas prehliadania webu. Umožňuje stránke zapamätať si určité
            informácie medzi návštevami.
          </p>

          <h2>Aké cookies používame?</h2>
          <table className="cookies-table">
            <thead>
              <tr>
                <th>Názov</th>
                <th>Účel</th>
                <th>Typ</th>
                <th>Platnosť</th>
                <th>Vydavateľ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Názov">
                  <code>cookiesAccepted</code>
                </td>
                <td data-label="Účel">Uloženie vášho súhlasu s cookies</td>
                <td data-label="Typ">Nevyhnutná</td>
                <td data-label="Platnosť">30 dní</td>
                <td data-label="Vydavateľ">Táto stránka</td>
              </tr>
              <tr>
                <td data-label="Názov">
                  <code>_ga</code>
                </td>
                <td data-label="Účel">
                  Rozlíšenie návštevníkov (Google Analytics)
                </td>
                <td data-label="Typ">Analytická</td>
                <td data-label="Platnosť">2 roky</td>
                <td data-label="Vydavateľ">Google</td>
              </tr>
              <tr>
                <td data-label="Názov">
                  <code>_ga_*</code>
                </td>
                <td data-label="Účel">
                  Udržanie stavu relácie (Google Analytics)
                </td>
                <td data-label="Typ">Analytická</td>
                <td data-label="Platnosť">2 roky</td>
                <td data-label="Vydavateľ">Google</td>
              </tr>
            </tbody>
          </table>

          <h2>Správa súborov cookies</h2>
          <p>
            Cookies môžete spravovať alebo odstrániť podľa svojich potrieb.
            Návod nájdete na stránke{" "}
            <a
              href="https://www.aboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              aboutcookies.org
            </a>
            . Upozorňujeme však, že niektoré funkcie stránok môžu bez cookies
            fungovať obmedzene.
          </p>

          <h2>Odvolanie súhlasu</h2>
          <p>
            Svoj súhlas môžete kedykoľvek odvolať vymazaním cookies vo vašom
            prehliadači. Pri ďalšej návšteve sa banner znovu zobrazí a môžete
            zvoliť znova.
          </p>

          <button onClick={goHome}>Späť na hlavnú stránku</button>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
