import soshinaPhoto from "../assets/therapists/soshina.png";
import nithyaPhoto from "../assets/therapists/nithya.png";
import raviPhoto from "../assets/therapists/ravi.png";
function TherapistsSection() {
  const therapists = [
    {
      name: "Soshina Saravanan",
      qualification: "M.Sc. Counseling & Psychotherapy",
      photo: soshinaPhoto,
      description:
        "A trusted and compassionate counselor with close to two decades of experience in psychology. She creates a warm, empathetic, safe and non-judgmental space for personal growth and self-discovery.",
    },
    {
      name: "Nithya Priyan M",
      qualification: "Counseling Psychologist & Psychotherapist",
      photo: nithyaPhoto,
      description:
        "A counseling psychologist and psychotherapist who focuses on helping individuals discover their potential, build emotional resilience and develop greater self-awareness and inner peace.",
    },
    {
      name: "Dr. K. Ravi",
      qualification: "Psychologist & Psychotherapist",
      photo: raviPhoto,
      description:
        "With over 35 years of professional experience and international exposure, he works with concerns including anxiety, depression, relationship challenges, adolescent concerns and stress management.",
    },
  ];

  return (
    <section className="therapists-section">

      <div className="therapists-header">
        <div>
          <p className="section-label">MEET OUR THERAPISTS</p>

          <h2>
            People who listen.
            <br />
            <span>Professionals who care.</span>
          </h2>
        </div>

        <p className="therapists-intro">
          Our close-knit team of therapists is dedicated to
          creating a safe, compassionate and supportive space
          for every individual.
        </p>
      </div>


      <div className="therapists-grid">

        {therapists.map((therapist) => (
          <article
            className="therapist-card"
            key={therapist.name}
          >

            <div className="therapist-photo">
              <img
                src={therapist.photo}
                alt={therapist.name}
              />
            </div>

            <div className="therapist-content">

              <p className="therapist-role">
                {therapist.qualification}
              </p>

              <h3>{therapist.name}</h3>

              <p className="therapist-description">
                {therapist.description}
              </p>

              <button className="therapist-button">
                View Profile ↗
              </button>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default TherapistsSection;