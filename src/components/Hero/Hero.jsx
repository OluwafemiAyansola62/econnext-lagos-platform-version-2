// src/components/Hero/Hero.jsx

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const shapes = [
  {
    className:
      "hero-shape hero-shape-ring absolute left-[2%] top-[16%] h-20 w-20 rounded-full border-[12px] border-[#22CF01] sm:left-[4%] sm:top-[18%] sm:h-40 sm:w-40 sm:border-[24px]",
    depth: 1.2,
  },
  {
    className:
      "hero-shape hero-shape-orange absolute right-[3%] top-[11%] h-16 w-16 rotate-12 rounded-[1.25rem] bg-[#F77006] sm:right-[7%] sm:top-[13%] sm:h-36 sm:w-36 sm:rounded-[2rem]",
    depth: -1,
  },
  {
    className:
      "hero-shape hero-shape-yellow absolute bottom-[14%] left-[3%] h-14 w-28 -rotate-12 rounded-[1rem] bg-[#FFC778] sm:bottom-[15%] sm:left-[7%] sm:h-28 sm:w-52 sm:rounded-[1.5rem]",
    depth: 0.8,
  },
  {
    className:
      "hero-shape hero-shape-green absolute bottom-[9%] right-[2%] h-20 w-20 rotate-45 rounded-[1.75rem] bg-[#22CF01] sm:bottom-[10%] sm:right-[5%] sm:h-40 sm:w-40 sm:rounded-[2.5rem]",
    depth: -0.7,
  },
];

