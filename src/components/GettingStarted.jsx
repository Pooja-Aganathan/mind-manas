import { Link } from "react-router-dom";

function GettingStarted() {
  return (
    <section className="getting-started">
      <div className="getting-started-header">
        <p className="section-label">HOW TO GET STARTED</p>

        <h2>
          Taking the first step
          <br />
          can be simple.
        </h2>
      </div>

      <div className="steps-container">

        <div className="step">
          <div className="step-content">
            <h3>Book a phone consultation</h3>

            <p>
              Schedule a phone consultation and take the first step
              towards getting the support you need.
            </p>
          </div>

          <Link
            to="/contact"
            className="step-arrow"
            aria-label="Book a phone consultation"
          >
            ↗
          </Link>
        </div>

        <div className="step">
          <div className="step-content">
            <h3>Get familiarized with the process</h3>

            <p>
              Understand how the process works and find the right
              support for your needs.
            </p>
          </div>

          <Link
            to="/get-familiarized"
            className="step-arrow"
            aria-label="Get familiarized with the process"
          >
            ↗
          </Link>
        </div>

      </div>
    </section>
  );
}

export default GettingStarted;