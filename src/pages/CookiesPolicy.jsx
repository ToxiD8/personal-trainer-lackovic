import { useEffect } from "react";

const CookiesPolicy = () => {
  useEffect(() => {
    document.title = "Cookies - Simona Lackovičová";

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute(
      "content",
      "Informácie o používaní cookies na webe simonalackovic.sk.",
    );

    const metaRobots = document.querySelector('meta[name="robots"]');
    metaRobots.setAttribute("content", "noindex, follow");

    return () => {
      document.title = "Simona Lackovičová - osobná trénerka";
      metaDescription.setAttribute(
        "content",
        "Simona Lackovičová - osobná trénerka. Tréning a výživa pre ľudí, ktorí chcú výsledky, nie skratky.",
      );
      metaRobots.setAttribute("content", "index, follow");
    };
  }, []);

  return (
    <main className="cookies-page">
      <div className="cookies-page__container">
        <header className="cookies-page__header">
          <span className="cookies-page__eyebrow">Cookies</span>
          <h1>Zásady používania cookies</h1>
          <p className="cookies-page__intro">
            Webová stránka simonalackovic.sk používa cookies, ktoré sú
            nevyhnutné pre jej správne fungovanie, a analytické cookies, ktoré
            pomáhajú zlepšovať jej obsah a fungovanie.
          </p>
        </header>
        <div className="cookies-page__content">
          <section>
            <h2>Čo sú cookies?</h2>
            <p>
              Cookies sú malé súbory, ktoré sa ukladajú do zariadenia pri
              návšteve webovej stránky. Pomáhajú stránke zapamätať si určité
              informácie a správne fungovať pri ďalšej návšteve.
            </p>
          </section>
          <section>
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
                  <td data-label="Názov">cookieConsent</td>
                  <td data-label="Účel">
                    Uloženie voľby návštevníka o používaní cookies
                  </td>
                  <td data-label="Typ">Nevyhnutné</td>
                  <td data-label="Platnosť">30 dní</td>
                  <td data-label="Vydavateľ">Táto stránka</td>
                </tr>
                <tr>
                  <td data-label="Názov">_ga</td>
                  <td data-label="Účel">
                    Rozlíšenie návštevníkov (Google Analytics)
                  </td>
                  <td data-label="Typ">Analytické</td>
                  <td data-label="Platnosť">2 roky</td>
                  <td data-label="Vydavateľ">Google</td>
                </tr>
                <tr>
                  <td data-label="Názov">_ga_*</td>
                  <td data-label="Účel">
                    Udržiavanie stavu relácie (Google Analytics)
                  </td>
                  <td data-label="Typ">Analytické</td>
                  <td data-label="Platnosť">2 roky</td>
                  <td data-label="Vydavateľ">Google</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <h2>Správa cookies</h2>
            <p>
              Cookies môžete kedykoľvek vymazať alebo spravovať v nastaveniach
              svojho webového prehliadača. Podrobné informácie o správe cookies
              nájdete napríklad na stránke{" "}
              <a
                href="https://www.aboutcookies.org/"
                target="_blank"
                rel="noreferrer"
              >
                aboutcookies.org
              </a>
              .
            </p>
            <p>
              Vypnutie nevyhnutných cookies môže ovplyvniť správne fungovanie
              niektorých častí webovej stránky.
            </p>
          </section>
          <section>
            <h2>Odvolanie súhlasu</h2>
            <p>
              Ak chcete svoj súhlas s analytickými cookies odvolať, vymažte
              cookie <strong>cookieConsent</strong> v nastaveniach svojho
              prehliadača. Pri ďalšej návšteve sa zobrazí cookie banner, v
              ktorom môžete svoju voľbu zmeniť.
            </p>
          </section>
          <a className="cookies-page__back" href="/">
            Späť na hlavnú stránku
          </a>
        </div>
      </div>
    </main>
  );
};

export default CookiesPolicy;
