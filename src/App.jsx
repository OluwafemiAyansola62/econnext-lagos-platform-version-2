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
import NESASection from "./components/NESASection/NESASection";
import FAQSection from "./components/FAQSection/FAQSection";

function PlaceholderSection({ id, eyebrow, title, description }) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-[#FEFEFE] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
      aria-labelledby={`${id}-title`}
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#F77006] sm:text-sm sm:tracking-[0.25em]">
          {eyebrow}
        </p>

        <h2
          id={`${id}-title`}
          className="mt-4 max-w-5xl text-4xl font-black uppercase leading-[0.86] tracking-[-0.045em] text-[#211A3B] sm:text-6xl md:text-8xl"
        >
          {title}
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#211A3B]/65 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

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
        <NESASection />
        <PlaceholderSection
          id="nesa"
          eyebrow="Presented by NESA"
          title={
            <>
              The network behind
              <span className="block text-[#F77006]">the conversation.</span>
            </>
          }
          description="NESA connects the wider ecosystem supporting Econnext and the conversations shaping Africa's next economic chapter."
        />

        <SpeakersSection />
        <TeamSection />
        <FAQSection />
        <PlaceholderSection
          id="volunteers"
          eyebrow="Get involved"
          title={
            <>
              Be part of
              <span className="block text-[#22CF01]">the experience.</span>
            </>
          }
          description="Volunteer opportunities and ways to contribute to Econnext Lagos 2026 will be announced soon."
        />

        <PlaceholderSection
          id="faq"
          eyebrow="Questions"
          title={
            <>
              Everything you need
              <span className="block text-[#F77006]">to know.</span>
            </>
          }
          description="Frequently asked questions about registration, attendance, the programme and participation will appear here."
        />

        <PlaceholderSection
          id="contact"
          eyebrow="Connect with us"
          title={
            <>
              Let&apos;s keep
              <span className="block text-[#22CF01]">the conversation going.</span>
            </>
          }
          description="Contact information and official Econnext Lagos 2026 channels will be published here."
        />

        <RegisterSection />
      </main>
    </div>
  );
}