// src/components/SpeakersSection/SpeakersSection.jsx

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCard from "../AnimatedCard/AnimatedCard";

gsap.registerPlugin(ScrollTrigger);

const speakers = [
  {
    name: "Speaker TBA",
    role: "Industry Leader",
    description:
      "A leading voice contributing to conversations around economics, technology and the future of work.",
    accent: "#22CF01",
  },
  {
    name: "Speaker TBA",
    role: "Economist / Policy Expert",
    description:
      "Bringing perspectives on economic development, policy and opportunities for young Africans.",
    accent: "#FFC778",
  },
  {
    name: "Speaker TBA",
    role: "Technology & Innovation Leader",
    description:
      "Exploring the role of AI, digital transformation and innovation in the future economy.",
    accent: "#F77006",
  },
];

export default function SpeakersSection() {
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

    const context = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      gsap.set(headingRef.current, {
        opacity: 0,
        y: 80,
      });

      gsap.set(introRef.current, {
        opacity: 0,
        y: 40,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 90,
        scale: 0.95,
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
            duration: 0.85,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.35",
        );

      cards.forEach((card, index) => {
        gsap.to(card, {
          y: index === 1 ? -10 : 10,
          duration: 3.5 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="speakers"
      className="relative overflow-hidden bg-[#FEFEFE] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#FFC778]/20 blur-3xl sm:-right-40 sm:top-10 sm:h-[30rem] sm:w-[30rem]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-[#C8F3D9]/60 blur-3xl sm:-left-40 sm:h-[28rem] sm:w-[28rem]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-1/3 top-1/3 h-28 w-28 rounded-full border-[20px] border-[#F77006]/10 sm:h-40 sm:w-40 sm:border-[28px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div ref={headingRef}>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#F77006] sm:text-sm sm:tracking-[0.25em]">
              Speakers
            </p>

            <h2 className="mt-4 max-w-5xl text-[3.35rem] font-black uppercase leading-[0.84] tracking-[-0.055em] text-[#211A3B] min-[390px]:text-[3.6rem] sm:mt-5 sm:text-6xl sm:tracking-[-0.04em] md:text-8xl">
              Voices shaping
              <span className="block text-[#F77006]">
                what comes next.
              </span>
            </h2>
          </div>

          <div ref={introRef} className="lg:pb-2">
            <p className="max-w-xl text-[15px] leading-[1.65] text-[#211A3B]/65 sm:text-lg sm:leading-relaxed">
              Econnext brings together voices from industry, economics,
              technology and innovation to explore the forces shaping
              Africa&apos;s next economic chapter.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3 lg:mt-16">
          {speakers.map((speaker, index) => (
            <div
              key={`${speaker.role}-${index}`}
              className={
                index === 1
                  ? "md:pt-10"
                  : index === 2
                    ? "md:-mt-4"
                    : ""
              }
            >
              <AnimatedCard
                intensity={index === 1 ? 0.8 : 1}
                className="h-full"
              >
                <article
                  ref={(element) => {
                    cardsRef.current[index] = element;
                  }}
                  className="group relative h-full overflow-hidden rounded-[1.5rem] bg-[#F3F1F7] sm:rounded-[2rem]"
                >
                  <div className="relative aspect-[1/1.04] overflow-hidden bg-[#C8F3D9] sm:aspect-[4/4.2]">
                    <div
                      className="absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-25 blur-2xl transition duration-700 group-hover:scale-150 sm:-right-12 sm:-top-12 sm:h-48 sm:w-48"
                      style={{ backgroundColor: speaker.accent }}
                      aria-hidden="true"
                    />

                    <div
                      className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full opacity-20 blur-3xl sm:-bottom-20 sm:-left-16 sm:h-52 sm:w-52"
                      style={{ backgroundColor: speaker.accent }}
                      aria-hidden="true"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl transition duration-500 group-hover:scale-110 sm:h-32 sm:w-32">
                        <span
                          className="text-4xl font-black sm:text-5xl"
                          style={{ color: speaker.accent }}
                        >
                          ?
                        </span>
                      </div>
                    </div>

                    <div className="absolute left-4 top-4 rounded-full bg-[#211A3B] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.13em] text-white sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.15em]">
                      Coming Soon
                    </div>

                    <div
                      className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                      style={{ backgroundColor: speaker.accent }}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="p-5 sm:p-7">
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      <p
                        className="max-w-[80%] text-[10px] font-black uppercase leading-[1.35] tracking-[0.14em] sm:text-xs sm:tracking-[0.2em]"
                        style={{ color: speaker.accent }}
                      >
                        {speaker.role}
                      </p>

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8F3D9] text-xs font-black text-[#211A3B] transition duration-500 group-hover:rotate-45 group-hover:bg-[#211A3B] group-hover:text-white sm:h-9 sm:w-9 sm:text-sm">
                        ↗
                      </span>
                    </div>

                    <h3 className="mt-4 text-[1.55rem] font-black uppercase leading-[0.92] text-[#211A3B] min-[390px]:text-[1.65rem] sm:text-3xl">
                      {speaker.name}
                    </h3>

                    <p className="mt-4 text-[15px] leading-[1.6] text-[#211A3B]/60 sm:mt-5 sm:text-base sm:leading-relaxed">
                      {speaker.description}
                    </p>
                  </div>
                </article>
              </AnimatedCard>
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-[1.5rem] bg-[#211A3B] p-6 text-white sm:mt-10 sm:rounded-[2rem] sm:p-10">
          <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#FFC778] sm:text-xs sm:tracking-[0.2em]">
                More voices to come
              </p>

              <p className="mt-3 max-w-3xl text-[1.8rem] font-black uppercase leading-[0.9] min-[390px]:text-[1.95rem] sm:text-3xl md:text-4xl">
                The conversation gets bigger as the programme takes shape.
              </p>
            </div>

            <span className="flex h-12 w-12 shrink-0 items-center justify-center self-end rounded-full bg-[#22CF01] text-lg font-black text-[#211A3B] sm:h-14 sm:w-14 sm:text-xl">
              +
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}