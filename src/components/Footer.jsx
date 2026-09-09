import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-intro">
          <img src={logo} alt="Mind Manas" className="footer-logo-image" />
          
          <button onClick={scrollToTop} className="footer-top-button">
            Back to top ↑
          </button>
        </div>

        <div className="footer-column">
          <h4>EXPLORE</h4>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-column">
          <h4>OUR SERVICES</h4>

          <Link to="/">Therapy for Adults</Link>
          <Link to="/">Therapy for Couples</Link>
          <Link to="/">Therapy for Kids & Teens</Link>
          <Link to="/">Life Coaching</Link>
        </div>

        <div className="footer-column footer-contact">
          <h4>GET IN TOUCH</h4>

          <p>Chennai, Tamil Nadu</p>
          <a href="tel:+917810094326">+91 78100 94326</a>
          <a href="mailto:support@mindandmanas.com">
            support@mindandmanas.com
          </a>

          <Link to="/contact" className="footer-appointment">
            Book an Appointment <span>↗</span>
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Mind Manas. All rights reserved.</p>

        <div className="footer-socials">
          <span>Instagram</span>
          <span>Facebook</span>
        </div>

        <p>Designed with care for better mental well-being.</p>
      </div>
    </footer>
  );
}

export default Footer;