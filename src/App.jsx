// src/App.jsx

import AnimatedCard from "./components/AnimatedCard/AnimatedCard";
import MagneticButton from "./components/MagneticButton/MagneticButton";
import { useState } from "react";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";

const conferenceFocus = [
  {
    number: "01",
    title: "Future of Work",
    description:
      "Explore how technology, AI and changing industries are reshaping careers and the workplace.",
  },
  {
    number: "02",
    title: "Economic Opportunity",
    description:
      "Understand the forces shaping Africa's economy and discover where emerging opportunities lie.",
  },
  {
    number: "03",
    title: "Career Growth",
    description:
      "Gain practical insights, connections and strategies for navigating the modern labour market.",
  },
  {
    number: "04",
    title: "Innovation",
    description:
      "Discover how young people can use technology, creativity and entrepreneurship to create impact.",
  },
  {
    number: "05",
    title: "Leadership",
    description:
      "Connect with ideas and people shaping the next generation of African economic leadership.",
  },
  {
    number: "06",
    title: "Industry",
    description:
      "Bridge the gap between students, employers, professionals, policymakers and industry leaders.",
  },
];

const reasonsToAttend = [
  "Gain practical career insights",
  "Understand emerging AI opportunities",
  "Connect with students and professionals",
  "Discover internship and career pathways",
  "Learn from industry experts",
  "Build meaningful professional relationships",
];

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

        {/* ABOUT */}
        <section
          id="about"
          className="bg-[#FEFEFE] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal direction="up">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#F77006]">
                About Econnext
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="max-w-5xl text-4xl font-black uppercase leading-[0.92] tracking-tight sm:text-5xl md:text-7xl">
                The future of Africa&apos;s economy starts with its people.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.18}>
              <p className="mt-8 max-w-4xl text-lg leading-relaxed text-[#211A3B]/70 sm:text-xl">
                EconNext Lagos Conference is the flagship annual conference of
                NESA Lagos, bringing together students, economists,
                policymakers, business leaders, researchers, and development
                partners to explore the future of work, innovation,
                entrepreneurship, and economic development in Africa.
              </p>
            </ScrollReveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Talent",
                  color: "#211A3B",
                  text: "#FFFFFF",
                },
                {
                  number: "02",
                  title: "Innovation",
                  color: "#FFC778",
                  text: "#211A3B",
                },
                {
                  number: "03",
                  title: "Opportunity",
                  color: "#22CF01",
                  text: "#211A3B",
                },
              ].map((item, index) => (
                <ScrollReveal
                  key={item.number}
                  direction={index === 0 ? "left" : index === 2 ? "right" : "up"}
                  delay={0.12 * index}
                >
                  <div
                    className="min-h-52 rounded-[2rem] p-7"
                    style={{
                      backgroundColor: item.color,
                      color: item.text,
                    }}
                  >
                    <p className="text-4xl font-black">{item.number}</p>

                    <p className="mt-16 text-xl font-black uppercase">
                      {item.title}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FOCUS */}
        <section
          id="focus"
          className="bg-[#C8F3D9] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal direction="left">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#00863D]">
                Conference Focus
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-tight sm:text-6xl md:text-8xl">
                Where ideas meet opportunity.
              </h2>
            </ScrollReveal>

            <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {conferenceFocus.map((item, index) => (
                <ScrollReveal
                  key={item.number}
                  direction={index % 2 === 0 ? "up" : "right"}
                  delay={(index % 3) * 0.08}
                >
                  <AnimatedCard className="h-full">
                    <article className="group h-full rounded-[2rem] bg-white p-7">
                      <div className="flex items-start justify-between">
                        <span className="text-4xl font-black text-[#3F49C9]">
                          {item.number}
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8F3D9] text-lg font-black transition duration-300 group-hover:rotate-45">
                          ↗
                        </span>
                      </div>

                      <h3 className="mt-12 text-2xl font-black uppercase leading-none">
                        {item.title}
                      </h3>

                      <p className="mt-5 leading-relaxed text-[#211A3B]/60">
                        {item.description}
                      </p>
                    </article>
                  </AnimatedCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY ATTEND */}
        <section
          id="why"
          className="bg-[#211A3B] px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <ScrollReveal direction="up">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ACC640]">
                Why Attend?
              </p>
            </ScrollReveal>

            <div className="mt-5 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <ScrollReveal direction="left">
                <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-tight sm:text-6xl md:text-8xl">
                  Show up.
                  <br />
                  Connect.
                  <br />
                  Move forward.
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.15}>
                <p className="max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
                  Econnext is designed to give students more than inspiration.
                  It creates a space to meet people, discover possibilities and
                  leave with practical ideas for the next stage of your journey.
                </p>
              </ScrollReveal>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reasonsToAttend.map((reason, index) => (
                <ScrollReveal
                  key={reason}
                  direction={index % 2 === 0 ? "up" : "right"}
                  delay={(index % 3) * 0.08}
                >
                  <div className="group flex min-h-28 items-center gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:border-[#ACC640]/50 hover:bg-white/[0.08]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ACC640] text-sm font-black text-[#211A3B] transition duration-300 group-hover:scale-110">
                      ✓
                    </span>

                    <p className="font-bold leading-snug">{reason}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SPEAKERS */}
        <section
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
                  direction={index === 1 ? "up" : index === 0 ? "left" : "right"}
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
        </section>

        {/* TEAM */}
        <section
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
        </section>

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
                className="mt-10 inline-flex rounded-full bg-[#211A3B] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-white"
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