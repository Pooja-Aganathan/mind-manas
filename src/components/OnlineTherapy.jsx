import onlineTherapyImage from "../assets/OnlineTherapy.png";

function OnlineTherapy() {
  return (
    <section className="online-final" id="online-therapy">

      <div className="online-final-image-area">

        <div className="online-final-image">
          <img
            src={onlineTherapyImage}
            alt="Online Therapy"
          />
        </div>

        <div className="online-final-stats">
          <div>
            <strong>500+</strong>
            <span>Sessions</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Private</span>
          </div>

          <div>
            <strong>Flexible</strong>
            <span>Scheduling</span>
          </div>
        </div>

      </div>

      <div className="online-final-content">

        <p className="section-label">
          ONLINE THERAPY
        </p>

        <h2>
          The same support,
          <br />
          <span>at your own comfort.</span>
        </h2>

        <p className="online-final-description">
          We are open and available to support you. Therapy
          sessions are offered online through virtual assistance,
          giving you the flexibility to receive support wherever
          you are.
        </p>

        <div className="online-final-features">

          <div className="online-final-feature">
            <div className="online-feature-icon">
              ◉
            </div>

            <div>
              <h4>Secure private sessions</h4>
              <p>
                Connect with your therapist through a comfortable
                and private online session.
              </p>
            </div>
          </div>

          <div className="online-final-feature">
            <div className="online-feature-icon">
              ◌
            </div>

            <div>
              <h4>Support wherever you are</h4>
              <p>
                Access professional support from the comfort of
                your own space.
              </p>
            </div>
          </div>

          <div className="online-final-feature">
            <div className="online-feature-icon">
              ◫
            </div>

            <div>
              <h4>Flexible scheduling</h4>
              <p>
                Choose a time that works comfortably with your
                schedule.
              </p>
            </div>
          </div>

        </div>

        <button
          type="button"
          className="online-final-button"
        >
          Learn about online therapy
          <span>↗</span>
        </button>

      </div>

    </section>
  );
}

export default OnlineTherapy;