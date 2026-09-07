import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import ServicesSection from "../components/ServicesSection";
import OnlineTherapy from "../components/OnlineTherapy";
import TrustedOrganizations from "../components/TrustedOrganizations";
import TestimonialsSection from "../components/TestimonialsSection";
import GettingStarted from "../components/GettingStarted";

function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <OnlineTherapy />
      <TrustedOrganizations />
      <TestimonialsSection />
      <GettingStarted />
    </main>
  );
}

export default Home;