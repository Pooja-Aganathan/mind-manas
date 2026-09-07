import { useState } from "react";
import butterfly from "../assets/butterfly.png";

function Contact() {
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  const services = [
    "Therapy for Adults",
    "Therapy for Couples",
    "Therapy for Kids & Teens",
    "Training & Internship",
    "Life Coaching",
    "Psychotherapy",
  ];

  return (
    <main className="contact-page">

      {/* =========================================
          CONTACT HERO
      ========================================= */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <p className="section-label">
            GET IN TOUCH
          </p>

          <h1>
            We’re here to
            <br />
            <span>hear from you.</span>
          </h1>

          <p className="contact-hero-description">
            Whether you have a question, want to book a consultation,
            or need more information, we’re happy to help.
          </p>

        </div>


        {/* =========================================
            BUTTERFLY IMAGE
        ========================================= */}

        <div className="butterfly-decoration">

          <img
            src={butterfly}
            alt="Butterfly and flowers representing well-being"
            className="butterfly-image"
          />

        </div>

      </section>


      {/* =========================================
          MAIN CONTACT SECTION
      ========================================= */}

      <section className="contact-section">


        {/* =====================================
            LEFT SIDE
        ====================================== */}

        <div className="contact-left">


          {/* =================================
              OFFICE CARDS
          ================================== */}

          <div className="office-grid">


            {/* HEAD OFFICE */}

            <div className="office-card">

              <div className="office-icon">

                <svg
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                >
                  <path d="M32 56s18-17 18-30a18 18 0 1 0-36 0c0 13 18 30 18 30Z" />
                  <circle cx="32" cy="26" r="6" />
                </svg>

              </div>


              <div className="office-details">

                <h3>
                  Head Office
                </h3>

                <p>
                  No.45/3 1st floor Shantiniketan Colony
                  Anna Nagar, western ext, opposite Kalyan Jewellers,
                  Anna Nagar West Extension,
                  Chennai, Tamil Nadu 600101
                </p>


                <div className="office-contact">

                  <span>

                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M6.6 10.8c1.7 3.3 3.3 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2l3.2 1.3c.4.2.7.6.7 1v3c0 .6-.5 1.1-1.1 1.1C10.4 21.4 2.6 13.6 2.6 4.6 2.6 4 3.1 3.5 3.7 3.5h3c.5 0 .9.3 1 .7L9 7.4c.2.4.1.9-.2 1.2l-2.2 2.2Z" />
                    </svg>

                    +91 78100 94326

                  </span>


                  <span>

                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                      />

                      <path d="m4 7 8 6 8-6" />

                    </svg>

                    support@mindandmanas.com

                  </span>

                </div>

              </div>

            </div>


            {/* BRANCH OFFICE */}

            <div className="office-card">

              <div className="office-icon">

                <svg
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                >
                  <path d="M12 54h40" />
                  <path d="M18 54V20h28v34" />
                  <path d="M24 20V12h16v8" />
                  <path d="M25 28h4" />
                  <path d="M35 28h4" />
                  <path d="M25 36h4" />
                  <path d="M35 36h4" />
                  <path d="M28 54V44h8v10" />
                </svg>

              </div>


              <div className="office-details">

                <h3>
                  Branch Office
                </h3>

                <p>
                  No. 4A, Rajathi Apartments, Old No. 10,
                  New No.19, South Boag Road,
                  T.Nagar, Chennai – 600017
                </p>


                <div className="office-contact">

                  <span>

                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M6.6 10.8c1.7 3.3 3.3 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2l3.2 1.3c.4.2.7.6.7 1v3c0 .6-.5 1.1-1.1 1.1C10.4 21.4 2.6 13.6 2.6 4.6 2.6 4 3.1 3.5 3.7 3.5h3c.5 0 .9.3 1 .7L9 7.4c.2.4.1.9-.2 1.2l-2.2 2.2Z" />
                    </svg>

                    +91 86736 12861

                  </span>


                  <span>

                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                      />

                      <path d="m4 7 8 6 8-6" />

                    </svg>

                    support@mindandmanas.com

                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =================================
              LOCATION
          ================================== */}

          <div className="location-section">

            <div className="location-heading">

              <p className="section-label">
                OUR LOCATION
              </p>

              <h2>
                Find us <span>here.</span>
              </h2>

              <p>
                Visit our location or get directions on the map.
              </p>

            </div>


            <div className="map-wrapper">

              <iframe
                title="Mind and Manas location"
                src="https://www.google.com/maps?q=Mind%20and%20Manas%2C%20Chennai&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

          </div>

        </div>


        {/* =====================================
            RIGHT SIDE — CONTACT FORM
        ====================================== */}

        <div className="contact-form-wrapper">

          <p className="section-label">
            SEND US A MESSAGE
          </p>

          <h2>
            How can we
            <br />
            <span>help you?</span>
          </h2>

          <p className="form-description">
            Fill out the form below and we’ll get back to you soon.
          </p>


          <form className="contact-form">


            {/* FULL NAME */}

            <div className="form-group">

              <label htmlFor="name">
                FULL NAME
              </label>

              <div className="input-wrapper">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="8"
                    r="3"
                  />

                  <path d="M5 20c.5-4 2.8-6 7-6s6.5 2 7 6" />

                </svg>


                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                />

              </div>

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label htmlFor="email">
                EMAIL ADDRESS
              </label>

              <div className="input-wrapper">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />

                  <path d="m4 7 8 6 8-6" />

                </svg>


                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                />

              </div>

            </div>


            {/* PHONE */}

            <div className="form-group">

              <label htmlFor="phone">
                PHONE NUMBER (OPTIONAL)
              </label>

              <div className="input-wrapper">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.6 10.8c1.7 3.3 3.3 5 6.6 6.6l2.2-2.2c.3-.3.8-.4-1.2-.2l3.2 1.3c.4.2.7.6.7 1v3c0 .6-.5 1.1-1.1 1.1C10.4 21.4 2.6 13.6 2.6 4.6 2.6 4 3.1 3.5 3.7 3.5h3c.5 0 .9.3 1 .7L9 7.4c.2.4.1.9-.2 1.2l-2.2 2.2Z" />
                </svg>


                <input
                  type="tel"
                  id="phone"
                  placeholder="Your phone number"
                />

              </div>

            </div>


            {/* SERVICE */}

            <div className="form-group">

              <label htmlFor="service">
                I'M INTERESTED IN
              </label>

              <div className="select-wrapper">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 3 14.5 8l5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9L9.5 8 12 3Z" />
                </svg>


                <select
                  id="service"
                  defaultValue=""
                >

                  <option
                    value=""
                    disabled
                  >
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                    >
                      {service}
                    </option>
                  ))}

                </select>

              </div>

            </div>


            {/* MESSAGE */}

            <div className="form-group">

              <label htmlFor="message">
                YOUR MESSAGE
              </label>

              <div className="textarea-wrapper">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4 5h16v11H8l-4 4V5Z" />
                </svg>


                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                ></textarea>

              </div>

            </div>


            {/* CONSENT */}

            <label className="consent">

              <input
                type="checkbox"
              />

              <span>
                By submitting, you agree to be contacted about
                your enquiry. We never share your information
                with third parties.
              </span>

            </label>


            {/* SEND BUTTON */}

            <button
              type="button"
              className="contact-submit"
            >
              Send Message

              <span>
                ↗
              </span>

            </button>

          </form>

        </div>

      </section>


      {/* =========================================
          WHATSAPP CHAT
      ========================================== */}

      <div className="whatsapp-container">


        {/* WHATSAPP POPUP */}

        {showWhatsapp && (

          <div className="whatsapp-popup">

            <button
              className="whatsapp-close"
              onClick={() => setShowWhatsapp(false)}
              aria-label="Close WhatsApp"
            >
              ×
            </button>


            <div className="whatsapp-header">

              <strong>
                Hello!
              </strong>

              <p>
                Click below to chat with us on WhatsApp.
              </p>

            </div>


            <a
              href="https://wa.me/917810094326"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-contact"
            >

              <div className="whatsapp-icon">

                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >

                  <path d="M16 3.5a12.5 12.5 0 0 0-10.8 19l-1.4 5 5.1-1.3A12.5 12.5 0 1 0 16 3.5Z" />

                  <path d="M11.5 10.5c.3-.4.7-.5 1.1-.2l1.5 1.2c.4.3.5.8.2 1.2l-.7.9c.8 1.5 2 2.7 3.5 3.5l.9-.7c.4-.3.9-.2 1.2.2l1.2 1.5c.3.4.2.8-.2 1.1-.8.7-1.9 1-2.9.7-3.7-1.1-6.6-4-7.7-7.7-.3-1 0-2.1.7-2.9Z" />

                </svg>

              </div>


              <div>

                <span>
                  Support
                </span>

                <strong>
                  Team MindAndManas
                </strong>

              </div>

            </a>

          </div>

        )}


        {/* WHATSAPP BUTTON */}

        <button
          className="whatsapp-button"
          onClick={() => setShowWhatsapp(!showWhatsapp)}
          aria-label="Open WhatsApp"
        >

          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
          >

            <path d="M16 3.5a12.5 12.5 0 0 0-10.8 19l-1.4 5 5.1-1.3A12.5 12.5 0 1 0 16 3.5Z" />

            <path d="M11.5 10.5c.3-.4.7-.5 1.1-.2l1.5 1.2c.4.3.5.8.2 1.2l-.7.9c.8 1.5 2 2.7 3.5 3.5l.9-.7c.4-.3.9-.2 1.2.2l1.2 1.5c.3.4.2.8-.2 1.1-.8.7-1.9 1-2.9.7-3.7-1.1-6.6-4-7.7-7.7-.3-1 0-2.1.7-2.9.7Z" />

          </svg>


          <span>
            How Can I Help You?
          </span>

        </button>

      </div>

    </main>
  );
}

export default Contact;