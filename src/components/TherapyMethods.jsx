function TherapyMethods() {
  const methods = [
    "NLP",
    "Transactional Analysis",
    "Hypnotherapy",
    "CBT",
    "Yoga",
    "Emotional Freedom Technique",
    "Mindfulness Based Therapy",
    "Emotional Empowerment Technique",
    "Inner Child Healing",
    "Solution Focused Therapy",
  ];

  return (
    <section className="therapy-methods" id="therapy-methods">
      <div className="therapy-methods-title">
        <p>THERAPY METHODS</p>

        <h1>Therapy Method</h1>
      </div>

      <div className="therapy-methods-grid">
        {methods.map((method) => (
          <div className="therapy-method-item" key={method}>
            <h3>{method}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TherapyMethods;