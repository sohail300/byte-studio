"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import Services from "./components/Services";
import Contact from "./components/Contact";
import PricingPlans from "./components/Pricing";
import FAQSection from "./components/FAQ";
import MarqueeBanner from "./components/Strip";
import Loader from "./components/Loader";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Works from "./components/Works";

export default function Home() {
  const lenis = useRef<Lenis | null>(null);
  const [showAnimations, setShowAnimations] = useState(false);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 0.6, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
    });

    const animate = (time: number): void => {
      if (lenis.current) {
        lenis.current.raf(time);
      }
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      if (lenis.current) {
        lenis.current.destroy();
      }
    };
  }, []);

  const handleLoadingComplete = () => {
    setShowAnimations(true);
  };

  return (
    <>
      <Loader onLoadingComplete={handleLoadingComplete} />
      <Navbar />
      <HeroSection startAnimation={showAnimations} />
      <Companies />
      <Works />
      <MarqueeBanner />
      <Services />
      <PricingPlans />
      <FAQSection />
      <Contact />
    </>
  );
}
