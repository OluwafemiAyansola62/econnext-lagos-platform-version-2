// src/components/WhyAttendSection/WhyAttendSection.jsx

const reasons = [
  {
    number: "01",
    title: "Career Insight",
    description:
      "Gain practical perspectives for navigating your next career move.",
  },
  {
    number: "02",
    title: "AI Opportunities",
    description:
      "Understand how AI and emerging technology are changing the economy.",
  },
  {
    number: "03",
    title: "Real Connections",
    description:
      "Meet students, professionals, entrepreneurs and industry leaders.",
  },
  {
    number: "04",
    title: "Career Pathways",
    description:
      "Discover internships, industries and opportunities you may not have considered.",
  },
  {
    number: "05",
    title: "Expert Voices",
    description:
      "Learn directly from people working across economics, technology and business.",
  },
  {
    number: "06",
    title: "Professional Network",
    description:
      "Build relationships that can continue long after the conference ends.",
  },
];

export default function WhyAttendSection() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#211A3B] px-4 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full border-[28px] border-[#22CF01]/10 sm:-right-40 sm:h-[35rem] sm:w-[35rem] sm:border-[50px]" />

        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#F77006]/10 blur-[100px] sm:-bottom-48 sm:-left-48 sm:h-[35rem] sm:w-[35rem] sm:blur-[120px]" />

        <div className="absolute right-[20%] top-[45%] hidden h-32 w-32 rotate-45 rounded-[2rem] border-[20px] border-[#FFC778]/10 sm:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#22CF01] sm:text-sm sm:tracking-[0.25em]">
              Why Attend?
            </p>

            <h2 className="mt-5 max-w-2xl text-[3.25rem] font-black uppercase leading-[0.86] tracking-[-0.045em] sm:mt-6 sm:text-6xl md:text-8xl">
              Show up.
              <br />
              <span className="text-[#FFC778]">Connect.</span>
              <br />
              Move forward.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/55 sm:mt-8 sm:text-lg md:text-xl">
              Econnext is designed to give students more than inspiration.
              It creates a space to meet people, discover possibilities and
              leave with practical ideas for the next stage of your journey.
            </p>

            <div className="mt-10 hidden lg:block">
              <div className="relative h-40 w-40">
                <div className="absolute inset-0 rotate-45 rounded-[2rem] border-[18px] border-[#22CF01]" />

                <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F77006]" />
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="group relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5 transition duration-500 hover:-translate-x-1 hover:border-[#22CF01]/40 hover:bg-white/[0.08] sm:rounded-[1.5rem] sm:p-7"
              >
                <div className="relative z-10 grid gap-4 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-5">
                  <span className="text-2xl font-black text-[#FFC778] sm:text-3xl">
                    {reason.number}
                  </span>

                  <div>
                    <h3 className="text-[1.15rem] font-black uppercase leading-[0.95] sm:text-2xl">
                      {reason.title}
                    </h3>

                    <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-white/50 sm:mt-3">
                      {reason.description}
                    </p>
                  </div>

                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#22CF01] text-lg font-black text-[#211A3B] transition duration-500 group-hover:rotate-45"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <div
                  className="absolute bottom-0 left-0 h-1 w-0 bg-[#22CF01] transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.5rem] bg-[#FFC778] p-6 text-[#211A3B] sm:mt-16 sm:rounded-[2rem] sm:p-10 lg:mt-20">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#F77006] sm:text-xs sm:tracking-[0.25em]">
                Your next move
              </p>

              <p className="mt-3 max-w-5xl text-[1.7rem] font-black uppercase leading-[0.92] sm:mt-4 sm:text-4xl md:text-5xl">
                Don&apos;t just attend. Leave with something you can use.
              </p>
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center self-start rounded-full bg-[#211A3B] text-2xl font-black text-[#22CF01] sm:h-20 sm:w-20 sm:self-auto sm:text-3xl">
              →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}