// src/components/RegisterSection/RegisterSection.jsx

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MagneticButton from "../MagneticButton/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function RegisterSection() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const orbRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      const elements = [
        eyebrowRef.current,
        headingRef.current,
        buttonRef.current,
      ].filter(Boolean);

      gsap.set(elements, {
        opacity: 0,
        y: 60,
      });

      gsap.set(orbRef.current, {
        opacity: 0,
        scale: 0.7,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      if (prefersReducedMotion) {
        gsap.set(elements, {
          opacity: 1,
          y: 0,
        });

        gsap.set(orbRef.current, {
          opacity: 1,
          scale: 1,
        });

        gsap.set(lineRef.current, {
          scaleX: 1,
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
        .to(orbRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        })
        .to(
          eyebrowRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.45",
        )
        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35",
        );

      gsap.to(orbRef.current, {
        x: 30,
        y: -20,
        rotation: 8,
        duration: 5,
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
      id="register"
      className="relative overflow-hidden bg-[#FFC778] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          ref={orbRef}
          className="absolute -right-24 -top-24 h-64 w-64 rounded-full border-[28px] border-[#F77006]/20 sm:-right-32 sm:-top-32 sm:h-[30rem] sm:w-[30rem] sm:border-[45px] lg:h-[38rem] lg:w-[38rem]"
        />

        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/20 blur-3xl sm:-bottom-32 sm:-left-32 sm:h-80 sm:w-80" />

        <div className="absolute right-1/4 top-1/2 h-32 w-32 rounded-full bg-[#22CF01]/10 blur-3xl sm:h-40 sm:w-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-6xl">
          <p
            ref={eyebrowRef}
            className="text-xs font-black uppercase tracking-[0.2em] text-[#211A3B]/60 sm:text-sm sm:tracking-[0.25em]"
          >
            Econnext Lagos Conference 26
          </p>

          <h2
            ref={headingRef}
            className="mt-5 max-w-6xl text-[3.25rem] font-black uppercase leading-[0.84] tracking-[-0.045em] text-[#211A3B] min-[390px]:text-[3.5rem] min-[430px]:text-[3.75rem] sm:text-6xl md:text-8xl lg:text-[9rem]"
          >
            Your next
            <span className="block text-[#F77006]">opportunity</span>
            could start here.
          </h2>

          <div
            ref={lineRef}
            className="mt-8 h-1 w-full max-w-4xl bg-[#211A3B] sm:mt-10"
            aria-hidden="true"
          />

          <div className="mt-7 flex flex-col gap-7 md:mt-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-base leading-relaxed text-[#211A3B]/65 sm:text-lg">
              Come ready to learn, connect and discover what comes next.
              Registration details will be announced soon.
            </p>

            <div ref={buttonRef} className="w-full sm:w-auto">
              <MagneticButton
                href="#"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#211A3B] px-7 py-4 text-center text-xs font-black uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-black sm:w-auto sm:px-8 sm:text-sm sm:tracking-[0.15em]"
              >
                Registration Coming Soon
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}