import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { useEffect } from "react";

import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import Cookies from "./components/Cookies";
import CookiesPage from "./pages/CookiesPage";
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
          // else {
          //   entry.target.classList.remove("visible");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".animate-left, .animate-right",
    );
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });

    const localObservers = [];

    const extraItems = document.querySelectorAll(".animate-bottom");
    extraItems.forEach((el, index) => {
      const localObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
            localObserver.unobserve(entry.target);
          }
          // else {
          //   entry.target.classList.remove("visible");
          // }
        });
      });
      localObserver.observe(el);
      localObservers.push(localObserver);
    });

    return () => {
      observer.disconnect();
      localObservers.forEach((lo) => lo.disconnect());
    };
  }, []);

  return (
    <main>
      <Hero scrollToContact={scrollToContact} />
      <About />
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
      <ScrollToTop />
      <NavBar />
      <Cookies />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
      </Routes>
      <Footer />
      <Toaster richColors theme="dark" position="bottom-center" />
    </BrowserRouter>
  );
}

export default App;
