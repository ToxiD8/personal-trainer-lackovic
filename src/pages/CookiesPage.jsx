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
            používame malé dátové súbory nazývané cookies. Toto je bežný spôsob,
            aký využívajú mnohé moderné weby.
          </p>
          <h2>Čo vlastne cookies sú?</h2>
          <p>
            Cookies je malý textový súbor, ktorý sa uloží do vášho zariadenia
            počas prehliadania webu. Tieto súbory umožňujú stránke zapamätať si
            vaše nastavenia, ako napríklad preferovaný jazyk alebo veľkosť
            písma, aby ste ich nemuseli opakovane nastavovať.
          </p>
          <h2>Ako a prečo ich využívame?</h2>
          <p>
            Naša stránka používa cookies na uchovanie vašich nastavení,
            prispôsobenie obsahu a reklám podľa vašich preferencií a na
            zabezpečenie funkčnosti stránok.
          </p>
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
            . Môžete ich vymazať zo svojho zariadenia a prehliadač nastaviť tak,
            aby ich ukladanie blokoval. Upozorňujeme však, že niektoré funkcie
            stránok môžu bez cookies fungovať obmedzene.
          </p>
          <h2>Ako vypnúť cookies?</h2>
          <p>
            Používanie cookies môžete regulovať v nastaveniach vášho
            prehliadača. Väčšina prehliadačov ich predvolene povolí, no vy ich
            môžete kedykoľvek deaktivovať.
          </p>
          <button onClick={goHome}>Späť na hlavnú stránku</button>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
