import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { scrollToSection } from "../utils/scrollToSection";
import logo from "/assets/images/logo/logo.webp";

const navColored = "rgba(0, 0, 0, 0.8)";
const navBlur = "blur(12px)";

const NavBar = () => {
  const [togglerExpanded, setTogglerExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navbarRef = useRef(null);
  const prevScrollY = useRef(0);

  // sets navbar background on page load and when toggler is expanded
  useEffect(() => {
    const navbarBg = navbarRef.current;

    if (togglerExpanded) {
      navbarBg.style.background = navColored;
      navbarBg.style.backdropFilter = navBlur;
    } else {
      const timeout = setTimeout(() => {
        const scrollY = window.scrollY;
        if (location.pathname === "/cookies") {
          navbarBg.style.background = navColored;
          navbarBg.style.backdropFilter = navBlur;
        } else {
          navbarBg.style.background = scrollY > 1 ? navColored : null;
          navbarBg.style.backdropFilter = scrollY > 1 ? navBlur : null;
        }
      }, 350);
      return () => clearTimeout(timeout);
    }
  }, [togglerExpanded, location]);

  // shows/hides navbar on scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const navbarBg = navbarRef.current;

      if (togglerExpanded) return;

      if (scrollY > prevScrollY.current && scrollY > 80) {
        navbarBg.style.transform = "translateY(-100%)";
      } else {
        navbarBg.style.transform = "translateY(0)";
        navbarBg.style.background =
          scrollY > 1
            ? navColored
            : location.pathname === "/"
              ? null
              : navColored;
        navbarBg.style.backdropFilter =
          scrollY > 1 ? navBlur : location.pathname === "/" ? null : navBlur;
      }
      prevScrollY.current = scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [location, togglerExpanded]);

  // close mobile navbar when clicking outside
  useEffect(() => {
    if (!togglerExpanded) return;

    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setTogglerExpanded(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [togglerExpanded]);

  // scrolls to section on nav link click
  // logo
  const handleLogoClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
    setTogglerExpanded(false);
  };

  // nav links
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
    setTogglerExpanded(false);
  };

  return (
    <Navbar
      expanded={togglerExpanded}
      expand="lg"
      fixed="top"
      ref={navbarRef}
      className={togglerExpanded ? "menu-open" : ""}
    >
      <Container fluid>
        <Navbar.Brand onClick={(e) => handleLogoClick(e, "hero")}>
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={() => setTogglerExpanded((prev) => !prev)}
          className="navbar-dark"
        />

        <Navbar.Collapse className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link onClick={(e) => handleNavClick(e, "about")}>
              O mne
            </Nav.Link>
            <Nav.Link onClick={(e) => handleNavClick(e, "pricing")}>
              Cenník
            </Nav.Link>
            <Nav.Link onClick={(e) => handleNavClick(e, "feedback")}>
              Referencie
            </Nav.Link>
            <Nav.Link onClick={(e) => handleNavClick(e, "faq")}>FAQ</Nav.Link>
            <Nav.Link onClick={(e) => handleNavClick(e, "contact")}>
              Kontakt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
