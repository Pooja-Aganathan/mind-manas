import { Link } from "react-router-dom";

function IntroSection() {
  return (
    <section className="intro-section">
      <div className="intro-label">
        A LITTLE ABOUT US
      </div>

      <div className="intro-content">
        <div className="intro-heading">
          <h2>
            Mental healthcare that
            <br />
            starts with understanding.
          </h2>
        </div>

        <div className="intro-text">
          <p>
            At Mind & Manas, we believe that every person deserves
            a safe and supportive space to talk, understand themselves,
            and move forward with confidence.
          </p>

          <Link to="/about" className="intro-link">
            Discover Our Story →
          </Link>
        </div>
      </div>

      {/* rest of your code */}
    </section>
  );
}

export default IntroSection;