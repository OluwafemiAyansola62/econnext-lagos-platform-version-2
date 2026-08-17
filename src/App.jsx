// src/App.jsx

import { useState } from "react";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import AnimatedCard from "./components/AnimatedCard/AnimatedCard";
import MagneticButton from "./components/MagneticButton/MagneticButton";
import OpportunitySection from "./components/OpportunitySection/OpportunitySection";
import AboutSection from "./components/AboutSection/AboutSection";
import FocusSection from "./components/FocusSection/FocusSection";
import WhyAttendSection from "./components/WhyAttendSection/WhyAttendSection";
import SpeakersSection from "./components/SpeakersSection/SpeakersSection";
import TeamSection from "./components/TeamSection/TeamSection";


const speakers = [
  {
    name: "Speaker TBA",
    role: "Industry Leader",
    description:
      "A leading voice contributing to conversations around economics, technology and the future of work.",
  },
  {
    name: "Speaker TBA",
    role: "Economist / Policy Expert",
    description:
      "Bringing perspectives on economic development, policy and opportunities for young Africans.",
  },
  {
    name: "Speaker TBA",
    role: "Technology & Innovation Leader",
    description:
      "Exploring the role of AI, digital transformation and innovation in the future economy.",
  },
];

const teamMembers = [
  {
    name: "Name TBA",
    role: "Project Head",
  },
  {
    name: "Name TBA",
    role: "Media & Communications Lead",
  },
  {
    name: "Name TBA",
    role: "Logistics Lead",
  },
  {
    name: "Name TBA",
    role: "Partnerships Lead",
  },
];

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

        {/* <ConferenceFocus /> */}

        {/* SPEAKERS */}
        {/* <section
          id="speakers"
          className="bg-[#FEFEFE] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal direction="up">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#F77006]">
                Speakers
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-tight sm:text-6xl md:text-8xl">
                  Voices shaping what comes next.
                </h2>

                <p className="max-w-sm text-sm leading-relaxed text-[#211A3B]/55">
                  Speaker announcements will be updated as the Econnext Lagos
                  programme is confirmed.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {speakers.map((speaker, index) => (
                <ScrollReveal
                  key={`${speaker.role}-${index}`}
                  direction={
                    index === 1 ? "up" : index === 0 ? "left" : "right"
                  }
                  delay={index * 0.12}
                >
                  <AnimatedCard className="h-full">
                    <article className="group h-full overflow-hidden rounded-[2rem] bg-[#F3F1F7]">
                      <div className="relative aspect-[4/4.2] overflow-hidden bg-[#C8F3D9]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-xl">
                            <span className="text-5xl font-black text-[#00863D]">
                              ?
                            </span>
                          </div>
                        </div>

                        <div className="absolute left-5 top-5 rounded-full bg-[#211A3B] px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white">
                          Coming Soon
                        </div>
                      </div>

                      <div className="p-7">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#00863D]">
                          {speaker.role}
                        </p>

                        <h3 className="mt-3 text-2xl font-black uppercase">
                          {speaker.name}
                        </h3>

                        <p className="mt-4 leading-relaxed text-[#211A3B]/60">
                          {speaker.description}
                        </p>
                      </div>
                    </article>
                  </AnimatedCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section> */}

        {/* TEAM */}
        {/* <section
          id="team"
          className="bg-[#ACC640] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal direction="left">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#211A3B]/60">
                The People Behind Econnext
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-tight sm:text-6xl md:text-8xl">
                Built by people who care about what&apos;s next.
              </h2>
            </ScrollReveal>

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <ScrollReveal
                  key={member.role}
                  direction={index % 2 === 0 ? "up" : "right"}
                  delay={index * 0.1}
                >
                  <AnimatedCard className="h-full">
                    <article className="group h-full rounded-[2rem] bg-white p-5">
                      <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-[#C8F3D9]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#00863D] text-3xl font-black text-white transition duration-500 group-hover:scale-110">
                            {index + 1}
                          </div>
                        </div>
                      </div>

                      <div className="px-2 pb-2 pt-6">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#00863D]">
                          {member.role}
                        </p>

                        <h3 className="mt-2 text-xl font-black uppercase">
                          {member.name}
                        </h3>
                      </div>
                    </article>
                  </AnimatedCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section> */}

        {/* REGISTER */}
        <section
          id="register"
          className="bg-[#FFC778] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal direction="left">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#211A3B]/60">
                Econnext Lagos Conference 26
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-tight text-[#211A3B] sm:text-6xl md:text-8xl">
                Your next opportunity could start here.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <MagneticButton
                href="#"
                className="mt-10 rounded-full bg-[#211A3B] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-black"
              >
                Registration Coming Soon
              </MagneticButton>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
}