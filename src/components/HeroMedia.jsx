import { useState, useRef } from "react";

const HeroMedia = ({ videoSources = [], alt }) => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div ref={sectionRef} className="hero-media-wrapper">
      {!hasError && (
        <video
          ref={videoRef}
          className={`hero-video ${isVideoReady ? "visible" : ""}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setIsVideoReady(true)}
          onError={() => setHasError(true)}
          alt={alt}
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
