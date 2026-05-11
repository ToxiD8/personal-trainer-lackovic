import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "/assets/images/logo/logo.png";

const navColored = "linear-gradient(90deg, #000, var(--innuendo))";
const navTransparent =
  "linear-gradient(to bottom, rgb(0 0 0 / 70%) 10%, transparent 75%)";

const NavBar = () => {
  const [togglerExpanded, setTogglerExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navbarRef = useRef(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const navbarBg = navbarRef.current;

    if (togglerExpanded) {
      navbarBg.style.background = navColored;
    } else {
      navbarBg.style.background = navTransparent;
    }

    if (location.pathname === "/cookies") {
      navbarBg.style.background = navColored;
    }
  }, [togglerExpanded, location]);

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
              ? navTransparent
              : navColored;
      }
      prevScrollY.current = scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [location, togglerExpanded]);

  const handleLogoClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
    setTogglerExpanded(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
    setTogglerExpanded(false);
  };

  return (
    <Navbar expanded={togglerExpanded} expand="lg" fixed="top" ref={navbarRef}>
      <Container fluid>
        <Navbar.Brand onClick={(e) => handleLogoClick(e, "hero")}>
          <img src={logo} alt="logo" className="logo" />
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
