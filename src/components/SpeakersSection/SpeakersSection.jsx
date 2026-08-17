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
      className="relative overflow-hidden bg-[#FEFEFE] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-[#FFC778]/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#C8F3D9]/60 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-1/3 top-1/3 h-40 w-40 rounded-full border-[28px] border-[#F77006]/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div ref={headingRef}>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#F77006]">
              Speakers
            </p>

            <h2 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.84] tracking-[-0.04em] text-[#211A3B] sm:text-6xl md:text-8xl">
              Voices shaping
              <span className="block text-[#F77006]">what comes next.</span>
            </h2>
          </div>

          <div ref={introRef} className="lg:pb-2">
            <p className="max-w-xl text-base leading-relaxed text-[#211A3B]/65 sm:text-lg">
              Econnext brings together voices from industry, economics,
              technology and innovation to explore the forces shaping
              Africa&apos;s next economic chapter.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {speakers.map((speaker, index) => (
            <AnimatedCard
              key={`${speaker.role}-${index}`}
              intensity={index === 1 ? 0.8 : 1}
              className={
                index === 1
                  ? "md:translate-y-10"
                  : index === 2
                    ? "md:-translate-y-4"
                    : ""
              }
            >
              <article
                ref={(element) => {
                  cardsRef.current[index] = element;
                }}
                className="group relative h-full overflow-hidden rounded-[2rem] bg-[#F3F1F7]"
              >
                <div className="relative aspect-[4/4.2] overflow-hidden bg-[#C8F3D9]">
                  <div
                    className="absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-25 blur-2xl transition duration-700 group-hover:scale-150"
                    style={{ backgroundColor: speaker.accent }}
                    aria-hidden="true"
                  />

                  <div
                    className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full opacity-20 blur-3xl"
                    style={{ backgroundColor: speaker.accent }}
                    aria-hidden="true"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-xl transition duration-500 group-hover:scale-110">
                      <span
                        className="text-5xl font-black"
                        style={{ color: speaker.accent }}
                      >
                        ?
                      </span>
                    </div>
                  </div>

                  <div className="absolute left-5 top-5 rounded-full bg-[#211A3B] px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white">
                    Coming Soon
                  </div>

                  <div
                    className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: speaker.accent }}
                    aria-hidden="true"
                  />
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <p
                      className="text-xs font-black uppercase tracking-[0.2em]"
                      style={{ color: speaker.accent }}
                    >
                      {speaker.role}
                    </p>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C8F3D9] text-sm font-black text-[#211A3B] transition duration-500 group-hover:rotate-45 group-hover:bg-[#211A3B] group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black uppercase leading-none text-[#211A3B] sm:text-3xl">
                    {speaker.name}
                  </h3>

                  <p className="mt-5 leading-relaxed text-[#211A3B]/60">
                    {speaker.description}
                  </p>
                </div>
              </article>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] bg-[#211A3B] p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFC778]">
                More voices to come
              </p>

              <p className="mt-3 max-w-3xl text-2xl font-black uppercase leading-tight sm:text-3xl md:text-4xl">
                The conversation gets bigger as the programme takes shape.
              </p>
            </div>

            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#22CF01] text-xl font-black text-[#211A3B]">
              +
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}