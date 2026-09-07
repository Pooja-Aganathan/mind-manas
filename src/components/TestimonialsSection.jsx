import { useState } from "react";

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The support and guidance I received helped me understand myself better and move forward with confidence.",
      name: "Revathi M.",
      role: "Home Maker",
    },
    {
      quote:
        "The sessions provided a comfortable space where I could openly talk about my concerns and work through them.",
      name: "Reena S.",
      role: "IT Professional",
    },
    {
      quote:
        "I felt heard and understood throughout the process. The guidance was practical and genuinely helpful.",
      name: "Arthi R.",
      role: "Student",
    },
    {
      quote:
        "I felt comfortable from the very beginning. The sessions helped me handle everyday challenges with a clearer mind.",
      name: "Shara S.",
      role: "Teacher",
    },
    {
      quote:
        "The guidance helped me understand my emotions better and approach difficult situations with more confidence.",
      name: "Gowtham V.",
      role: "Software Engineer",
    },
    {
      quote:
        "It was a safe and supportive space where I could speak openly and work towards positive changes in my life.",
      name: "Kavitha M.",
      role: "Business Professional",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(
    testimonials.length / testimonialsPerPage
  );

  const startIndex = currentPage * testimonialsPerPage;

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + testimonialsPerPage
  );

  const nextTestimonials = () => {
    setCurrentPage((prev) =>
      prev < totalPages - 1 ? prev + 1 : 0
    );
  };

  const previousTestimonials = () => {
    setCurrentPage((prev) =>
      prev > 0 ? prev - 1 : totalPages - 1
    );
  };

  return (
    <section className="testimonials-section">

      {/* HEADER */}
      <div className="testimonials-header">
        <p className="section-label">TESTIMONIALS</p>

        <h2>
          Stories from people
          <br />
          we’ve supported.
        </h2>
      </div>


      {/* TESTIMONIAL CARDS */}
      <div className="testimonials-grid">

        {visibleTestimonials.map((testimonial, index) => (
          <div
            className="testimonial-card"
            key={testimonial.name}
          >

            {/* QUOTE */}
            <div className="testimonial-quote">
              “
            </div>


            {/* RATING */}
            <div className="testimonial-rating">
              ★ ★ ★ ★ ★
            </div>


            {/* TESTIMONIAL */}
            <p className="testimonial-text">
              {testimonial.quote}
            </p>


            {/* PERSON */}
            <div className="testimonial-person">
              <strong>
                {testimonial.name}
              </strong>

              <span>
                {testimonial.role}
              </span>
            </div>

          </div>
        ))}

      </div>


      {/* CONTROLS */}
      <div className="testimonial-controls">

        <button
          type="button"
          className="testimonial-control-button"
          onClick={previousTestimonials}
          aria-label="Previous testimonials"
        >
          ←
        </button>


        {/* DOTS */}
        <div className="testimonial-dots">

          {Array.from({ length: totalPages }).map(
            (_, index) => (
              <span
                key={index}
                className={
                  index === currentPage
                    ? "active"
                    : ""
                }
              ></span>
            )
          )}

        </div>


        <button
          type="button"
          className="testimonial-control-button"
          onClick={nextTestimonials}
          aria-label="Next testimonials"
        >
          →
        </button>

      </div>

    </section>
  );
}

export default TestimonialsSection;