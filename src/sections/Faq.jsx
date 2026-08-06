import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <section id="faq">
      <div className="faq-container">
        <div className="faq-header animate-bottom" data-delay="300">
          <h2>FAQ: Otázky? Odpovede.</h2>
          <p>
            Tu sú niektoré z najčastejších otázok, ktoré mi klienti kladú. Ak
            máš ďalšie otázky, neváhaj ma kontaktovať prostredníctvom
            kontaktného formulára alebo e-mailu
          </p>
        </div>
        <Accordion
          defaultActiveKey="0"
          className="animate-bottom"
          data-delay="400"
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header as="h3">
              Je osobný tréning vhodný aj pre úplných začiatočníkov?
            </Accordion.Header>
            <Accordion.Body>
              Áno. Väčšinu mojich klientov sprevádzam úplne od začiatku. Na
              prvom mieste je pre mňa správna technika, bezpečnosť a postupné
              budovanie kondície. Tréning vždy prispôsobujem tvojej aktuálnej
              úrovni, zdravotnému stavu aj cieľom. Nemusíš mať žiadne
              skúsenosti, stačí chuť začať.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header as="h3">
              Ako prebieha prvý tréning?
            </Accordion.Header>
            <Accordion.Body>
              Spolupráca nezačína hneď tréningom. Najskôr absolvujeme vstupnú
              konzultáciu, počas ktorej si prejdeme vstupný dotazník, tvoje
              ciele, zdravotný stav, doterajšie skúsenosti a očakávania.
              Súčasťou stretnutia je aj body screening, na základe ktorého
              získam ucelený obraz o tvojom východiskovom stave. Zároveň
              doladíme všetky organizačné záležitosti a nastavíme plán
              spolupráce.
              <br></br>
              <br></br>
              Na nasledujúcom stretnutí absolvuješ svoj prvý tréning. Počas neho
              analyzujem tvoje pohybové vzorce, silné a slabé stránky, prípadné
              pohybové či posturálne odchýlky a postupne ťa uvediem do
              tréningového programu. Vďaka tomu je každý ďalší tréning nastavený
              efektívne, bezpečne a presne podľa tvojich individuálnych potrieb.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header as="h3">
              Ako často by som mal/a trénovať, aby som videl/a výsledky?
            </Accordion.Header>
            <Accordion.Body>
              Neexistuje univerzálna odpoveď. Frekvenciu tréningov nastavujeme
              individuálne podľa tvojich cieľov, časových možností a životného
              štýlu. Pre väčšinu ľudí predstavujú ideálny základ 3-4 silové
              tréningy týždenne. O výsledkoch však nerozhoduje len počet
              tréningov, ale najmä ich pravidelnosť a to, ako vyzerajú tvoje
              návyky mimo fitka.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header as="h3">
              Je súčasťou spolupráce aj pomoc so stravou?
            </Accordion.Header>
            <Accordion.Body>
              Áno. Verím, že kvalitný tréning a správne nastavená výživa idú
              ruka v ruke. Počas spolupráce získaš odporúčania a podklady
              prispôsobené tvojim cieľom, aby bol tvoj progres čo
              najefektívnejší. Neuznávam extrémne diéty ani zbytočné zákazy.
              Cieľom je edukovať klientov a vytvoriť systém, ktorý bude dlhodobo
              udržateľný.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header as="h3">
              Dokážem dosiahnuť výsledky aj keď mám málo času?
            </Accordion.Header>
            <Accordion.Body>
              Áno. Mnoho mojich klientov popri práci, podnikaní alebo
              starostlivosti o rodinu nemá na cvičenie veľa času. Práve preto
              nastavujeme plán tak, aby bol realistický a zapadol do tvojho
              bežného života. Dôležitejšia než dokonalosť je konzistentnosť. Aj
              niekoľko kvalitných tréningov mesačne je lepších ako čakanie na
              „ideálny čas“, ktorý často nikdy nepríde.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header as="h3">
              Čo ak som sa už viackrát snažil/a schudnúť a nepodarilo sa mi to?
            </Accordion.Header>
            <Accordion.Body>
              Nie si v tom sám/a. Väčšina mojich klientov už pred začiatkom
              spolupráce absolvovala niekoľko neúspešných pokusov. Najčastejším
              problémom nebýva nedostatok motivácie, ale chýbajúci systém a
              dlhodobý plán. Mojím cieľom nie je pomôcť ti schudnúť na pár
              mesiacov. Chcem ťa naučiť vytvoriť si návyky, vďaka ktorým si
              výsledky dokážeš udržať aj v budúcnosti.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
