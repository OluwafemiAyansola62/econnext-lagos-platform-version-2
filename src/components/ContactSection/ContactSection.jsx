// src/components/ContactSection/ContactSection.jsx

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const channels = [
  {
    label: "Instagram",
    value: "@econnextlagos",
    href: "#",
  },
  {
    label: "LinkedIn",
    value: "Econnext Lagos",
    href: "#",
  },
  {
    label: "Email",
    value: "hello@econnextlagos.com",
    href: "mailto:hello@econnextlagos.com",
  },
];

export default function ContactSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const content = contentRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!content) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      gsap.set(content, {
        opacity: 0,
        y: 40,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 25,
      });

      if (prefersReducedMotion) {
        gsap.set([content, ...cards], {
          clearProps: "all",
        });

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
        .to(content, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.out",
        })
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
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
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[#211A3B] px-5 py-20 text-white sm:scroll-mt-28 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      aria-labelledby="contact-title"
    >
      <div
        className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full border-[28px] border-[#22CF01]/15 sm:-right-32 sm:-top-32 sm:h-80 sm:w-80 sm:border-[36px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#F77006]/10 blur-[80px] sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFC778]/5 blur-[70px] sm:h-56 sm:w-56"
        aria-hidden="true"
      />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14">
          <div className="min-w-0">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FFC778] sm:text-sm sm:tracking-[0.25em]">
              Connect with us
            </p>

            <h2
              id="contact-title"
              className="mt-4 max-w-4xl text-[3.25rem] font-black uppercase leading-[0.86] tracking-[-0.055em] sm:mt-5 sm:text-6xl sm:tracking-[-0.04em] md:text-7xl lg:text-8xl"
            >
              Let&apos;s keep
              <span className="block text-[#22CF01]">
                the conversation going.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-[1.65] text-white/60 sm:mt-7 sm:text-lg sm:leading-relaxed">
              Have a question, partnership idea or opportunity to collaborate?
              Reach out and stay connected with the Econnext Lagos community.
            </p>
          </div>

          <div className="grid min-w-0 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {channels.map((channel, index) => (
              <a
                key={channel.label}
                ref={(element) => {
                  cardsRef.current[index] = element;
                }}
                href={channel.href}
                className="group block min-w-0 rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.08] sm:rounded-[1.5rem] sm:p-5 lg:p-6"
              >
                <div className="flex min-w-0 items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#FFC778] sm:text-xs sm:tracking-[0.2em]">
                      {channel.label}
                    </p>

                    <p className="mt-2.5 break-words text-sm font-bold leading-snug text-white sm:text-base">
                      {channel.value}
                    </p>
                  </div>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#22CF01] text-xs font-black text-[#211A3B] transition-transform duration-300 group-hover:rotate-45 sm:h-9 sm:w-9 sm:text-sm">
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-7 sm:mt-12 sm:pt-8 lg:mt-14">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-white/40 sm:text-base">
              Econnext Lagos 2026 is presented by NESA Lagos.
            </p>

            <a
              href="#register"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#F77006] px-6 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#ff861f] sm:w-auto sm:px-7 sm:py-4 sm:text-sm"
            >
              Register Interest
              <span className="ml-3">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}