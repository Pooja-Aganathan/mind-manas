import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo" onClick={closeMenu}>
        <img src={logo} alt="Mind Manas" />
      </Link>

      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${menuOpen ? "menu-open" : ""}`}>

        {/* 1. Home */}
        <Link to="/" className="nav-link" onClick={closeMenu}>
          Home
        </Link>

        {/* 2. About Us */}
        <Link to="/about" className="nav-link" onClick={closeMenu}>
          About Us
        </Link>

        {/* 3. Therapists */}
        <Link
          to="/about#therapists"
          className="nav-link"
          onClick={closeMenu}
        >
          Therapists
        </Link>

        {/* 4. Specialties */}
        <Link
          to="/#services"
          className="nav-link"
          onClick={closeMenu}
        >
          Specialties
        </Link>

        {/* 5. Online Therapy */}
        <Link
          to="/#online-therapy"
          className="nav-link"
          onClick={closeMenu}
        >
          Online Therapy
        </Link>

        {/* 6. Contact */}
        <Link
          to="/contact"
          className="nav-link"
          onClick={closeMenu}
        >
          Contact
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;