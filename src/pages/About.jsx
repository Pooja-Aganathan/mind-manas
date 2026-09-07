import AboutSection from "../components/AboutSection";
import TherapistsSection from "../components/TherapistsSection";

function About() {
  return (
    <main>
      <section className="about-hero">
        <p className="section-label">ABOUT US</p>

        <h1>
          A safe space to
          <br />
          <span>understand yourself.</span>
        </h1>

        <p>
          Mind & Manas is a center for psychological counselling,
          therapy, and coaching in Chennai.
        </p>
      </section>

      <AboutSection />

      <TherapistsSection />
    </main>
  );
}

export default About;