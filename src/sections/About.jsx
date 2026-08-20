import { useEffect, useRef, useState } from "react";
import aboutImg from "/assets/images/about/about-img.webp";
import aboutImgMobile from "/assets/images/about/about-img-mobile.webp";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaMedal,
  FaAppleWhole,
} from "react-icons/fa6";

const CountStat = ({ target, suffix = "+", label, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.round(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div className="about-stat" ref={ref}>
      <span className="about-stat-number">
        {count}
        {suffix}
      </span>
      <span className="about-stat-label">{label}</span>
    </div>
  );
};

const About = ({ scrollToContact }) => {
  return (
    <>
      <section id="about">
        <div className="about-container">
          <div className="about-left">
            <picture aria-hidden="true">
              <source media="(max-width: 600px)" srcSet={aboutImgMobile} />
              <img src={aboutImg} width="2400" height="1600" alt="" />
            </picture>
          </div>
          <div className="about-right animate-right" data-delay="500">
            <h2>O mne</h2>
            <h3>Ahoj, volám sa Simona.</h3>
            <div className="about-right-text">
              <p>
                Pomáham ľuďom budovať telo, na ktoré môžu byť hrdí. Ešte viac ma
                však baví budovať spôsob myslenia, vďaka ktorému si výsledky
                udržia celý život.
              </p>
              <p>
                Za každou úspešnou premenou nestojí dokonalý tréningový plán ani
                krátkodobá motivácia. Stojí za ňou systém, disciplína a ochota
                prevziať zodpovednosť za vlastné rozhodnutia. Práve na týchto
                princípoch som vybudovala značku LACKOVIC.
              </p>
              <p>
                Počas viac ako šiestich rokov profesionálnej praxe som pomohla
                viac ako 300 klientom online aj osobne dosiahnuť ich ciele - od
                redukcie hmotnosti, cez budovanie svalovej hmoty až po zlepšenie
                výkonnosti a celkového životného štýlu. Každá spolupráca ma
                utvrdila v jednej veci - skutočná zmena nezačína v posilňovni.
                Začína v hlave. Moja práca preto nie je len o tréningoch. Je o
                vytváraní systému, ktorý klientom pomáha fungovať dlhodobo aj
                mimo fitka.
              </p>
            </div>
          </div>
        </div>

        <div className="about-details">
          <div className="about-stats animate-bottom" data-delay="300">
            <CountStat target={300} label="klientov" />
            <CountStat target={7} label="rokov praxe" />
            <CountStat target={6} label="rokov súťaženia" />
          </div>
          <div className="about-block animate-bottom" data-delay="400">
            <h3>Odbornosť postavená na praxi</h3>
            <p>
              Pohyb je súčasťou môjho života od detstva. Päť rokov som sa
              venovala atletike, reprezentovala Slovensko na medzinárodných
              súťažiach a získala viacero titulov majsterky Slovenska. Dnes
              svoju výkonnosť testujem v športoch ako Spartan Race a Hyrox,
              pretože verím, že tréner by mal byť príkladom toho, čo učí.
            </p>

            <div className="about-education">
              <div className="about-education-item">
                <FaGraduationCap className="about-education-icon" />
                <span>Športové gymnázium, Nitra</span>
              </div>
              <div className="about-education-item">
                <FaBriefcase className="about-education-icon" />
                <span>Manažment podniku, VŠM Bratislava</span>
              </div>
              <div className="about-education-item">
                <FaCertificate className="about-education-icon" />
                <span>MBA - Marketing &amp; PR</span>
              </div>
              <div className="about-education-item">
                <FaMedal className="about-education-icon" />
                <span>Level 2 Fitness Instructor (UK)</span>
              </div>
              <div className="about-education-item">
                <FaMedal className="about-education-icon" />
                <span>Level 3 Personal Trainer (UK)</span>
              </div>
              <div className="about-education-item">
                <FaAppleWhole className="about-education-icon" />
                <span>Advanced Diet Planning &amp; Meal Prep</span>
              </div>
            </div>
          </div>
          <div className="about-outro animate-bottom" data-delay="500">
            <h3>Čo od spolupráce môžeš očakávať</h3>
            <p>
              Ak hľadáš niekoho, kto ťa bude neustále presviedčať, aby si
              začal/a, pravdepodobne nie som správna voľba.
            </p>
            <p>
              Ak však hľadáš odborné vedenie, jasný systém, úprimnú spätnú väzbu
              a partnera, ktorý ti pomôže dosiahnuť výsledky, potom ťa rada
              prevediem celou cestou.
            </p>
            <button onClick={scrollToContact} className="about-cta">
              Kontaktuj ma
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