function LogoInspiredMark() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[2rem] border-[18px] border-[#22CF01] sm:h-[65%] sm:w-[65%] sm:rounded-[3rem] sm:border-[45px]" />

      <div className="absolute left-1/2 top-1/2 h-[25%] w-[25%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F77006] sm:h-[32%] sm:w-[32%]" />
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const shapesRef = useRef([]);
  const contentRef = useRef(null);
  const markRef = useRef(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;

    if (!hero) {
      return undefined;
    }

    const shapeElements = shapesRef.current.filter(Boolean);
    const content = contentRef.current;
    const mark = markRef.current;

    if (!content || !mark) {
      return undefined;
    }

    const supportsHover = window.matchMedia("(hover: hover)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.innerWidth < 768;

    let handleMouseMove;
    let handleMouseLeave;

    const context = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(shapeElements, {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
        });

        gsap.set(content, {
          opacity: 1,
          y: 0,
        });

        gsap.set(mark, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          x: 0,
          y: 0,
        });

        return;
      }

      gsap.set(shapeElements, {
        opacity: 0,
        scale: 0.7,
        y: 50,
      });

      gsap.set(content, {
        opacity: 0,
        y: 45,
      });

      gsap.set(mark, {
        opacity: 0,
        scale: 0.75,
        rotation: -20,
      });

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .to(mark, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.4,
        })
        .to(
          shapeElements,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            stagger: 0.12,
          },
          "-=0.9",
        )
        .to(
          content,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.6",
        );

      if (isMobile) {
        return;
      }

      shapeElements.forEach((shape, index) => {
        const direction = index % 2 === 0 ? 1 : -1;

        gsap.to(shape, {
          y: direction * 18,
          x: direction * 10,
          rotation: direction * 8,
          duration: 3.5 + index * 0.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });

      gsap.to(mark, {
        rotation: 8,
        scale: 1.04,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(hero, {
        backgroundPosition: "50% 55%",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      if (!supportsHover) {
        return;
      }

      const shapeQuickTos = shapeElements.map((shape, index) => {
        const depth = shapes[index]?.depth ?? 1;

        return {
          moveX: gsap.quickTo(shape, "xPercent", {
            duration: 0.7,
            ease: "power3.out",
          }),
          moveY: gsap.quickTo(shape, "yPercent", {
            duration: 0.7,
            ease: "power3.out",
          }),
          depth,
        };
      });

      const markX = gsap.quickTo(mark, "xPercent", {
        duration: 0.9,
        ease: "power3.out",
      });

      const markY = gsap.quickTo(mark, "yPercent", {
        duration: 0.9,
        ease: "power3.out",
      });

      handleMouseMove = (event) => {
        const rect = hero.getBoundingClientRect();

        if (!rect.width || !rect.height) {
          return;
        }

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        shapeQuickTos.forEach(({ moveX, moveY, depth }) => {
          moveX(x * 8 * depth);
          moveY(y * 8 * depth);
        });

        markX(x * -2);
        markY(y * -2);
      };

      handleMouseLeave = () => {
        shapeQuickTos.forEach(({ moveX, moveY }) => {
          moveX(0);
          moveY(0);
        });

        markX(0);
        markY(0);
      };

      hero.addEventListener("mousemove", handleMouseMove);
      hero.addEventListener("mouseleave", handleMouseLeave);
    }, hero);

    return () => {
      if (handleMouseMove) {
        hero.removeEventListener("mousemove", handleMouseMove);
      }

      if (handleMouseLeave) {
        hero.removeEventListener("mouseleave", handleMouseLeave);
      }

      context.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative isolate flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-[#211A3B] px-5 py-16 text-white sm:min-h-[calc(100vh-80px)] sm:px-8 sm:py-20 lg:px-12"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-[20%] top-[8%] h-[70vw] w-[70vw] rounded-full bg-[#22CF01]/10 blur-[90px] sm:-left-[10%] sm:top-[10%] sm:h-[45vw] sm:w-[45vw] sm:blur-[120px]" />

        <div className="absolute -bottom-[10%] -right-[15%] h-[65vw] w-[65vw] rounded-full bg-[#F77006]/10 blur-[90px] sm:bottom-0 sm:right-0 sm:h-[40vw] sm:w-[40vw] sm:blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-[45vw] w-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFC778]/10 blur-[100px] sm:h-[30vw] sm:w-[30vw] sm:blur-[140px]" />
      </div>

      <LogoInspiredMark />

      <div
        ref={markRef}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[600px] sm:w-[600px]" />

        <div className="absolute left-1/2 top-1/2 h-[195px] w-[195px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[3rem] border border-white/10 sm:h-[420px] sm:w-[420px] sm:rounded-[4rem]" />
      </div>

      {shapes.map((shape, index) => (
        <div
          key={shape.className}
          ref={(element) => {
            shapesRef.current[index] = element;
          }}
          className={`${shape.className} pointer-events-none`}
          aria-hidden="true"
        />
      ))}

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-6xl py-6 text-center sm:py-0"
      >
        <div className="mb-5 flex justify-center sm:mb-8">
          <div className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md sm:px-5 sm:py-2">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FFC778] sm:text-xs sm:text-sm sm:tracking-[0.3em]">
              NESA Lagos presents
            </p>
          </div>
        </div>

        <div className="mb-5 flex justify-center sm:mb-8">
          <img
            src="/assets/econnext-logo.png"
            alt="Econnext Lagos"
            className="h-auto w-[150px] object-contain sm:w-[240px]"
          />
        </div>

        <p className="mx-auto max-w-3xl text-[11px] font-black uppercase tracking-[0.18em] text-[#22CF01] sm:text-base sm:tracking-[0.22em]">
          Lagos Conference 2026
        </p>

        <h1
          id="hero-title"
          className="mx-auto mt-4 max-w-5xl text-[2.85rem] font-black uppercase leading-[0.86] tracking-[-0.045em] sm:mt-5 sm:text-7xl md:text-8xl lg:text-9xl"
        >
          The Future
          <span className="block text-[#FFC778]">Starts Here.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-[1.55] text-white/70 sm:mt-8 sm:text-lg md:text-xl">
          Where Africa&apos;s next generation of economists, innovators,
          entrepreneurs, and leaders connect with the opportunities shaping
          tomorrow.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <a
            href="#register"
            className="group inline-flex min-h-12 w-full max-w-[260px] items-center justify-center rounded-full bg-[#F77006] px-6 py-3.5 text-xs font-black uppercase tracking-[0.1em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#ff861f] sm:w-auto sm:min-w-[190px] sm:max-w-none sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.12em]"
          >
            Register Now

            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="#about"
            className="inline-flex min-h-12 w-full max-w-[260px] items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-xs font-black uppercase tracking-[0.1em] text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10 sm:w-auto sm:min-w-[190px] sm:max-w-none sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.12em]"
          >
            Explore Econnext
          </a>
        </div>

        <div className="mx-auto mt-9 grid max-w-2xl grid-cols-3 border-y border-white/10 py-4 sm:mt-14 sm:py-5">
          <div className="px-2 sm:px-3">
            <p className="text-lg font-black text-[#FFC778] sm:text-3xl">
              2026
            </p>

            <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] text-white/50 sm:text-xs sm:tracking-[0.2em]">
              Conference
            </p>
          </div>

          <div className="border-x border-white/10 px-2 sm:px-3">
            <p className="text-lg font-black text-[#22CF01] sm:text-3xl">
              Lagos
            </p>

            <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] text-white/50 sm:text-xs sm:tracking-[0.2em]">
              Nigeria
            </p>
          </div>

          <div className="px-2 sm:px-3">
            <p className="text-lg font-black text-[#F77006] sm:text-3xl">
              NESA
            </p>

            <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] text-white/50 sm:text-xs sm:tracking-[0.2em]">
              Lagos
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 sm:bottom-6 sm:block"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-[9px] font-black uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="h-10 w-px bg-gradient-to-b from-[#FFC778] to-transparent" />
        </div>
      </div>
    </section>
  );
}