import { useState, useRef, useEffect } from "react";

const HeroMedia = ({ posterSrcDesktop, videoSources = [], alt }) => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Intersection Observer
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(sectionEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className="hero-media-wrapper">
      <picture>
        <img
          src={posterSrcDesktop}
          alt={alt}
          fetchPriority="high"
          decoding="async"
          className={`hero-poster ${isVideoReady ? "faded" : ""}`}
        />
      </picture>
      {shouldLoadVideo && !hasError && (
        <video
          ref={videoRef}
          className={`hero-video ${isVideoReady ? "visible" : ""}`}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setIsVideoReady(true)}
          onError={() => setHasError(true)}
        >
          {videoSources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      )}
    </div>
  );
};

export default HeroMedia;
