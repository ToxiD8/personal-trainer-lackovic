import { useEffect, useRef } from "react";

const Hero = ({ scrollToContact }) => {
  const bgRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    const hero = bg.parentElement;

    // bg.style.transform = `translateY(0px) scale(1.08)`;

    let ticking = false;

    const updateParallax = () => {
      const scrollY = window.scrollY;

      if (scrollY <= hero.offsetHeight) {
        bg.style.transform = `translateY(${scrollY * 0.3}px) scale(1.08)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    // const onScroll = () => {
    //   const scrollY = window.scrollY;

    //   if (scrollY > hero.offsetHeight) return;

    //   bg.style.transform = `translateY(${scrollY * 0.3}px) scale(1.08)`;
    // };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg" ref={bgRef} />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-eyebrow">Simona Lackovičová Fitness Coaching</div>
        <h1 className="hero-title">
          <span className="hero-title-line">Hackujem telá.</span>
          <span className="hero-title-line">Prepínam mysle.</span>
          <span className="hero-title-line hero-title-accent">
            Tvorím elitu.
          </span>
        </h1>
        <p className="hero-subtitle">
          Trénujem, koučujem a vytváram systém online a offline.
        </p>
        <div className="hero-cta-group">
          <button onClick={scrollToContact} className="hero-cta-primary">
            Začni teraz
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
