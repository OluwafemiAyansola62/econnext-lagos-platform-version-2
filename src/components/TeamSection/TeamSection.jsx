// src/components/TeamSection/TeamSection.jsx

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCard from "../AnimatedCard/AnimatedCard";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Name TBA",
    role: "Project Head",
    accent: "#22CF01",
  },
  {
    name: "Name TBA",
    role: "Media & Communications Lead",
    accent: "#FFC778",
  },
  {
    name: "Name TBA",
    role: "Logistics Lead",
    accent: "#F77006",
  },
  {
    name: "Name TBA",
    role: "Partnerships Lead",
    accent: "#22CF01",
  },
];

export default function TeamSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const cards = cardsRef.current.filter(Boolean);

    const context = gsap.context(() => {
      gsap.set(headingRef.current, {
        opacity: 0,
        y: 70,
      });

      gsap.set(introRef.current, {
        opacity: 0,
        y: 35,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 80,
        scale: 0.96,
      });

      if (prefersReducedMotion) {
        gsap.set(
          [headingRef.current, introRef.current, ...cards],
          {
            clearProps: "all",
          },
        );

        return;
      }

      const entrance = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      entrance
        .to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
        })
        .to(
          introRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.35",
        );

      cards.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -8 : 8,
          duration: 3.5 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.15,
        });
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="team"
      className="relative overflow-hidden bg-[#ACC640] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -right-32 top-12 h-72 w-72 rounded-full border-[32px] border-[#211A3B]/10 sm:h-96 sm:w-96 sm:border-[45px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-32 bottom-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#C8F3D9]/40 blur-[80px] sm:h-[32rem] sm:w-[32rem] sm:blur-[90px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-1/4 top-1/3 h-48 w-48 rounded-full bg-[#FFC778]/20 blur-[80px] sm:h-64 sm:w-64 sm:blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div ref={headingRef}>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#211A3B]/60 sm:text-sm sm:tracking-[0.25em]">
              The People Behind Econnext
            </p>

            <h2 className="mt-4 max-w-5xl text-[3.3rem] font-black uppercase leading-[0.84] tracking-[-0.055em] text-[#211A3B] min-[390px]:text-[3.55rem] sm:mt-5 sm:text-6xl sm:tracking-[-0.04em] md:text-8xl">
              Built by people
              <span className="block text-[#00863D]">
                who care about what&apos;s next.
              </span>
            </h2>
          </div>

          <div ref={introRef} className="lg:pb-2">
            <p className="max-w-xl text-[15px] leading-[1.65] text-[#211A3B]/65 sm:text-lg sm:leading-relaxed">
              Econnext is powered by people committed to creating meaningful
              conversations, stronger connections and better opportunities for
              the next generation.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <AnimatedCard
              key={member.role}
              intensity={index % 2 === 0 ? 1 : 0.8}
              className={`
                ${
                  index === 1
                    ? "lg:translate-y-10"
                    : index === 2
                      ? "lg:-translate-y-4"
                      : index === 3
                        ? "lg:translate-y-6"
                        : ""
                }
              `}
            >
              <article
                ref={(element) => {
                  cardsRef.current[index] = element;
                }}
                className="group relative h-full overflow-hidden rounded-[1.5rem] bg-[#FEFEFE] p-4 shadow-sm sm:rounded-[2rem] sm:p-5"
              >
                <div
                  className="absolute right-0 top-0 h-28 w-28 translate-x-1/3 -translate-y-1/3 rounded-full opacity-20 blur-2xl transition duration-500 group-hover:scale-150 sm:h-32 sm:w-32"
                  style={{ backgroundColor: member.accent }}
                  aria-hidden="true"
                />

                <div className="relative aspect-[1/0.98] overflow-hidden rounded-[1.25rem] bg-[#C8F3D9] sm:aspect-square sm:rounded-[1.5rem]">
                  <div
                    className="absolute inset-0 opacity-30 transition duration-500 group-hover:scale-110"
                    style={{
                      background: `radial-gradient(circle at 70% 30%, ${member.accent}, transparent 45%)`,
                    }}
                    aria-hidden="true"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#211A3B] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.13em] text-white sm:left-5 sm:top-5 sm:px-3 sm:py-2 sm:text-[10px] sm:tracking-[0.15em]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="flex h-20 w-20 items-center justify-center rounded-full text-2xl font-black text-[#211A3B] transition duration-500 group-hover:scale-110 sm:h-24 sm:w-24 sm:text-3xl"
                      style={{ backgroundColor: member.accent }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <div
                    className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: member.accent }}
                    aria-hidden="true"
                  />
                </div>

                <div className="px-1 pb-1 pt-5 sm:px-2 sm:pb-2 sm:pt-6">
                  <p
                    className="max-w-[90%] text-[10px] font-black uppercase leading-[1.35] tracking-[0.14em] sm:text-xs sm:tracking-[0.18em]"
                    style={{ color: member.accent }}
                  >
                    {member.role}
                  </p>

                  <div className="mt-3 flex items-end justify-between gap-3 sm:gap-4">
                    <h3 className="text-[1.35rem] font-black uppercase leading-[0.92] text-[#211A3B] min-[390px]:text-[1.45rem] sm:text-xl">
                      {member.name}
                    </h3>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#211A3B] text-xs font-black text-white transition duration-300 group-hover:rotate-45 sm:h-9 sm:w-9 sm:text-sm">
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-7 rounded-[1.5rem] bg-[#211A3B] p-6 text-white sm:mt-10 sm:rounded-[2rem] sm:p-10">
          <div className="flex flex-col justify-between gap-6 sm:gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ACC640] sm:text-xs sm:tracking-[0.2em]">
                Behind the scenes
              </p>

              <p className="mt-3 text-[1.8rem] font-black uppercase leading-[0.9] min-[390px]:text-[1.95rem] sm:mt-4 sm:text-4xl md:text-5xl">
                Different roles.
                <br />
                One shared direction.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3 md:max-w-sm md:justify-end">
              {["People", "Purpose", "Ideas", "Execution"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-white/80 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.12em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}