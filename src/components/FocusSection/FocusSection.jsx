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
      className="relative overflow-hidden bg-[#C8F3D9] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[40px] border-[#22CF01]/10" />

        <div className="absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-[#FFC778]/20 blur-[100px]" />

        <div className="absolute left-[45%] top-[20%] h-32 w-32 rotate-45 rounded-[2rem] bg-[#F77006]/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#00863D]">
              Conference Focus
            </p>

            <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.04em] text-[#211A3B] sm:text-6xl md:text-8xl">
              Where ideas meet{" "}
              <span className="text-[#F77006]">opportunity.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-2xl text-lg leading-relaxed text-[#211A3B]/65 sm:text-xl">
              Six conversations. One shared question: what does the future
              look like for Africa&apos;s next generation?
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {focusItems.map((item, index) => (
            <article
              key={item.number}
              className={`group relative min-h-[340px] overflow-hidden rounded-[2rem] p-7 transition duration-500 hover:-translate-y-2 sm:p-9 ${item.className}`}
            >
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border-[20px] border-current opacity-10 transition duration-500 group-hover:scale-125"
                aria-hidden="true"
              />

              <div className="relative flex items-start justify-between">
                <span
                  className={`text-5xl font-black leading-none ${item.numberClass}`}
                >
                  {item.number}
                </span>

                <span
                  className={`rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] ${item.badgeClass}`}
                >
                  {item.label}
                </span>
              </div>

              <div className="relative mt-24">
                <h3 className="max-w-sm text-3xl font-black uppercase leading-[0.92] sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-65 sm:text-base">
                  {item.description}
                </p>
              </div>

              <span
                className="absolute bottom-7 right-7 flex h-11 w-11 items-center justify-center rounded-full border border-current/20 text-lg font-black transition duration-500 group-hover:rotate-45"
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
                  className="absolute bottom-8 left-8 h-3 w-3 rounded-full bg-[#22CF01]"
                  aria-hidden="true"
                />
              )}
            </article>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] bg-[#211A3B] p-8 text-white sm:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FFC778]">
                One conference. Six perspectives.
              </p>

              <p className="mt-4 max-w-4xl text-2xl font-black uppercase leading-tight sm:text-3xl md:text-4xl">
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