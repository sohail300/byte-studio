import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import Services from "./components/Services";
import Contact from "./components/Contact";
import PricingPlans from "./components/Pricing";
import FAQSection from "./components/FAQ";
import MarqueeBanner from "./components/Strip";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Companies />
      <MarqueeBanner />
      <Services />
      <PricingPlans />
      <FAQSection />
      <Contact />
    </>
  );
}
