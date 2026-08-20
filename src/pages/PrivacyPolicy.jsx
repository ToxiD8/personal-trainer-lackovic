import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Ochrana osobných údajov - Simona Lackovičová";

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute(
      "content",
      "Informácie o spracúvaní osobných údajov na webe simonalackovic.sk.",
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
    <main className="privacy-policy">
      <div className="privacy-policy__container">
        <header className="privacy-policy__header">
          <span className="privacy-policy__eyebrow">
            Ochrana osobných údajov
          </span>
          <h1>Zásady ochrany osobných údajov</h1>
          <p className="privacy-policy__subtitle">
            pre webovú stránku simonalackovic.sk
          </p>
          <p className="privacy-policy__intro">
            Prevádzkovateľka webovej stránky <strong>simonalackovic.sk</strong>,
            Mgr. Simona Lackovičová, MBA, spracúva osobné údaje, ktoré jej
            poskytnete prostredníctvom kontaktného formulára, pri komunikácii
            alebo v súvislosti s poskytovaním osobných tréningov a ďalších
            služieb. Spracúvané údaje zahŕňajú najmä identifikačné, kontaktné,
            komunikačné a v nevyhnutnom rozsahu aj údaje súvisiace s
            poskytovaním služieb.
          </p>

          <div className="privacy-policy__date">
            Účinné od: <strong>18. 8. 2026</strong>
          </div>
        </header>

        <div className="privacy-policy__content">
          <section>
            <h2>1. Totožnosť a kontaktné údaje prevádzkovateľa</h2>

            <p>Prevádzkovateľkou Vašich osobných údajov je:</p>

            <div className="privacy-policy__contact-card">
              <strong>Mgr. Simona Lackovičová, MBA</strong>
              <span>Bezručova 2155/63</span>
              <span>958 03 Partizánske</span>
              <span>Slovenská republika</span>

              <div className="privacy-policy__contact-divider" />

              <span>IČO: 57115281</span>
              <span>DIČ: 1130628862</span>

              <div className="privacy-policy__contact-divider" />

              <span>
                E-mail:{" "}
                <a href="mailto:lackovicovasimon@gmail.com">
                  lackovicovasimon@gmail.com
                </a>
              </span>

              <span>
                Telefón: <a href="tel:+421908809710">+421 908 809 710</a>
              </span>

              <span>
                Webová stránka:{" "}
                <a
                  href="https://simonalackovic.sk"
                  target="_blank"
                  rel="noreferrer"
                >
                  simonalackovic.sk
                </a>
              </span>
            </div>

            <p>
              Prevádzkovateľka nemenovala zodpovednú osobu pre ochranu osobných
              údajov.
            </p>
          </section>

          <section>
            <h2>2. Rozsah spracúvaných osobných údajov</h2>

            <p>
              Prevádzkovateľka môže spracúvať najmä tieto kategórie osobných
              údajov:
            </p>

            <ul>
              <li>identifikačné údaje, najmä meno a priezvisko</li>
              <li>kontaktné údaje, najmä e-mailová adresa a telefónne číslo</li>
              <li>
                údaje uvedené v kontaktnom formulári, najmä typ služby a obsah
                správy
              </li>
              <li>údaje z následnej komunikácie so záujemcom alebo klientom</li>
              <li>údaje potrebné na uzatvorenie a plnenie zmluvy</li>
              <li>fakturačné a účtovné údaje</li>
              <li>
                technické údaje súvisiace s bezpečnosťou a prevádzkou webovej
                stránky
              </li>
              <li>
                údaje spracúvané prostredníctvom cookies a analytických
                nástrojov v rozsahu uvedenom v Zásadách používania cookies
              </li>
            </ul>

            <p>
              Pri poskytovaní osobných tréningov môžu byť mimo webovej stránky,
              najmä osobne počas konzultácie, získavané aj údaje súvisiace s
              fyzickou kondíciou, telesnými parametrami, tréningovými cieľmi,
              zraneniami alebo zdravotnými obmedzeniami, ak sú potrebné na
              bezpečné a primerané poskytovanie služby.
            </p>
          </section>

          <section>
            <h2>3. Zákonný dôvod spracúvania osobných údajov</h2>

            <p>Zákonným dôvodom spracúvania osobných údajov je najmä:</p>

            <ul>
              <li>
                <strong>
                  plnenie zmluvy alebo vykonanie opatrení pred uzatvorením
                  zmluvy
                </strong>{" "}
                podľa čl. 6 ods. 1 písm. b) GDPR, napríklad pri vybavovaní
                požiadavky na osobný tréning
              </li>
              <li>
                <strong>splnenie zákonných povinností</strong> podľa čl. 6 ods.
                1 písm. c) GDPR, najmä v oblasti účtovníctva a daní
              </li>
              <li>
                <strong>oprávnený záujem prevádzkovateľky</strong> podľa čl. 6
                ods. 1 písm. f) GDPR, najmä na zabezpečenie prevádzky a
                bezpečnosti webovej stránky, ochranu pred jej zneužitím a
                ochranu právnych nárokov
              </li>
              <li>
                <strong>súhlas</strong> podľa čl. 6 ods. 1 písm. a) GDPR, ak sa
                v konkrétnom prípade na spracúvanie vyžaduje
              </li>
            </ul>

            <p>
              Pri spracúvaní údajov týkajúcich sa zdravia sa uplatňujú aj
              podmienky podľa čl. 9 GDPR.
            </p>
          </section>

          <section>
            <h2>4. Účel spracúvania osobných údajov</h2>

            <p>Osobné údaje sú spracúvané najmä na tieto účely:</p>

            <ul>
              <li>vybavenie kontaktnej správy alebo dopytu</li>
              <li>komunikácia so záujemcami a klientmi</li>
              <li>uzatvorenie a plnenie zmluvného vzťahu</li>
              <li>poskytovanie osobných tréningov a súvisiacich služieb</li>
              <li>fakturácia a plnenie účtovných a daňových povinností</li>
              <li>
                zabezpečenie bezpečnosti a správneho fungovania webovej stránky
              </li>
              <li>
                ochrana kontaktného formulára pred automatizovaným a škodlivým
                odosielaním prostredníctvom Cloudflare Turnstile
              </li>
              <li>
                meranie návštevnosti a zlepšovanie webovej stránky
                prostredníctvom Google Analytics, ak návštevník udelil príslušný
                súhlas
              </li>
              <li>zobrazovanie verejne dostupných recenzií zo služby Google</li>
            </ul>

            <p>
              Prevádzkovateľka nevykonáva automatizované individuálne
              rozhodovanie podľa čl. 22 GDPR a nevytvára marketingové profily
              návštevníkov.
            </p>
          </section>

          <section>
            <h2>5. Doba uchovávania osobných údajov</h2>

            <p>
              Osobné údaje sú uchovávané len po dobu nevyhnutnú na splnenie
              účelu spracúvania alebo po dobu stanovenú právnymi predpismi.
            </p>

            <ul>
              <li>
                Údaje z kontaktného formulára a následnej komunikácie sa
                uchovávajú po dobu potrebnú na vybavenie požiadavky a následnú
                komunikáciu.
              </li>
              <li>
                Ak dôjde k uzatvoreniu zmluvného vzťahu, príslušné údaje sa
                uchovávajú počas jeho trvania a následne po dobu potrebnú na
                splnenie zákonných povinností alebo ochranu právnych nárokov.
              </li>
              <li>
                Fakturačné a účtovné údaje sa uchovávajú počas lehôt stanovených
                príslušnými právnymi predpismi.
              </li>
              <li>
                Údaje spracúvané na základe súhlasu sa uchovávajú do jeho
                odvolania alebo do naplnenia účelu, na ktorý bol súhlas udelený,
                ak neexistuje iný právny dôvod na ich ďalšie uchovávanie.
              </li>
              <li>
                Technické a bezpečnostné údaje sa uchovávajú po dobu primeranú
                účelu ich spracúvania.
              </li>
            </ul>

            <p>
              Po uplynutí príslušnej doby prevádzkovateľka osobné údaje vymaže,
              anonymizuje alebo inak bezpečne zlikviduje, ak ich ďalšie
              uchovávanie nie je potrebné.
            </p>
          </section>

          <section>
            <h2>6. Príjemcovia osobných údajov</h2>

            <p>
              Osobné údaje môžu byť v nevyhnutnom rozsahu sprístupnené najmä:
            </p>

            <ul>
              <li>poskytovateľovi doménových služieb - Webglobe</li>
              <li>poskytovateľovi hostingových služieb - Vercel</li>
              <li>poskytovateľovi e-mailových služieb - Google/Gmail</li>
              <li>poskytovateľovi bezpečnostnej služby - Cloudflare</li>
              <li>
                poskytovateľovi služieb Google Maps Platform / Google Places
              </li>
              <li>
                účtovníčke, v rozsahu potrebnom na vedenie účtovníctva a plnenie
                zákonných povinností
              </li>
              <li>orgánom verejnej moci, ak to vyžaduje právny predpis</li>
            </ul>

            <p>
              Prevádzkovateľka sprístupňuje osobné údaje len v rozsahu
              nevyhnutnom na splnenie konkrétneho účelu alebo zákonnej
              povinnosti.
            </p>
          </section>

          <section>
            <h2>7. Prenos osobných údajov do tretích krajín</h2>

            <p>
              Pri využívaní niektorých služieb poskytovaných spoločnosťami so
              sídlom mimo Európskej únie alebo Európskeho hospodárskeho
              priestoru môže dochádzať k prenosu alebo spracúvaniu osobných
              údajov v tretích krajinách.
            </p>

            <p>
              Ak k takémuto prenosu dochádza, prevádzkovateľka zabezpečuje jeho
              vykonávanie v súlade s GDPR a prostredníctvom príslušných právnych
              mechanizmov a primeraných záruk.
            </p>
          </section>

          <section>
            <h2>8. Cookies, Google Analytics a ďalšie online služby</h2>

            <p>Webová stránka používa nevyhnutné a analytické cookies.</p>

            <p>
              Analytické cookies služby <strong>Google Analytics</strong> sa
              používajú iba na základe súhlasu návštevníka.
            </p>

            <p>
              Kontaktný formulár využíva <strong>Cloudflare Turnstile</strong>{" "}
              na ochranu pred automatizovaným a škodlivým odosielaním.
            </p>

            <p>
              Na webovej stránke sa zároveň dynamicky zobrazujú verejne dostupné
              recenzie zo služby <strong>Google</strong>, pričom sa môžu
              zobrazovať údaje autora recenzie, napríklad meno, profilová
              fotografia a text recenzie.
            </p>

            <p>
              Podrobné informácie o používaných cookies, ich účele, type, dobe
              platnosti a spôsobe ich správy sú uvedené na samostatnej stránke{" "}
              <strong>Cookies</strong>.
            </p>
          </section>

          <section>
            <h2>9. Práva dotknutej osoby</h2>

            <p>Za podmienok stanovených GDPR máte právo:</p>

            <ul>
              <li>na prístup k svojim osobným údajom</li>
              <li>na opravu nepresných alebo neúplných osobných údajov</li>
              <li>na vymazanie osobných údajov</li>
              <li>na obmedzenie spracúvania</li>
              <li>na prenosnosť údajov</li>
              <li>
                namietať proti spracúvaniu založenému na oprávnenom záujme
              </li>
              <li>
                kedykoľvek odvolať súhlas, ak je spracúvanie založené na súhlase
              </li>
            </ul>

            <p>
              Svoje práva môžete uplatniť e-mailom na adrese{" "}
              <a href="mailto:lackovicovasimon@gmail.com">
                lackovicovasimon@gmail.com
              </a>{" "}
              alebo písomne na adrese prevádzkovateľky.
            </p>

            <p>
              Prevádzkovateľka vybavuje žiadosti v lehotách stanovených GDPR,
              spravidla najneskôr do jedného mesiaca.
            </p>

            <p>
              Ak sa domnievate, že došlo k porušeniu ochrany Vašich osobných
              údajov, máte právo podať sťažnosť dozornému orgánu:
            </p>

            <div className="privacy-policy__contact-card privacy-policy__contact-card--compact">
              <strong>
                Úrad na ochranu osobných údajov Slovenskej republiky
              </strong>
              <span>Hraničná 4826/12</span>
              <span>820 07 Bratislava 27</span>
              <span>Slovenská republika</span>
            </div>
          </section>

          <section>
            <h2>10. Povinnosť poskytnúť osobné údaje</h2>

            <p>
              Poskytnutie osobných údajov môže byť v niektorých prípadoch
              nevyhnutné na vybavenie Vašej požiadavky, uzatvorenie a plnenie
              zmluvy alebo splnenie zákonnej povinnosti.
            </p>

            <p>
              Bez poskytnutia potrebných údajov nemusí byť možné odpovedať na
              Vašu požiadavku, dohodnúť alebo poskytnúť službu, vystaviť faktúru
              alebo splniť príslušnú zákonnú povinnosť.
            </p>
          </section>

          <section>
            <h2>11. Záverečné ustanovenia</h2>

            <p>
              Tieto Zásady ochrany osobných údajov nadobúdajú účinnosť dňa{" "}
              <strong>18. 8. 2026</strong>.
            </p>

            <p>
              Prevádzkovateľka si vyhradzuje právo tieto zásady aktualizovať
              najmä v prípade zmeny spôsobu spracúvania osobných údajov,
              používaných technológií alebo právnych predpisov.
            </p>

            <p>
              Aktuálna verzia zásad je vždy dostupná na webovej stránke{" "}
              <strong>simonalackovic.sk</strong>.
            </p>
          </section>
          <a className="privacy-policy__back" href="/">
            Späť na hlavnú stránku
          </a>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
