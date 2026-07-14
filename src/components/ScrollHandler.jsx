import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId =
      location.state?.scrollTo || location.hash.replace("#", "");

    if (sectionId) {
      const timer = setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top, behavior: "smooth" });
        }
        if (location.state?.scrollTo) {
          window.history.replaceState({}, document.title);
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

export default ScrollHandler;
