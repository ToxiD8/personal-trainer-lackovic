import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "/assets/images/logo/logo.webp";
import useClickOutside from "../utils/useClickOutside";

const navColored = "rgba(0, 0, 0, 0.8)";
const navBlur = "blur(12px)";

const NavBar = () => {
  const navbarRef = useRef(null);
  const prevScrollY = useRef(0);

  const [togglerExpanded, setTogglerExpanded] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

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

  // scrolls to section on nav link click
  const handleNavClick = (sectionId) => {
    navigate("/", { state: { scrollTo: sectionId } });
    setTogglerExpanded(false);
  };

  // close mobile navbar when clicking outside
  useClickOutside(navbarRef, togglerExpanded, () => setTogglerExpanded(false));

  return (
    <Navbar
      expanded={togglerExpanded}
      expand="lg"
      fixed="top"
      ref={navbarRef}
      className={togglerExpanded ? "menu-open" : ""}
    >
      <Container fluid>
        <Navbar.Brand onClick={() => handleNavClick("hero")}>
          <img
            src={logo}
            alt="Logo"
            className="logo"
            width="107"
            height="100"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setTogglerExpanded((prev) => !prev)}
          className="navbar-dark"
        />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavClick("about")}>O mne</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("pricing")}>
              Cenník
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("feedback")}>
              Recenzie
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("faq")}>Faq</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("contact")}>
              Kontakt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
