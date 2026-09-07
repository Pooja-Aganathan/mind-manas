import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <img src={logo} alt="Mind Manas" />
      </Link>

      <div className="nav-links">

        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/about#therapists" className="nav-link">
          Therapists
        </Link>

        <Link to="/#services" className="nav-link">
          Specialties
        </Link>

        <Link to="/#online-therapy" className="nav-link">
          Online Therapy
        </Link>

        <Link to="/contact" className="nav-link">
          Contact
        </Link>

        <Link to="/about" className="nav-link">
          About Us
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;