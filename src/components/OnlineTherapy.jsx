import { Link } from "react-router-dom";
import onlineTherapyImage from "../assets/Onlinetherapy.png";

function OnlineTherapy() {
  return (
    <section className="online-final">

      {/* LEFT SIDE */}
      <div className="online-final-left">

        <div className="online-final-image">
          <img
            src={onlineTherapyImage}
            alt="Online therapy session"
          />
        </div>

        {/* STATS */}
        <div className="online-final-stats">

          <div className="online-final-stat">
            <div className="online-stat-icon">
              <svg viewBox="0 0 40 40">
                <circle cx="20" cy="10" r="5" />
                <circle cx="10" cy="15" r="4" />
                <circle cx="30" cy="15" r="4" />
                <path d="M12 32c0-7 3-11 8-11s8 4 8 11" />
                <path d="M2 32c0-5 3-8 8-8" />
                <path d="M30 24c5 0 8 3 8 8" />
              </svg>
            </div>

            <strong>500+</strong>
            <span>Clients Supported</span>
          </div>


          <div className="online-final-divider"></div>


          <div className="online-final-stat">
            <div className="online-stat-icon">
              <svg viewBox="0 0 40 40">
                <path d="M20 4l12 4v9c0 8-5 14-12 18C13 31 8 25 8 17V8z" />
                <path d="M14 19l4 4 8-9" />
              </svg>
            </div>

            <strong>100%</strong>
            <span>Confidential</span>
          </div>


          <div className="online-final-divider"></div>


          <div className="online-final-stat">
            <div className="online-stat-icon">
              <svg viewBox="0 0 40 40">
                <path d="M20 34S6 25 6 14c0-5 4-8 8-8 3 0 5 2 6 4 1-2 3-4 6-4 4 0 8 3 8 8 0 11-14 20-14 20z" />
              </svg>
            </div>

            <strong>Flexible</strong>
            <span>From Anywhere</span>
          </div>

        </div>
      </div>


      {/* RIGHT SIDE */}
      <div className="online-final-content">

        <p className="online-final-label">
          ONLINE THERAPY
        </p>

        <h2>
          The same support,
          <br />
          at your <span>own comfort.</span>
        </h2>

        <p className="online-final-description">
          Reaching out isn't always easy—so we made it simple. Get the same dedicated care and complete confidentiality of an in-person session, completely online from the comfort of your own space.
        </p>


        {/* FEATURES */}
        <div className="online-final-features">

          <div className="online-final-feature">
            <div className="online-feature-circle">
              <svg viewBox="0 0 40 40">
                <rect x="5" y="10" width="20" height="19" rx="3" />
                <path d="M25 16l10-6v20l-10-6" />
              </svg>
            </div>

            <div>
              <h3>Secure, private video sessions</h3>
              <p>Your privacy and comfort always come first.</p>
            </div>
          </div>


          <div className="online-final-feature">
            <div className="online-feature-circle">
              <svg viewBox="0 0 40 40">
                <path d="M8 15c7-7 17-7 24 0" />
                <path d="M12 21c5-5 11-5 16 0" />
                <path d="M17 27c2-2 4-2 6 0" />
                <circle cx="20" cy="32" r="1.5" />
              </svg>
            </div>

            <div>
              <h3>Support from wherever you are</h3>
              <p>Access therapy from the comfort of your home.</p>
            </div>
          </div>


          <div className="online-final-feature">
            <div className="online-feature-circle">
              <svg viewBox="0 0 40 40">
                <rect x="6" y="9" width="28" height="25" rx="3" />
                <path d="M12 5v8" />
                <path d="M28 5v8" />
                <path d="M6 17h28" />
                <path d="M20 21v8" />
                <path d="M16 25h8" />
              </svg>
            </div>

            <div>
              <h3>Flexible scheduling, evenings included</h3>
              <p>Choose a time that works for you.</p>
            </div>
          </div>

        </div>


        {/* BUTTON */}
        <Link
          to="/contact"
          className="online-final-button"
        >
          <span>Learn about online therapy</span>
          <span className="online-final-arrow">↗</span>
        </Link>

      </div>

    </section>
  );
}

export default OnlineTherapy;