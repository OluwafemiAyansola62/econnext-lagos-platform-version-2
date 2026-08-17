// src/components/ConferenceFocus/ConferenceFocus.jsx

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCard from "../AnimatedCard/AnimatedCard";

gsap.registerPlugin(ScrollTrigger);

const conferenceFocus = [
  {
    number: "01",
    title: "Future of Work",
    description:
      "Explore how technology, AI and changing industries are reshaping careers and the workplace.",
    accent: "#22CF01",
  },
  {
    number: "02",
    title: "Economic Opportunity",
    description:
      "Understand the forces shaping Africa's economy and discover where emerging opportunities lie.",
    accent: "#FFC778",
  },
  {
    number: "03",
    title: "Career Growth",
    description:
      "Gain practical insights, connections and strategies for navigating the modern labour market.",
    accent: "#F77006",
  },
  {
    number: "04",
    title: "Innovation",
    description:
      "Discover how young people can use technology, creativity and entrepreneurship to create impact.",
    accent: "#22CF01",
  },
  {
    number: "05",
    title: "Leadership",
    description:
      "Connect with ideas and people shaping the next generation of African economic leadership.",
    accent: "#FFC778",
  },
  {
    number: "06",
    title: "Industry",
    description:
      "Bridge the gap between students, employers, professionals, policymakers and industry leaders.",
    accent: "#F77006",
  },
];

export default function ConferenceFocus() {
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

      if (prefersReducedMotion) {
        gsap.set(
          [headingRef.current, introRef.current, ...cards],
          {
            clearProps: "all",
          },
        );

        return;
      }

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
        y: 100,
        scale: 0.94,
      });

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
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.35",
        );

      cards.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -12 : 12,
          duration: 3.5 + index * 0.25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.15,
        });
      });
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="focus"
      className="relative overflow-hidden bg-[#C8F3D9] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#22CF01]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#FFC778]/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div ref={headingRef}>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#00863D]">
              Conference Focus
            </p>

            <h2 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.84] tracking-[-0.04em] text-[#211A3B] sm:text-6xl md:text-8xl">
              Where ideas
              <span className="block text-[#00863D]">
                meet opportunity.
              </span>
            </h2>
          </div>

          <div ref={introRef} className="lg:pb-2">
            <p className="max-w-xl text-base leading-relaxed text-[#211A3B]/65 sm:text-lg">
              Econnext brings together the ideas, people and opportunities
              shaping Africa&apos;s next economic chapter.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {conferenceFocus.map((item, index) => (
            <AnimatedCard
              key={item.number}
              intensity={index % 2 === 0 ? 1 : 0.8}
              className={
                index === 1
                  ? "lg:translate-y-10"
                  : index === 4
                    ? "lg:-translate-y-6"
                    : ""
              }
            >
              <article
                ref={(element) => {
                  cardsRef.current[index] = element;
                }}
                className="group relative min-h-[22rem] overflow-hidden rounded-[2rem] bg-white p-7 shadow-sm"
              >
                <div
                  className="absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full opacity-20 blur-2xl transition duration-500 group-hover:scale-150"
                  style={{ backgroundColor: item.accent }}
                  aria-hidden="true"
                />

                <div className="relative flex items-start justify-between">
                  <span
                    className="text-5xl font-black leading-none"
                    style={{ color: item.accent }}
                  >
                    {item.number}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C8F3D9] text-lg font-black transition duration-500 group-hover:rotate-45 group-hover:bg-[#211A3B] group-hover:text-white">
                    ↗
                  </span>
                </div>

                <div className="relative mt-20">
                  <h3 className="max-w-xs text-2xl font-black uppercase leading-[0.9] text-[#211A3B] sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-md leading-relaxed text-[#211A3B]/60">
                    {item.description}
                  </p>
                </div>

                <div
                  className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: item.accent }}
                  aria-hidden="true"
                />
              </article>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}