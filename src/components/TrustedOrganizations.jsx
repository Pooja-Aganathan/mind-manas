import bridgestoneLogo from "../assets/organizations/Bridgestone.png";
import licLogo from "../assets/organizations/LIC India.png";
import ivyLogo from "../assets/organizations/IVY Mobility Solutions.png";
import avnlLogo from "../assets/organizations/AVNL India.png";
import chennaiPublicSchoolLogo from "../assets/organizations/Chennai Public School.png";
import denaBankLogo from "../assets/organizations/Dena Bank.png";
import unitedIndiaInsuranceLogo from "../assets/organizations/United India Insurance.png";
import aceHuntersLogo from "../assets/organizations/Ace Hunters.png";
import vCreateITLogo from "../assets/organizations/V Create IT.png";
import strategyNxtgenLogo from "../assets/organizations/Strategy Nxtgen.png";

function TrustedOrganizations() {
  const organizations = [
    { name: "Bridgestone", logo: bridgestoneLogo },
    { name: "LIC India", logo: licLogo },
    { name: "IVY Mobility Solutions", logo: ivyLogo },
    { name: "AVNL India", logo: avnlLogo },
    { name: "Chennai Public School", logo: chennaiPublicSchoolLogo },
    { name: "Dena Bank", logo: denaBankLogo },
    { name: "United India Insurance", logo: unitedIndiaInsuranceLogo },
    { name: "Ace Hunters", logo: aceHuntersLogo },
    { name: "V Create IT", logo: vCreateITLogo },
    { name: "Strategy Nxtgen", logo: strategyNxtgenLogo },
  ];

  // Duplicate the list so the animation can loop seamlessly.
  const sliderOrganizations = [...organizations, ...organizations];

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

          <div className="trusted-carousel">
            <div className="trusted-carousel-track">

              {sliderOrganizations.map((organization, index) => (
                <div
                  className="trusted-item"
                  key={`${organization.name}-${index}`}
                >
                  <div className="trusted-logo">
                    <img
                      src={organization.logo}
                      alt={organization.name}
                    />
                  </div>

                  <p className="trusted-name">
                    {organization.name}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default TrustedOrganizations;