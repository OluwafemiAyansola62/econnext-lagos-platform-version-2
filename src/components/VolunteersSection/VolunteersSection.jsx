// src/components/VolunteersSection/VolunteersSection.jsx

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const volunteerTracks = [
  {
    number: "01",
    title: "Event Support",
    description:
      "Help create a smooth experience for speakers, guests and attendees before and throughout the conference.",
    accent: "#22CF01",
  },
  {
    number: "02",
    title: "Media & Content",
    description:
      "Capture moments, support storytelling and help share the conversations shaping Econnext.",
    accent: "#FFC778",
  },
  {
    number: "03",
    title: "Guest Experience",
    description:
      "Welcome participants, provide guidance and help make every interaction feel intentional.",
    accent: "#F77006",
  },
  {
    number: "04",
    title: "Operations",
    description:
      "Support logistics, coordination and the behind-the-scenes work that keeps the experience moving.",
    accent: "#22CF01",
  },
];

export default function VolunteersSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);

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
        y: 60,
      });

      gsap.set(introRef.current, {
        opacity: 0,
        y: 35,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 55,
      });

      gsap.set(ctaRef.current, {
        opacity: 0,
        y: 40,
      });

      if (prefersReducedMotion) {
        gsap.set(
          [
            headingRef.current,
            introRef.current,
            ...cards,
            ctaRef.current,
          ],
          {
            clearProps: "all",
          },
        );

        return;
      }

      const entrance = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      entrance
        .to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power4.out",
        })
        .to(
          introRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35",
        );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="volunteers"
      className="relative overflow-hidden bg-[#FEFEFE] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
      aria-labelledby="volunteers-title"
    >
      <div
        className="pointer-events-none absolute -right-28 top-16 h-72 w-72 rounded-full bg-[#FFC778]/25 blur-[80px] sm:-right-40 sm:h-96 sm:w-96 sm:blur-[110px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-28 bottom-10 h-64 w-64 rounded-full bg-[#C8F3D9]/70 blur-[80px] sm:-left-40 sm:h-96 sm:w-96 sm:blur-[110px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-1/3 top-1/2 h-32 w-32 rounded-full border-[22px] border-[#F77006]/10 sm:h-48 sm:w-48 sm:border-[30px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
          <div ref={headingRef}>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#F77006] sm:text-sm sm:tracking-[0.25em]">
              Join the team
            </p>

            <h2
              id="volunteers-title"
              className="mt-4 max-w-5xl text-[3.25rem] font-black uppercase leading-[0.84] tracking-[-0.055em] text-[#211A3B] min-[390px]:text-[3.55rem] sm:mt-5 sm:text-6xl sm:tracking-[-0.04em] md:text-8xl"
            >
              Be part of
              <span className="block text-[#F77006]">what&apos;s next.</span>
            </h2>
          </div>

          <div ref={introRef}>
            <p className="max-w-xl text-[15px] leading-[1.65] text-[#211A3B]/65 sm:text-lg sm:leading-relaxed">
              Econnext is powered by people who believe meaningful
              conversations can create meaningful opportunities. Join the
              volunteer team and help bring the experience to life.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4">
          {volunteerTracks.map((track, index) => (
            <article
              key={track.number}
              ref={(element) => {
                cardsRef.current[index] = element;
              }}
              className="group relative overflow-hidden rounded-[1.5rem] bg-[#F3F1F7] p-5 transition-transform duration-300 sm:rounded-[2rem] sm:p-6 hover:-translate-y-1"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-transform duration-500 group-hover:scale-150"
                style={{ backgroundColor: track.accent }}
                aria-hidden="true"
              />

              <div className="relative flex min-h-[260px] flex-col">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-black text-[#211A3B]"
                    style={{ backgroundColor: track.accent }}
                  >
                    {track.number}
                  </span>

                  <span
                    className="text-2xl font-black text-[#211A3B]/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <div className="mt-auto">
                  <p
                    className="text-[10px] font-black uppercase tracking-[0.16em]"
                    style={{ color: track.accent }}
                  >
                    Volunteer Track
                  </p>

                  <h3 className="mt-3 text-[1.65rem] font-black uppercase leading-[0.9] tracking-[-0.025em] text-[#211A3B] sm:text-2xl">
                    {track.title}
                  </h3>

                  <p className="mt-4 text-sm leading-[1.6] text-[#211A3B]/60">
                    {track.description}
                  </p>
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: track.accent }}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        <div
          ref={ctaRef}
          className="mt-7 overflow-hidden rounded-[1.5rem] bg-[#211A3B] p-6 text-white sm:mt-10 sm:rounded-[2rem] sm:p-10"
        >
          <div className="relative flex flex-col gap-7 sm:gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#22CF01] sm:text-xs sm:tracking-[0.2em]">
                Volunteers wanted
              </p>

              <h3 className="mt-3 text-[1.8rem] font-black uppercase leading-[0.92] tracking-[-0.02em] min-[390px]:text-[2rem] sm:mt-4 sm:text-4xl md:text-5xl">
                Bring your energy.
                <span className="block text-[#FFC778]">
                  Help build the experience.
                </span>
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
                Volunteer registration details will be announced soon. Stay
                connected for the call to join the Econnext Lagos 2026 team.
              </p>
            </div>

            <a
              href="#register"
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-full bg-[#22CF01] px-6 py-3.5 text-xs font-black uppercase tracking-[0.1em] text-[#211A3B] transition duration-300 hover:-translate-y-1 hover:bg-[#35e51a] sm:w-auto sm:min-w-[190px] sm:px-7 sm:py-4 sm:text-sm"
            >
              Stay Connected
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}