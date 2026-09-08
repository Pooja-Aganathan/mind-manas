import { useEffect, useState } from "react";

function TrustedOrganizations() {
  const organizations = [
    { name: "Bridgestone", logo: "/src/assets/organizations/Bridgestone.png" },
    { name: "LIC India", logo: "/src/assets/organizations/LIC India.png" },
    { name: "IVY Mobility Solutions", logo: "/src/assets/organizations/IVY Mobility Solutions.png" },
    { name: "AVNL India", logo: "/src/assets/organizations/AVNL India.png" },
    { name: "Chennai Public School", logo: "/src/assets/organizations/Chennai Public School.png" },
    { name: "Dena Bank", logo: "/src/assets/organizations/Dena Bank.png" },
    { name: "United India Insurance", logo: "/src/assets/organizations/United India Insurance.png" },
    { name: "Ace Hunters", logo: "/src/assets/organizations/Ace Hunters.png" },
    { name: "V Create IT", logo: "/src/assets/organizations/V Create IT.png" },
    { name: "Strategy Nxtgen", logo: "/src/assets/organizations/Strategy Nxtgen.png" },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setStartIndex(0);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const step = isMobile ? 2 : 3;
  const visibleCount = isMobile ? 2 : 5;

  const totalSlides = isMobile ? 5 : 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((current) => {
        const next = current + step;

        if (isMobile) {
          return next >= 10 ? 0 : next;
        }

        return next >= 10 ? 0 : next;
      });
    }, isMobile ? 3000 : 5000);

    return () => clearInterval(interval);
  }, [isMobile, step]);

  const visibleOrganizations = Array.from(
    { length: visibleCount },
    (_, index) => organizations[(startIndex + index) % organizations.length]
  );

  const currentDot = isMobile
    ? Math.floor(startIndex / 2)
    : Math.floor(startIndex / 3);

  const goToSlide = (index) => {
    setStartIndex(isMobile ? index * 2 : index * 3);
  };

  const nextSlide = () => {
    setStartIndex((current) => {
      const next = current + step;
      return next >= 10 ? 0 : next;
    });
  };

  const previousSlide = () => {
    setStartIndex((current) => {
      const previous = current - step;

      if (previous < 0) {
        return isMobile ? 8 : 9;
      }

      return previous;
    });
  };

  return (
    <section className="trusted-section">
      <div className="trusted-container">
        <div className="trusted-header">
          <p className="section-label">TRUSTED BY</p>

          <h2>
            Organizations that
            <br />
            <span>trust our work.</span>
          </h2>

          <p className="trusted-intro">
            We are proud to support organizations and their people
            through professional mental health services.
          </p>
        </div>

        <div className="trusted-slider">
          <div className="trusted-grid">
            {visibleOrganizations.map((organization, index) => (
  <div className="trusted-item" key={`${organization.name}-${index}`}>
    <div className="trusted-logo">
      <img src={organization.logo} alt={organization.name} />
    </div>

    <p className="trusted-name">{organization.name}</p>
  </div>
))}
          </div>

          <div className="trusted-controls">
            <button
              type="button"
              className="trusted-arrow"
              onClick={previousSlide}
              aria-label="Previous organizations"
            >
              ←
            </button>

            <div className="trusted-dots">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`trusted-dot ${
                    currentDot === index ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="trusted-arrow"
              onClick={nextSlide}
              aria-label="Next organizations"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedOrganizations;