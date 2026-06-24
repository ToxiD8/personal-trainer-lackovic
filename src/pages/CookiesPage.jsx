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
            Chceme, aby bola táto stránka pre teba čo najpríjemnejšia. Preto
            používame cookies, nevyhnutné pre správne fungovanie a analytické,
            ktoré nám pomáhajú stránku postupne zlepšovať. Žiadne reklamy,
            žiadne sledovanie naprieč inými stránkami.
          </p>
          <h2>Čo vlastne cookies sú?</h2>
          <p>
            Cookie je malý súbor, ktorý sa uloží do tvojho zariadenia keď
            navštíviš stránku. Vďaka nemu si stránka pamätá určité veci medzi
            návštevami, napríklad to, že si už rozhodol o cookies a nemusíme sa
            pýtať znova.
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
                  <code>cookieConsent</code>
                </td>
                <td data-label="Účel">Uloženie tvojho súhlasu s cookies</td>
                <td data-label="Typ">Nevyhnutné</td>
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
                <td data-label="Typ">Analytické</td>
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
                <td data-label="Typ">Analytické</td>
                <td data-label="Platnosť">2 roky</td>
                <td data-label="Vydavateľ">Google</td>
              </tr>
            </tbody>
          </table>
          <h2>Správa súborov cookies</h2>
          <p>
            Cookies môžeš kedykoľvek vymazať alebo spravovať priamo v
            nastaveniach svojho prehliadača. Návod nájdeš na stránke{" "}
            <a
              href="https://www.aboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              aboutcookies.org
            </a>
            . Bez nevyhnutných cookies však niektoré veci nemusia fungovať
            správne.
          </p>
          <h2>Odvolanie súhlasu</h2>
          <p>
            Ak si to rozmyslíš, stačí vymazať cookie <code>cookieConsent</code>{" "}
            v prehliadači. Pri ďalšej návšteve sa banner zobrazí znovu a môžeš
            zvoliť odznova.
          </p>
          <button onClick={goHome}>Späť na hlavnú stránku</button>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
