import adultIcon from "../assets/mind-manas-service-icons/adult.png";
import couplesIcon from "../assets/mind-manas-service-icons/Couples.png";
import kidsIcon from "../assets/mind-manas-service-icons/Kids and Teens.png";
import trainingIcon from "../assets/mind-manas-service-icons/training.png";
import lifeCoachingIcon from "../assets/mind-manas-service-icons/life internship.png";
import psychotherapyIcon from "../assets/mind-manas-service-icons/Psychotherapy.png";

function ServicesSection() {
  const services = [
    {
      title: "Therapy for Adults",
      icon: adultIcon,
    },
    {
      title: "Therapy for Couples",
      icon: couplesIcon,
    },
    {
      title: "Therapy for Kids & Teens",
      icon: kidsIcon,
    },
    {
      title: "Training & Internship",
      icon: trainingIcon,
    },
    {
      title: "Life Coaching",
      icon: lifeCoachingIcon,
    },
    {
      title: "Psychotherapy",
      icon: psychotherapyIcon,
    },
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <div>
          <p className="section-label">WHAT WE DO</p>

          <h2>
            Support for every
            <br />
            <span>stage of your journey.</span>
          </h2>
        </div>

        <p className="services-intro">
          We provide exceptional mental health services for
          children, adults, couples, and families through
          compassionate and professional care.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-card-circle"></div>

            <div className="service-icon">
              <img
                src={service.icon}
                alt={service.title}
              />
            </div>

            <h3>{service.title}</h3>

            <div className="service-arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;