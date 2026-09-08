import { useEffect, useState } from "react";

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Revathi M.",
      role: "Home Maker",
      text: "The support and guidance I received helped me understand myself better and move forward with confidence.",
    },
    {
      name: "Reena S.",
      role: "IT Professional",
      text: "The sessions provided a comfortable space where I could openly talk about my concerns and work through them.",
    },
    {
      name: "Arthi R.",
      role: "Student",
      text: "I felt heard and understood throughout the process. The guidance was practical and genuinely helpful.",
    },
    {
      name: "Kavya P.",
      role: "Teacher",
      text: "The sessions helped me manage my thoughts better and gave me the confidence to handle difficult situations.",
    },
    {
      name: "Sanjay K.",
      role: "Software Professional",
      text: "I appreciated the supportive approach and the comfortable environment. It helped me look at things with a clearer perspective.",
    },
    {
      name: "Meena R.",
      role: "Working Professional",
      text: "The guidance was thoughtful and easy to understand. I felt comfortable sharing my concerns throughout the sessions.",
    },
    {
      name: "Rahul S.",
      role: "Business Professional",
      text: "The sessions helped me understand my emotions and work through challenges in a calm and positive way.",
    },
    {
      name: "Divya N.",
      role: "College Student",
      text: "I felt comfortable from the beginning. The sessions helped me gain a better understanding of myself and my goals.",
    },
    {
      name: "Priya V.",
      role: "HR Professional",
      text: "The support I received was compassionate and practical. It helped me approach my personal challenges with more confidence.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* MOBILE - automatic slider every 3 seconds */
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

  /* NEXT */
  const nextTestimonial = () => {
    if (isMobile) {
      setCurrentIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    } else {
      setCurrentIndex((current) => {
        if (current === 0) return 3;
        if (current === 3) return 6;
        return 0;
      });
    }
  };

  /* PREVIOUS */
  const previousTestimonial = () => {
    if (isMobile) {
      setCurrentIndex((current) =>
        current === 0 ? testimonials.length - 1 : current - 1
      );
    } else {
      setCurrentIndex((current) => {
        if (current === 0) return 6;
        if (current === 3) return 0;
        return 3;
      });
    }
  };

  /* DESKTOP = 3 cards
     MOBILE = 1 card */
  const displayedTestimonials = isMobile
    ? [testimonials[currentIndex]]
    : testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <p className="section-label">TESTIMONIALS</p>

        <h2>
          Hear from people
          <br />
          <span>we’ve supported.</span>
        </h2>
      </div>

      <div className="testimonials-grid">
        {displayedTestimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.name}>
            <div className="testimonial-quote">“</div>

            <div className="testimonial-rating">
              ★ ★ ★ ★ ★
            </div>

            <p className="testimonial-text">
              {testimonial.text}
            </p>

            <div className="testimonial-person">
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-controls">
        <button
          type="button"
          className="testimonial-control-button"
          onClick={previousTestimonial}
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <div className="testimonial-dots">
          {isMobile
            ? testimonials.map((_, index) => (
                <span
                  key={index}
                  className={currentIndex === index ? "active" : ""}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))
            : [0, 3, 6].map((index) => (
                <span
                  key={index}
                  className={currentIndex === index ? "active" : ""}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
        </div>

        <button
          type="button"
          className="testimonial-control-button"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default TestimonialsSection;