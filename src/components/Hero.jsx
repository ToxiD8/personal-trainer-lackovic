import { useEffect, useRef } from "react";
import HeroMedia from "./HeroMedia";

const Hero = ({ scrollToContact }) => {
  const bgRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    const hero = document.getElementById("hero");

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

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg" ref={bgRef}>
        <HeroMedia
          posterSrcDesktop="/assets/images/hero/hero-bg.webp"
          videoSources={[
            {
              src: "https://pub-c8df2b2d494f484cb84ac4394114164f.r2.dev/hero.webm",
              type: "video/webm",
            },
            {
              src: "https://pub-c8df2b2d494f484cb84ac4394114164f.r2.dev/hero.mp4",
              type: "video/mp4",
            },
          ]}
          alt="Hero"
        />
      </div>
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
