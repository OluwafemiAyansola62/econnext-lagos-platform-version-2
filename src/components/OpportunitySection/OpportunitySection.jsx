// src/components/OpportunitySection/OpportunitySection.jsx

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const opportunities = [
  {
    number: "01",
    title: "Learn",
    description:
      "Get practical perspectives on economics, technology, careers and the forces shaping Africa's future.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Meet students, professionals, entrepreneurs, employers and leaders building what comes next.",
  },
  {
    number: "03",
    title: "Discover",
    description:
      "Explore new career pathways, emerging industries and opportunities created by a changing economy.",
  },
  {
    number: "04",
    title: "Act",
    description:
      "Turn ideas and conversations into relationships, projects and meaningful next steps.",
  },
];

const tags = [
  "Ideas",
  "People",
  "Skills",
  "Connections",
  "Opportunities",
];

export default function OpportunitySection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const cardsRef = useRef([]);
  const accentRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const supportsHover = window.matchMedia("(hover: hover)").matches;
    const cardElements = cardsRef.current.filter(Boolean);
    const cleanupHandlers = [];

    const context = gsap.context(() => {
      gsap.set(
        [
          headingRef.current,
          introRef.current,
          ...cardElements,
          accentRef.current,
        ],
        {
          opacity: 0,
        },
      );

      gsap.set(headingRef.current, {
        y: 50,
      });

      gsap.set(introRef.current, {
        y: 35,
      });

      gsap.set(cardElements, {
        y: 50,
        scale: 0.98,
      });

      gsap.set(accentRef.current, {
        scale: 0.8,
        rotation: -12,
      });

      if (prefersReducedMotion) {
        gsap.set(
          [
            headingRef.current,
            introRef.current,
            ...cardElements,
            accentRef.current,
          ],
          {
            clearProps: "all",
          },
        );

        return;
      }

      const revealTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      revealTimeline
        .to(accentRef.current, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.5)",
        })
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
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
          cardElements,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.35",
        );

      gsap.to(accentRef.current, {
        y: 18,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      if (!supportsHover) {
        return;
      }

      cardElements.forEach((card) => {
        const moveX = gsap.quickTo(card, "x", {
          duration: 0.4,
          ease: "power3.out",
        });

        const moveY = gsap.quickTo(card, "y", {
          duration: 0.4,
          ease: "power3.out",
        });

        const rotateX = gsap.quickTo(card, "rotationX", {
          duration: 0.45,
          ease: "power3.out",
        });

        const rotateY = gsap.quickTo(card, "rotationY", {
          duration: 0.45,
          ease: "power3.out",
        });

        const handleMouseMove = (event) => {
          const rect = card.getBoundingClientRect();

          if (!rect.width || !rect.height) {
            return;
          }

          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;

          moveX(x * 5);
          moveY(y * 5);
          rotateX(y * -5);
          rotateY(x * 5);
        };

        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.025,
            duration: 0.3,
            ease: "power3.out",
            overwrite: true,
          });
        };

        const handleMouseLeave = () => {
          moveX(0);
          moveY(0);
          rotateX(0);
          rotateY(0);

          gsap.to(card, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
            overwrite: true,
          });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        cleanupHandlers.push(() => {
          card.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
        });
      });
    }, section);

    return () => {
      cleanupHandlers.forEach((cleanup) => {
        cleanup();
      });

      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="opportunities"
      className="relative overflow-hidden bg-[#FEFEFE] px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          ref={accentRef}
          className="absolute -right-28 top-16 h-64 w-64 rounded-full border-[28px] border-[#22CF01]/20 sm:-right-20 sm:top-20 sm:h-96 sm:w-96 sm:border-[35px]"
        />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#FFC778]/10 blur-[100px] sm:h-96 sm:w-96" />

        <div className="absolute -right-20 top-1/2 h-72 w-72 rounded-full bg-[#F77006]/10 blur-[110px] sm:right-0 sm:h-80 sm:w-80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#F77006] sm:text-sm sm:tracking-[0.25em]">
              Your Opportunity
            </p>

            <h2
              ref={headingRef}
              className="mt-4 max-w-4xl text-[2.75rem] font-black uppercase leading-[0.9] tracking-[-0.035em] sm:mt-5 sm:text-6xl md:text-8xl"
            >
              More than a conference.
            </h2>
          </div>

          <p
            ref={introRef}
            className="max-w-2xl text-base leading-relaxed text-[#211A3B]/65 sm:text-xl"
          >
            Econnext creates a space where ideas become connections,
            connections become opportunities, and opportunities become
            action.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5">
          {opportunities.map((item, index) => (
            <article
              key={item.number}
              ref={(element) => {
                cardsRef.current[index] = element;
              }}
              className="group min-h-[270px] rounded-[1.5rem] bg-[#211A3B] p-6 text-white transform-gpu [transform-style:preserve-3d] sm:min-h-[300px] sm:rounded-[2rem] sm:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-3xl font-black text-[#FFC778] sm:text-4xl">
                  {item.number}
                </span>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#22CF01] text-base font-black text-[#211A3B] transition-transform duration-300 group-hover:rotate-45 sm:h-11 sm:w-11 sm:text-lg">
                  ↗
                </span>
              </div>

              <div className="mt-14 sm:mt-20">
                <h3 className="text-3xl font-black uppercase leading-none sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:mt-5 sm:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 rounded-[1.5rem] bg-[#C8F3D9] p-6 sm:mt-8 sm:rounded-[2rem] sm:p-10">
          <p className="max-w-4xl text-xl font-black uppercase leading-tight text-[#211A3B] sm:text-3xl md:text-4xl">
            Come with questions. Leave with direction.
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
            {tags.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#211A3B]/15 bg-white/60 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.1em] text-[#211A3B] sm:px-4 sm:text-xs sm:tracking-[0.12em]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}