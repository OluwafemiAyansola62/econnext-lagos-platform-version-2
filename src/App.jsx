// src/App.jsx

import { useState } from "react";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import OpportunitySection from "./components/OpportunitySection/OpportunitySection";
import AboutSection from "./components/AboutSection/AboutSection";
import FocusSection from "./components/FocusSection/FocusSection";
import WhyAttendSection from "./components/WhyAttendSection/WhyAttendSection";
import SpeakersSection from "./components/SpeakersSection/SpeakersSection";
import TeamSection from "./components/TeamSection/TeamSection";
import RegisterSection from "./components/RegisterSection/RegisterSection";



export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#FEFEFE] text-[#211A3B]">
      <Navbar />

      <main>
        <Hero />

        <OpportunitySection />

        <AboutSection />

        <FocusSection />

        <WhyAttendSection />

        <SpeakersSection />

        <TeamSection />

        <RegisterSection />
      </main>
    </div>
  );
}