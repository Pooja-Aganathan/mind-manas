import nlpIcon from "../assets/therapy-method-icons/NLP.png";
import transactionalIcon from "../assets/therapy-method-icons/Transactional analysis.png";
import hypnotherapyIcon from "../assets/therapy-method-icons/Hypnotherapy.png";
import cbtIcon from "../assets/therapy-method-icons/CBT.png";
import yogaIcon from "../assets/therapy-method-icons/yoga.png";
import eftIcon from "../assets/therapy-method-icons/Emotional freedom technique.png";
import mindfulnessIcon from "../assets/therapy-method-icons/mindfulness based therapy.png";
import emotionalEmpowermentIcon from "../assets/therapy-method-icons/Emotional empowerment technique.png";
import innerChildIcon from "../assets/therapy-method-icons/inner child healing.png";
import solutionFocusedIcon from "../assets/therapy-method-icons/solution focused therapy.png";

function TherapyMethods() {
  const methods = [
    {
      name: "NLP",
      icon: nlpIcon,
    },
    {
      name: "Transactional Analysis",
      icon: transactionalIcon,
    },
    {
      name: "Hypnotherapy",
      icon: hypnotherapyIcon,
    },
    {
      name: "CBT",
      icon: cbtIcon,
    },
    {
      name: "Yoga",
      icon: yogaIcon,
    },
    {
      name: "Emotional Freedom Technique",
      icon: eftIcon,
    },
    {
      name: "Mindfulness Based Therapy",
      icon: mindfulnessIcon,
    },
    {
      name: "Emotional Empowerment Technique",
      icon: emotionalEmpowermentIcon,
    },
    {
      name: "Inner Child Healing",
      icon: innerChildIcon,
    },
    {
      name: "Solution Focused Therapy",
      icon: solutionFocusedIcon,
    },
  ];

  return (
    <section className="therapy-methods" id="therapy-methods">

      <div className="therapy-methods-title">
        <p>THERAPY METHODS</p>
      </div>

      <div className="therapy-methods-grid">

        {methods.map((method) => (
          <div
            className="therapy-method-item"
            key={method.name}
          >

            <div className="therapy-method-icon">
              <img
                src={method.icon}
                alt={method.name}
              />
            </div>

            <h3>{method.name}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default TherapyMethods;