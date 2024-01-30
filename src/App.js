import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "./compo/logo.png";
import Home from "./compo/Home";
import About from "./compo/AboutMe";
import Skills from "./compo/Skills";
import Projects from "./compo/Projects";
import Contact from "./compo/Contact";
import Footer from "./compo/Footer";

function App() {
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      setNavbarBg("#ffffff");
    } else {
      setNavbarBg("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavItemClick = () => {
    // Close the Offcanvas when a Nav.Link is clicked
    setShowOffcanvas(false);
  };

  return (
    <div className="App">
      <Navbar
        fixed="top"
        expand="sm"
        className="mb-3"
        style={{ backgroundColor: navbarBg }}
        data-aos="fade-right"
      >
        <Container fluid>
          <Navbar.Brand>
            <img src={Logo} alt="Logo" srcset="" className="LOGO" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-md"
            onClick={() => setShowOffcanvas(!showOffcanvas)}
          />
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)} // Close Offcanvas when clicking outside
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                <h1 className="Heading">Portfolio</h1>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                onClick={handleNavItemClick}
              >
                <Nav.Link href="#Home" smooth>
                  <h5>Home</h5>
                </Nav.Link>
                <Nav.Link href="#About" smooth>
                  <h5>About</h5>
                </Nav.Link>
                <Nav.Link href="#Skill" smooth>
                  <h5>Skills</h5>
                </Nav.Link>
                <Nav.Link href="#Projects" smooth>
                  <h5>Projects</h5>
                </Nav.Link>
                <Nav.Link href="#Contacts" className="Con" smooth>
                  <h5>Contact</h5>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className="Elements">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
