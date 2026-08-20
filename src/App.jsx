import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import ScrollHandler from "./components/ScrollHandler";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import Cookies from "./components/Cookies";
import CookiesPolicy from "./pages/CookiesPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Hero from "./components/Hero";
import About from "./sections/About";
import Pricing from "./sections/Pricing";
import Feedback from "./sections/Feedback";
import Faq from "./sections/Faq";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const MainPage = () => {
  // scrolls smoothly to contact section from Hero and Pricing
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const top = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Intersection Observer
  useEffect(() => {
    const localObservers = [];

    const animated = document.querySelectorAll(
      ".animate-right, .animate-bottom",
    );

    animated.forEach((el) => {
      const localObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
              setTimeout(() => {
                entry.target.classList.add("visible");
              }, delay);
              localObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 },
      );

      localObserver.observe(el);
      localObservers.push(localObserver);
    });

    return () => {
      localObservers.forEach((lo) => lo.disconnect());
    };
  }, []);

  return (
    <main>
      <Hero scrollToContact={scrollToContact} />
      <About scrollToContact={scrollToContact} />
      <Pricing scrollToContact={scrollToContact} />
      <Feedback />
      <Faq />
      <Contact />
    </main>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <NavBar />
      <Cookies />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ochrana-osobnych-udajov" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <Toaster richColors theme="dark" position="bottom-center" />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
