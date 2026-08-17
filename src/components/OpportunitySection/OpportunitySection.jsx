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
      gsap.set(headingRef.current, {
        opacity: 0,
        y: 70,
      });

      gsap.set(introRef.current, {
        opacity: 0,
        y: 45,
      });

      gsap.set(cardElements, {
        opacity: 0,
        y: 70,
        scale: 0.96,
      });

      gsap.set(accentRef.current, {
        opacity: 0,
        scale: 0.75,
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
          start: "top 75%",
          once: true,
        },
      });

      revealTimeline
        .to(accentRef.current, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.9,
          ease: "back.out(1.5)",
        })
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.55",
        )
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
          cardElements,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4",
        );

      gsap.to(accentRef.current, {
        y: 18,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      if (supportsHover) {
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

            const x =
              (event.clientX - rect.left) / rect.width - 0.5;

            const y =
              (event.clientY - rect.top) / rect.height - 0.5;

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
      }
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
      className="relative overflow-hidden bg-[#FEFEFE] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          ref={accentRef}
          className="absolute -right-20 top-20 h-72 w-72 rounded-full border-[35px] border-[#22CF01]/20 sm:h-96 sm:w-96"
        />

        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#FFC778]/10 blur-[100px]" />

        <div className="absolute right-0 top-1/2 h-80 w-80 rounded-full bg-[#F77006]/10 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#F77006]">
              Your Opportunity
            </p>

            <h2
              ref={headingRef}
              className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-tight sm:text-6xl md:text-8xl"
            >
              More than a conference.
            </h2>
          </div>

          <p
            ref={introRef}
            className="max-w-2xl text-lg leading-relaxed text-[#211A3B]/65 sm:text-xl"
          >
            Econnext creates a space where ideas become connections,
            connections become opportunities, and opportunities become
            action.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {opportunities.map((item, index) => (
            <article
              key={item.number}
              ref={(element) => {
                cardsRef.current[index] = element;
              }}
              className="group min-h-[300px] rounded-[2rem] bg-[#211A3B] p-7 text-white transform-gpu [transform-style:preserve-3d] sm:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="text-4xl font-black text-[#FFC778]">
                  {item.number}
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#22CF01] text-lg font-black text-[#211A3B] transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </span>
              </div>

              <div className="mt-20">
                <h3 className="text-3xl font-black uppercase leading-none sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-xl leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] bg-[#C8F3D9] p-8 sm:p-10">
          <p className="max-w-4xl text-2xl font-black uppercase leading-tight text-[#211A3B] sm:text-3xl md:text-4xl">
            Come with questions. Leave with direction.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Ideas",
              "People",
              "Skills",
              "Connections",
              "Opportunities",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#211A3B]/15 bg-white/60 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#211A3B]"
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