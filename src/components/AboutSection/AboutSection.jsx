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

export default function AboutSection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#FEFEFE] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-40 top-20 h-[32rem] w-[32rem] rounded-full border-[45px] border-[#22CF01]/10" />

        <div className="absolute -left-48 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#FFC778]/15 blur-[100px]" />

        <div className="absolute right-[15%] top-[35%] h-40 w-40 rotate-45 rounded-[2rem] bg-[#F77006]/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="relative">
            <div className="sticky top-28">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#F77006]">
                About Econnext
              </p>

              <div className="mt-6 max-w-md">
                <p className="text-2xl font-black uppercase leading-tight text-[#211A3B] sm:text-3xl">
                  The future of Africa&apos;s economy starts with its people.
                </p>
              </div>

              <div className="mt-10 hidden lg:block">
                <div className="relative h-72 w-72">
                  <div className="absolute inset-0 rotate-45 rounded-[3rem] border-[28px] border-[#22CF01]" />

                  <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F77006]" />

                  <div className="absolute bottom-0 right-0 h-16 w-16 rounded-full bg-[#FFC778]" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.04em] text-[#211A3B] sm:text-6xl md:text-8xl">
              A room full of{" "}
              <span className="text-[#22CF01]">possibility.</span>
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#211A3B]/65 sm:text-xl">
              EconNext Lagos Conference is the flagship annual conference of
              NESA Lagos, bringing together students, economists, policymakers,
              business leaders, researchers and development partners to explore
              the future of work, innovation, entrepreneurship and economic
              development in Africa.
            </p>

            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.number}
                  className={`group min-h-72 rounded-[2rem] p-7 transition-transform duration-500 hover:-translate-y-2 sm:p-8 ${pillar.className}`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`text-4xl font-black ${pillar.numberClass}`}
                    >
                      {pillar.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20 text-lg font-black transition-transform duration-500 group-hover:rotate-45">
                      ↗
                    </span>
                  </div>

                  <div className="mt-20">
                    <h3 className="text-2xl font-black uppercase leading-none">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed opacity-65">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="relative mt-8 overflow-hidden rounded-[2rem] bg-[#C8F3D9] p-8 sm:p-12">
              <div
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[20px] border-[#22CF01]/20"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#00863D]">
                  The Econnext idea
                </p>

                <blockquote className="mt-5 max-w-4xl text-3xl font-black uppercase leading-[0.95] tracking-tight text-[#211A3B] sm:text-4xl md:text-5xl">
                  Connect knowledge to people. Connect people to opportunity.
                </blockquote>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Economics",
                    "Technology",
                    "Careers",
                    "Innovation",
                    "Leadership",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#211A3B]/15 bg-white/60 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#211A3B]"
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