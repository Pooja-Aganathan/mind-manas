function TrustedOrganizations() {
  const organizations = [
    "Bridgestone",
    "LIC India",
    "IVY Mobility Solutions",
    "AVNL India",
    "Chennai Public School",
    "Dena Bank",
    "United India Insurance",
    "Ace Hunters",
    "V Create IT",
    "Strategy Nxtgen",
  ];

  return (
    <section className="trusted-organizations">
      <p className="trusted-label">TRUSTED BY LEADING ORGANIZATIONS</p>

      <div className="trusted-grid">
        {organizations.map((organization) => (
          <div className="trusted-item" key={organization}>
            {organization}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedOrganizations;