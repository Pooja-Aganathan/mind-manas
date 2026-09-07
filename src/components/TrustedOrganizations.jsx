import bridgestoneLogo from "../assets/organizations/Bridgestone.png";
import licLogo from "../assets/organizations/LIC India.png";
import ivyLogo from "../assets/organizations/IVY Mobility Solutions.png";
import avnlLogo from "../assets/organizations/AVNL India.png";
import chennaiLogo from "../assets/organizations/Chennai Public School.png";
import denaLogo from "../assets/organizations/Dena Bank.png";
import unitedIndiaLogo from "../assets/organizations/United India Insurance.png";
import aceHuntersLogo from "../assets/organizations/Ace Hunters.png";
import vCreateLogo from "../assets/organizations/V Create IT.png";
import strategyLogo from "../assets/organizations/Strategy Nxtgen.png";

function TrustedOrganizations() {
  const organizations = [
    {
      name: "Bridgestone",
      logo: bridgestoneLogo,
    },
    {
      name: "LIC India",
      logo: licLogo,
    },
    {
      name: "IVY Mobility Solutions",
      logo: ivyLogo,
    },
    {
      name: "AVNL India",
      logo: avnlLogo,
    },
    {
      name: "Chennai Public School",
      logo: chennaiLogo,
    },
    {
      name: "Dena Bank",
      logo: denaLogo,
    },
    {
      name: "United India Insurance",
      logo: unitedIndiaLogo,
    },
    {
      name: "Ace Hunters",
      logo: aceHuntersLogo,
    },
    {
      name: "V Create IT",
      logo: vCreateLogo,
    },
    {
      name: "Strategy Nxtgen",
      logo: strategyLogo,
    },
  ];

  return (
    <section className="trusted-organizations">
      <div className="trusted-header">
        <p className="trusted-label">OUR PARTNERS</p>

        <h2>Trusted By Leading Organizations</h2>

        <p className="trusted-description">
          We are proud to partner with reputed organizations who trust
          Mind & Manas for their mental wellness initiatives.
        </p>
      </div>

      <div className="trusted-grid">
        {organizations.map((organization) => (
          <div className="trusted-item" key={organization.name}>
            <div className="trusted-logo">
              <img
                src={organization.logo}
                alt={organization.name}
              />
            </div>

            <h3>{organization.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedOrganizations;