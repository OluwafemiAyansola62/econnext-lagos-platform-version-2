// src/components/NESASection/NESASection.jsx

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    number: "01",
    title: "Economics",
    description:
      "Creating space for conversations around economic thinking, development and the forces shaping opportunity.",
    accent: "#22CF01",
  },
  {
    number: "02",
    title: "Leadership",
    description:
      "Connecting emerging leaders with ideas, people and perspectives that can influence what comes next.",
    accent: "#FFC778",
  },
  {
    number: "03",
    title: "Opportunity",
    description:
      "Building meaningful connections between people, ideas and the opportunities shaping Africa's future.",
    accent: "#F77006",
  },
];

export default function NESASection() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const cardsRef = useRef([]);
  const markRef = useRef(null);
  const lineRef = useRef(null);

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
      gsap.set(
        [
          eyebrowRef.current,
          headingRef.current,
          introRef.current,
          lineRef.current,
          ...cards,
        ],
        {
          opacity: 0,
          y: 50,
        },
      );

      gsap.set(markRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -12,
      });

      if (prefersReducedMotion) {
        gsap.set(
          [
            eyebrowRef.current,
            headingRef.current,
            introRef.current,
            lineRef.current,
            ...cards,
          ],
          {
            clearProps: "all",
          },
        );

        gsap.set(markRef.current, {
          clearProps: "all",
        });

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
        .to(markRef.current, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.9,
          ease: "power3.out",
        })
        .to(
          eyebrowRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.4",
        )
        .to(
          introRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          lineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.25",
        );

      gsap.to(markRef.current, {
        y: -12,
        rotation: 5,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="nesa"
      className="relative overflow-hidden bg-[#211A3B] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32"
      aria-labelledby="nesa-title"
    >
      <div
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#22CF01]/10 blur-[90px] sm:h-[30rem] sm:w-[30rem] sm:blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#F77006]/10 blur-[100px] sm:h-[36rem] sm:w-[36rem] sm:blur-[130px]"
        aria-hidden="true"
      />

      <div
        ref={markRef}
        className="pointer-events-none absolute right-[5%] top-[12%] h-32 w-32 rounded-[2rem] border-[18px] border-[#FFC778]/20 sm:h-56 sm:w-56 sm:rounded-[3rem] sm:border-[28px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
          <div>
            <p
              ref={eyebrowRef}
              className="text-[11px] font-black uppercase tracking-[0.22em] text-[#22CF01] sm:text-sm sm:tracking-[0.25em]"
            >
              Presented by NESA Lagos
            </p>

            <h2
              ref={headingRef}
              id="nesa-title"
              className="mt-5 max-w-5xl text-[3.35rem] font-black uppercase leading-[0.84] tracking-[-0.055em] sm:text-6xl sm:tracking-[-0.04em] md:text-8xl lg:text-[7rem]"
            >
              Meet the force
              <span className="block text-[#FFC778]">behind the room.</span>
            </h2>
          </div>

          <div ref={introRef}>
            <p className="max-w-xl text-[15px] leading-[1.65] text-white/65 sm:text-lg sm:leading-relaxed">
              Econnext Lagos is presented by NESA Lagos, bringing together
              conversations, connections and ideas focused on the economic
              future of Africa.
            </p>
          </div>
        </div>

        <div
          ref={lineRef}
          className="mt-12 h-px w-full bg-white/15 sm:mt-16"
          aria-hidden="true"
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5 lg:mt-16">
          {highlights.map((highlight, index) => (
            <article
              key={highlight.number}
              ref={(element) => {
                cardsRef.current[index] = element;
              }}
              className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 sm:rounded-[2rem] sm:p-8"
            >
              <div
                className="absolute right-0 top-0 h-28 w-28 translate-x-1/3 -translate-y-1/3 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: highlight.accent }}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-black uppercase tracking-[0.2em]"
                    style={{ color: highlight.accent }}
                  >
                    {highlight.number}
                  </span>

                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: highlight.accent }}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-12 text-2xl font-black uppercase leading-none tracking-tight text-white sm:text-3xl">
                  {highlight.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                  {highlight.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.5rem] bg-[#FFC778] p-6 text-[#211A3B] sm:mt-8 sm:rounded-[2rem] sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#F77006] sm:text-xs sm:tracking-[0.2em]">
                Econnext Lagos 2026
              </p>

              <p className="mt-3 max-w-3xl text-[1.8rem] font-black uppercase leading-[0.9] sm:text-4xl md:text-5xl">
                Ideas become more powerful when the right people are in the
                room.
              </p>
            </div>

            <a
              href="#speakers"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#211A3B] px-6 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-black sm:px-7 sm:text-sm"
            >
              Meet the Speakers
              <span className="ml-3" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}