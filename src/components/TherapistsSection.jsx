import { useState } from "react";
import soshinaPhoto from "../assets/therapists/soshina.png";
import nithyaPhoto from "../assets/therapists/nithya.png";
import raviPhoto from "../assets/therapists/ravi.png";

function TherapistsSection() {
  const [selectedTherapist, setSelectedTherapist] = useState(null);

  const therapists = [
    {
      name: "Soshina Saravanan",
      qualification: "M.Sc. Counseling & Psychotherapy",
      photo: soshinaPhoto,
      description:
        "A trusted and compassionate counselor with close to two decades of experience in psychology. She creates a warm, empathetic, safe and non-judgmental space for personal growth and self-discovery.",
      fullProfile: [
        "Soshina Saravanan is a committed counseling psychologist and hypnotherapist with close to two decades of experience in the field of psychology.",
        "She is known for creating a warm, empathetic, safe and non-judgmental environment where individuals can explore their challenges, develop self-awareness and work towards personal growth.",
        "Her therapeutic approaches include Cognitive Behavioral Therapy (CBT), Transactional Analysis, Neuro-Linguistic Programming (NLP), Hypnotherapy, Inner Child Healing, Emotional Freedom Techniques, Mindfulness-Based Therapy, Emotional Empowerment Techniques, Yoga and Solution-Focused Therapy.",
        "She works with individuals experiencing concerns such as anxiety, depression, relationship difficulties and other psychological challenges.",
        "Her approach focuses not only on managing symptoms but also on personal growth, self-discovery and developing healthier relationships with oneself and others.",
        "Soshina is committed to continuous learning and regularly updates her professional knowledge and skills."
      ],
    },
    {
      name: "Nithya Priyan M",
      qualification: "Counseling Psychologist & Psychotherapist",
      photo: nithyaPhoto,
      description:
        "A counseling psychologist and psychotherapist who focuses on helping individuals discover their potential, build emotional resilience and develop greater self-awareness and inner peace.",
      fullProfile: [
        "Nithya Priyan M is a Counseling Psychologist and Psychotherapist with experience in both clinical and counseling settings.",
        "His primary goal is to help individuals discover their potential, develop emotional resilience and find greater inner peace. He creates a safe, non-judgmental and accepting space where clients can openly explore their thoughts, emotions and life challenges.",
        "He works with concerns including anxiety, stress, grief and loss, relationship difficulties, breakups, self-esteem concerns, teenage behavioral and emotional concerns, health-related psychological challenges, psychosomatic concerns, emotional regulation and personal growth.",
        "He also supports individuals dealing with life transitions, interpersonal conflicts, academic stress, family concerns and challenges affecting overall mental well-being.",
        "His therapeutic approach is client-centered, integrative and evidence-based. His approaches include Cognitive Behavioral Therapy (CBT), Humanistic Psychology, Mindfulness-Based Interventions, Neuro-Linguistic Programming (NLP), Inner Child Healing and Eclectic Psychotherapy.",
        "He holds an M.Sc. in Applied Psychology and is committed to continuous professional development and lifelong learning.",
        "He also values creating an accepting environment for clients and supports LGBTQ+ rights."
      ],
    },
    {
      name: "Dr. K. Ravi",
      qualification: "Psychologist & Psychotherapist",
      photo: raviPhoto,
      description:
        "With over 35 years of professional experience and international exposure, he works with concerns including anxiety, depression, relationship challenges, adolescent concerns and stress management.",
      fullProfile: [
        "Dr. K. Ravi brings over 35 years of professional experience in psychology and psychotherapy.",
        "He has extensive international exposure across the UK, Australia, Singapore and the Middle East.",
        "His professional experience includes supporting individuals dealing with depression, anxiety, bipolar disorder and schizophrenia.",
        "He also works with relationship challenges, couple counseling, adolescent concerns, geriatric concerns and stress management.",
        "In addition to individual therapeutic support, he has trained senior and mid-level professionals on workplace-related challenges, with a focus on personal well-being and organizational effectiveness."
      ],
    },
  ];

  const closeProfile = () => {
    setSelectedTherapist(null);
  };

  return (
    <section className="therapists-section" id="therapists">

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

              <button
                type="button"
                className="therapist-button"
                onClick={() => setSelectedTherapist(therapist)}
              >
                View Profile ↗
              </button>

            </div>
          </article>
        ))}

      </div>

      {/* PROFILE MODAL */}

      {selectedTherapist && (
        <div
          className="therapist-modal-overlay"
          onClick={closeProfile}
        >
          <div
            className="therapist-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="therapist-modal-close"
              onClick={closeProfile}
              aria-label="Close profile"
            >
              ×
            </button>

            <div className="therapist-modal-header">

              <img
                src={selectedTherapist.photo}
                alt={selectedTherapist.name}
                className="therapist-modal-photo"
              />

              <div>
                <p className="therapist-modal-role">
                  {selectedTherapist.qualification}
                </p>

                <h2>{selectedTherapist.name}</h2>
              </div>

            </div>

            <div className="therapist-modal-content">

              {selectedTherapist.fullProfile.map(
                (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                )
              )}

            </div>

            <button
              type="button"
              className="therapist-modal-close-button"
              onClick={closeProfile}
            >
              Close Profile
            </button>

          </div>
        </div>
      )}

    </section>
  );
}

export default TherapistsSection;