import { Link } from "react-router-dom";
import homepageImage from "../assets/homepage.png";

function Hero() {
  return (
    <section className="hero">

      {/* LEFT CONTENT */}
      <div className="hero-content">

        <p className="hero-tagline">
          MENTAL HEALTH. A BRIGHTER YOU.
        </p>

        <h1>
          Your mind
          <br />
          deserves a safe
          <br />
          space <span>to heal.</span>
        </h1>

        <p className="hero-description">
          Professional mental health support designed around you,
          <br />
          your experiences, and your journey.
        </p>

        <div className="hero-buttons">

          <Link
            to="/contact"
            className="hero-primary-button"
          >
            Book an Appointment →
          </Link>

          <Link
            to="/about"
            className="hero-secondary-button"
          >
            Learn More About Us
          </Link>

        </div>

        <div className="hero-features">

          <div className="hero-feature">
            <div className="feature-icon">♡</div>
            <p>
              Compassionate
              <br />
              Care
            </p>
          </div>

          <div className="hero-feature">
            <div className="feature-icon">♧</div>
            <p>
              Empathetic
              <br />
              Support
            </p>
          </div>

          <div className="hero-feature">
            <div className="feature-icon">◌</div>
            <p>
              Tailored
              <br />
              Solutions
            </p>
          </div>

        </div>

      </div>


      {/* RIGHT IMAGE */}
      <div className="hero-image">

        <img
          src={homepageImage}
          alt="Mind Manas mental wellness"
        />

      </div>

    </section>
  );
}

export default Hero;