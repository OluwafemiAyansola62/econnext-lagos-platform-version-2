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
      className="relative overflow-hidden bg-[#ACC640] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -right-32 top-12 h-96 w-96 rounded-full border-[45px] border-[#211A3B]/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-32 bottom-[-8rem] h-[32rem] w-[32rem] rounded-full bg-[#C8F3D9]/40 blur-[90px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-[#FFC778]/20 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div ref={headingRef}>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#211A3B]/60">
              The People Behind Econnext
            </p>

            <h2 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.84] tracking-[-0.04em] text-[#211A3B] sm:text-6xl md:text-8xl">
              Built by people
              <span className="block text-[#00863D]">
                who care about what&apos;s next.
              </span>
            </h2>
          </div>

          <div ref={introRef} className="lg:pb-2">
            <p className="max-w-xl text-base leading-relaxed text-[#211A3B]/65 sm:text-lg">
              Econnext is powered by people committed to creating meaningful
              conversations, stronger connections and better opportunities for
              the next generation.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                className="group relative h-full overflow-hidden rounded-[2rem] bg-[#FEFEFE] p-5 shadow-sm"
              >
                <div
                  className="absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full opacity-20 blur-2xl transition duration-500 group-hover:scale-150"
                  style={{ backgroundColor: member.accent }}
                  aria-hidden="true"
                />

                <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-[#C8F3D9]">
                  <div
                    className="absolute inset-0 opacity-30 transition duration-500 group-hover:scale-110"
                    style={{
                      background: `radial-gradient(circle at 70% 30%, ${member.accent}, transparent 45%)`,
                    }}
                    aria-hidden="true"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-[#211A3B] px-3 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="flex h-24 w-24 items-center justify-center rounded-full text-3xl font-black text-[#211A3B] transition duration-500 group-hover:scale-110"
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

                <div className="px-2 pb-2 pt-6">
                  <p
                    className="text-xs font-black uppercase tracking-[0.18em]"
                    style={{ color: member.accent }}
                  >
                    {member.role}
                  </p>

                  <div className="mt-3 flex items-end justify-between gap-4">
                    <h3 className="text-xl font-black uppercase leading-none text-[#211A3B]">
                      {member.name}
                    </h3>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#211A3B] text-sm font-black text-white transition duration-300 group-hover:rotate-45">
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] bg-[#211A3B] p-8 text-white sm:p-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ACC640]">
                Behind the scenes
              </p>

              <p className="mt-4 max-w-3xl text-3xl font-black uppercase leading-[0.9] sm:text-4xl md:text-5xl">
                Different roles.
                <br />
                One shared direction.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:max-w-sm md:justify-end">
              {["People", "Purpose", "Ideas", "Execution"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/80"
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