import { Link } from "react-router-dom";
import onlineTherapyImage from "../assets/Onlinetherapy.png";

function OnlineTherapy() {
  return (
    <section className="online-final" id="online-therapy">

      {/* LEFT SIDE */}
      <div className="online-final-left">

        <img
          src={onlineTherapyImage}
          alt="Online therapy session"
          className="online-final-image"
        />

        {/* Stats below image */}
        <div className="online-final-stats">

          <div className="online-final-stat">
            <strong>500+</strong>
            <span className="online-final-label">Sessions</span>
          </div>

          <div className="online-final-stat">
            <strong>100%</strong>
            <span className="online-final-label">Private</span>
          </div>

          <div className="online-final-stat">
            <strong>Flexible</strong>
            <span className="online-final-label">Scheduling</span>
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
          <span>at your own comfort.</span>
        </h2>

        <p className="online-final-description">
          We are open and available to support you. Therapy sessions are
          offered online through virtual assistance, giving you the flexibility
          to receive support wherever you are.
        </p>


        {/* THREE FEATURES - ONE BELOW ANOTHER */}
        <div className="online-final-features">

          {/* Secure */}
          <div className="online-final-feature">

            <div className="online-feature-circle">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="5" y="10" width="14" height="10" rx="1.5" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                <circle cx="12" cy="15" r="1" />
                <path d="M12 16v2" />
              </svg>
            </div>

            <div>
              <h3>Secure private sessions</h3>

              <p>
                Connect with your therapist through a comfortable and private
                online session.
              </p>
            </div>

          </div>


          {/* Support */}
          <div className="online-final-feature">

            <div className="online-feature-circle">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.2" />
              </svg>
            </div>

            <div>
              <h3>Support wherever you are</h3>

              <p>
                Access professional support from the comfort of your own
                space.
              </p>
            </div>

          </div>


          {/* Flexible */}
          <div className="online-final-feature">

            <div className="online-feature-circle">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="5" width="16" height="15" rx="2" />
                <path d="M8 3v4M16 3v4M4 9h16" />
                <path d="M8 13h2M14 13h2M8 16h2M14 16h2" />
              </svg>
            </div>

            <div>
              <h3>Flexible scheduling</h3>

              <p>
                Choose a time that works comfortably with your schedule.
              </p>
            </div>

          </div>

        </div>


        {/* CONTACT PAGE BUTTON */}
        <Link
          to="/contact"
          className="online-final-button"
        >
          <span>Learn about online therapy</span>
          <span>↗</span>
        </Link>

      </div>

    </section>
  );
}

export default OnlineTherapy;