import React, { useState, useEffect } from "react";
import "../Style/Header.css";
import UpdatedLogo from '../assets/UpdatedLogo.png';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [color, setColor] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const changeColor = () => {
    if (window.scrollY >= 90 || menuOpen) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener('scroll', changeColor);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const isHomePage = location.pathname === '/';

  return (
    <>
      <div className={`navbar ${isHomePage && !color ? (menuOpen ? 'navbar-bg' : 'navbar-transparent') : 'navbar-bg'}`}>
        <div className="nav-logo">
          <Link to="/">
            <img src={UpdatedLogo} alt="Logo" />
          </Link>
        </div>
        {isMobile ? (
          <>
            <div className="hamburger-menu" onClick={toggleMenu}>
              <span className={`bar ${menuOpen ? "open" : ""}`}></span>
              <span className={`bar ${menuOpen ? "open" : ""}`}></span>
              <span className={`bar ${menuOpen ? "open" : ""}`}></span>
            </div>
            <div className={`nav-menu ${menuOpen ? "open active" : ""}`}>
              <div className="nav-menu-header">
                <Link to="/" onClick={toggleMenu}>
                  <img src={UpdatedLogo} alt="Logo" />
                </Link>
                <div className="close-menu" onClick={toggleMenu}>
                  <span className="bar close-bar"></span>
                  <span className="bar close-bar"></span>
                </div>
              </div>
              <ul>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/About-us" onClick={toggleMenu}>About</Link></li>
                <li><Link to="/services" onClick={toggleMenu}>Service</Link></li>
                <li className="nav-contact"><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
              </ul>
            </div>
          </>
        ) : (
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About-us">About</Link></li>
            <li><Link to="/services">Service</Link></li>
            <li className="nav-contact"><Link to="/contact">Contact Us</Link></li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
