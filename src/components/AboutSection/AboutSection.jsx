// src/components/AboutSection/AboutSection.jsx

import { useRef } from "react";

const pillars = [
  {
    number: "01",
    title: "Talent",
    description:
      "Africa's next chapter is powered by people with ideas, ambition and the confidence to build.",
    className: "bg-[#211A3B] text-white",
    numberClass: "text-[#FFC778]",
  },
  {
    number: "02",
    title: "Innovation",
    description:
      "Technology creates new possibilities. Econnext brings the conversations that help people understand them.",
    className: "bg-[#FFC778] text-[#211A3B]",
    numberClass: "text-[#F77006]",
  },
  {
    number: "03",
    title: "Opportunity",
    description:
      "The right connection can open a pathway to a career, a partnership, an idea or something bigger.",
    className: "bg-[#22CF01] text-[#211A3B]",
    numberClass: "text-[#211A3B]/50",
  },
];

const ideaTags = [
  "Economics",
  "Technology",
  "Careers",
  "Innovation",
  "Leadership",
];

export default function AboutSection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#FEFEFE] px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-32 top-16 h-72 w-72 rounded-full border-[30px] border-[#22CF01]/10 sm:-right-40 sm:top-20 sm:h-[32rem] sm:w-[32rem] sm:border-[45px]" />

        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#FFC778]/15 blur-[100px] sm:-left-48 sm:h-[30rem] sm:w-[30rem]" />

        <div className="absolute right-[5%] top-[35%] h-28 w-28 rotate-45 rounded-[1.5rem] bg-[#F77006]/10 sm:right-[15%] sm:h-40 sm:w-40 sm:rounded-[2rem]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-9 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="relative">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#F77006] sm:text-sm sm:tracking-[0.25em]">
                About Econnext
              </p>

              <div className="mt-4 max-w-md sm:mt-6">
                <p className="text-xl font-black uppercase leading-tight text-[#211A3B] sm:text-3xl">
                  The future of Africa&apos;s economy starts with its people.
                </p>
              </div>

              <div className="mt-8 hidden lg:block">
                <div className="relative h-72 w-72">
                  <div className="absolute inset-0 rotate-45 rounded-[3rem] border-[28px] border-[#22CF01]" />

                  <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F77006]" />

                  <div className="absolute bottom-0 right-0 h-16 w-16 rounded-full bg-[#FFC778]" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="max-w-5xl text-[2.75rem] font-black uppercase leading-[0.9] tracking-[-0.035em] text-[#211A3B] sm:text-6xl md:text-8xl">
              A room full of{" "}
              <span className="text-[#22CF01]">possibility.</span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#211A3B]/65 sm:mt-8 sm:text-xl">
              EconNext Lagos Conference is the flagship annual conference of
              NESA Lagos, bringing together students, economists, policymakers,
              business leaders, researchers and development partners to explore
              the future of work, innovation, entrepreneurship and economic
              development in Africa.
            </p>

            <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5">
              {pillars.map((pillar) => (
                <article
                  key={pillar.number}
                  className={`group min-h-[250px] rounded-[1.5rem] p-6 transition-transform duration-500 hover:-translate-y-2 sm:min-h-72 sm:rounded-[2rem] sm:p-8 ${pillar.className}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`text-3xl font-black sm:text-4xl ${pillar.numberClass}`}
                    >
                      {pillar.number}
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-current/20 text-base font-black transition-transform duration-500 group-hover:rotate-45 sm:text-lg">
                      ↗
                    </span>
                  </div>

                  <div className="mt-12 sm:mt-20">
                    <h3 className="text-2xl font-black uppercase leading-none">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed opacity-65 sm:mt-4">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="relative mt-5 overflow-hidden rounded-[1.5rem] bg-[#C8F3D9] p-6 sm:mt-8 sm:rounded-[2rem] sm:p-12">
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full border-[16px] border-[#22CF01]/20 sm:-right-12 sm:-top-12 sm:h-40 sm:w-40 sm:border-[20px]"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#00863D] sm:text-xs sm:tracking-[0.25em]">
                  The Econnext idea
                </p>

                <blockquote className="mt-4 max-w-4xl text-2xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-[#211A3B] sm:mt-5 sm:text-4xl md:text-5xl">
                  Connect knowledge to people. Connect people to opportunity.
                </blockquote>

                <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                  {ideaTags.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#211A3B]/15 bg-white/60 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.1em] text-[#211A3B] sm:px-4 sm:text-xs sm:tracking-[0.12em]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}