// src/components/FocusSection/FocusSection.jsx

const focusItems = [
  {
    number: "01",
    title: "Future of Work",
    description:
      "Explore how technology, AI and changing industries are reshaping careers and the workplace.",
    label: "Work",
    className: "bg-[#211A3B] text-white",
    numberClass: "text-[#FFC778]",
    badgeClass: "bg-[#FFC778] text-[#211A3B]",
  },
  {
    number: "02",
    title: "Economic Opportunity",
    description:
      "Understand the forces shaping Africa's economy and discover where emerging opportunities lie.",
    label: "Economy",
    className: "bg-[#FFC778] text-[#211A3B]",
    numberClass: "text-[#F77006]",
    badgeClass: "bg-[#F77006] text-white",
  },
  {
    number: "03",
    title: "Career Growth",
    description:
      "Gain practical insights, connections and strategies for navigating the modern labour market.",
    label: "Career",
    className: "bg-[#22CF01] text-[#211A3B]",
    numberClass: "text-[#211A3B]/40",
    badgeClass: "bg-[#211A3B] text-white",
  },
  {
    number: "04",
    title: "Innovation",
    description:
      "Discover how young people can use technology, creativity and entrepreneurship to create impact.",
    label: "Create",
    className: "bg-[#F77006] text-white",
    numberClass: "text-[#FFC778]",
    badgeClass: "bg-[#FFC778] text-[#211A3B]",
  },
  {
    number: "05",
    title: "Leadership",
    description:
      "Connect with ideas and people shaping the next generation of African economic leadership.",
    label: "Lead",
    className: "bg-[#C8F3D9] text-[#211A3B]",
    numberClass: "text-[#00863D]/40",
    badgeClass: "bg-[#00863D] text-white",
  },
  {
    number: "06",
    title: "Industry",
    description:
      "Bridge the gap between students, employers, professionals, policymakers and industry leaders.",
    label: "Connect",
    className: "bg-[#211A3B] text-white",
    numberClass: "text-[#22CF01]",
    badgeClass: "bg-[#22CF01] text-[#211A3B]",
  },
];

export default function FocusSection() {
  return (
    <section
      id="focus"
      className="relative overflow-hidden bg-[#C8F3D9] px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full border-[28px] border-[#22CF01]/10 sm:h-96 sm:w-96 sm:border-[40px]" />

        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#FFC778]/20 blur-[90px] sm:-bottom-40 sm:-left-40 sm:h-[30rem] sm:w-[30rem] sm:blur-[100px]" />

        <div className="absolute left-[45%] top-[20%] hidden h-32 w-32 rotate-45 rounded-[2rem] bg-[#F77006]/10 sm:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#00863D] sm:text-sm sm:tracking-[0.25em]">
              Conference Focus
            </p>

            <h2 className="mt-4 max-w-4xl text-[3.25rem] font-black uppercase leading-[0.88] tracking-[-0.045em] text-[#211A3B] sm:mt-5 sm:text-6xl md:text-8xl">
              Where ideas meet{" "}
              <span className="text-[#F77006]">opportunity.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-2xl text-base leading-relaxed text-[#211A3B]/65 sm:text-lg md:text-xl">
              Six conversations. One shared question: what does the future
              look like for Africa&apos;s next generation?
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {focusItems.map((item, index) => (
            <article
              key={item.number}
              className={`group relative min-h-[280px] overflow-hidden rounded-[1.5rem] p-6 transition duration-500 hover:-translate-y-2 sm:min-h-[340px] sm:rounded-[2rem] sm:p-9 ${item.className}`}
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border-[16px] border-current opacity-10 transition duration-500 group-hover:scale-125 sm:-right-12 sm:-top-12 sm:h-40 sm:w-40 sm:border-[20px]"
                aria-hidden="true"
              />

              <div className="relative flex items-start justify-between gap-4">
                <span
                  className={`text-4xl font-black leading-none sm:text-5xl ${item.numberClass}`}
                >
                  {item.number}
                </span>

                <span
                  className={`shrink-0 rounded-full px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.13em] sm:px-4 sm:text-[10px] sm:tracking-[0.15em] ${item.badgeClass}`}
                >
                  {item.label}
                </span>
              </div>

              <div className="relative mt-16 pr-8 sm:mt-24">
                <h3 className="max-w-sm text-[1.85rem] font-black uppercase leading-[0.92] sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-65 sm:mt-5 sm:text-base">
                  {item.description}
                </p>
              </div>

              <span
                className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-current/20 text-base font-black transition duration-500 group-hover:rotate-45 sm:bottom-7 sm:right-7 sm:h-11 sm:w-11 sm:text-lg"
                aria-hidden="true"
              >
                ↗
              </span>

              <span
                className="absolute bottom-0 left-0 h-1 w-0 bg-current transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />

              {index === 0 && (
                <span
                  className="absolute bottom-7 left-7 h-2.5 w-2.5 rounded-full bg-[#22CF01] sm:bottom-8 sm:left-8 sm:h-3 sm:w-3"
                  aria-hidden="true"
                />
              )}
            </article>
          ))}
        </div>

        <div className="mt-5 overflow-hidden rounded-[1.5rem] bg-[#211A3B] p-6 text-white sm:mt-8 sm:rounded-[2rem] sm:p-10">
          <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#FFC778] sm:text-xs sm:tracking-[0.25em]">
                One conference. Six perspectives.
              </p>

              <p className="mt-3 max-w-4xl text-[1.65rem] font-black uppercase leading-[0.95] sm:mt-4 sm:text-3xl md:text-4xl">
                Understand the economy. Understand the opportunity.
              </p>
            </div>

            <div
              className="hidden h-20 w-20 rotate-45 rounded-[1.5rem] border-[12px] border-[#22CF01] md:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}