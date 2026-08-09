// src/components/Hero/Hero.jsx

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const shapes = [
  {
    className:
      "hero-shape hero-shape-ring absolute left-[4%] top-[18%] h-28 w-28 rounded-full border-[18px] border-[#22CF01] sm:h-40 sm:w-40 sm:border-[24px]",
    depth: 1.2,
  },
  {
    className:
      "hero-shape hero-shape-orange absolute right-[7%] top-[13%] h-24 w-24 rotate-12 rounded-[2rem] bg-[#F77006] sm:h-36 sm:w-36",
    depth: -1,
  },
  {
    className:
      "hero-shape hero-shape-yellow absolute bottom-[15%] left-[7%] h-20 w-36 -rotate-12 rounded-[1.5rem] bg-[#FFC778] sm:h-28 sm:w-52",
    depth: 0.8,
  },
  {
    className:
      "hero-shape hero-shape-green absolute bottom-[10%] right-[5%] h-28 w-28 rotate-45 rounded-[2.5rem] bg-[#22CF01] sm:h-40 sm:w-40",
    depth: -0.7,
  },
];

function LogoInspiredMark() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[3rem] border-[30px] border-[#22CF01] sm:border-[45px]" />

      <div className="absolute left-1/2 top-1/2 h-[32%] w-[32%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F77006]" />
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

    const context = gsap.context(() => {
      const shapeElements = shapesRef.current.filter(Boolean);

      gsap.set(shapeElements, {
        opacity: 0,
        scale: 0.7,
        y: 50,
      });

      gsap.set(contentRef.current, {
        opacity: 0,
        y: 45,
      });

      gsap.set(markRef.current, {
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
        .to(markRef.current, {
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
          "-=0.9"
        )
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.6"
        );

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

      gsap.to(markRef.current, {
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

      if (window.innerWidth >= 768) {
        const shapeQuickTos = shapeElements.map((shape, index) => {
          const depth = shapes[index]?.depth ?? 1;

          return {
            x: gsap.quickTo(shape, "xPercent", {
              duration: 0.7,
              ease: "power3.out",
            }),
            y: gsap.quickTo(shape, "yPercent", {
              duration: 0.7,
              ease: "power3.out",
            }),
            depth,
          };
        });

        const markX = gsap.quickTo(markRef.current, "xPercent", {
          duration: 0.9,
          ease: "power3.out",
        });

        const markY = gsap.quickTo(markRef.current, "yPercent", {
          duration: 0.9,
          ease: "power3.out",
        });

        const handleMouseMove = (event) => {
          const rect = hero.getBoundingClientRect();

          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;

          shapeQuickTos.forEach(({ x: moveX, y: moveY, depth }) => {
            moveX(x * 8 * depth);
            moveY(y * 8 * depth);
          });

          markX(x * -2);
          markY(y * -2);
        };

        const handleMouseLeave = () => {
          shapeQuickTos.forEach(({ x: moveX, y: moveY }) => {
            moveX(0);
            moveY(0);
          });

          markX(0);
          markY(0);
        };

        hero.addEventListener("mousemove", handleMouseMove);
        hero.addEventListener("mouseleave", handleMouseLeave);

        context.add(() => {
          hero.removeEventListener("mousemove", handleMouseMove);
          hero.removeEventListener("mouseleave", handleMouseLeave);
        });
      }
    }, hero);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-[#211A3B] px-6 py-20 text-white sm:px-8 lg:px-12"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-[10%] top-[10%] h-[45vw] w-[45vw] rounded-full bg-[#22CF01]/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[40vw] w-[40vw] rounded-full bg-[#F77006]/10 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-[30vw] w-[30vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFC778]/10 blur-[140px]" />
      </div>

      <LogoInspiredMark />

      <div
        ref={markRef}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[600px] sm:w-[600px]" />

        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[4rem] border border-white/10 sm:h-[420px] sm:w-[420px]" />
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
        className="relative z-10 mx-auto w-full max-w-6xl text-center"
      >
        <div className="mb-8 flex justify-center">
          <div className="rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FFC778] sm:text-sm">
              NESA Lagos presents
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-center">
          <img
            src="/assets/econnext-logo.png"
            alt="Econnext Lagos"
            className="h-auto w-[190px] object-contain sm:w-[240px]"
          />
        </div>

        <p className="mx-auto max-w-3xl text-sm font-black uppercase tracking-[0.22em] text-[#22CF01] sm:text-base">
          Lagos Conference 2026
        </p>

        <h1
          id="hero-title"
          className="mx-auto mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-9xl"
        >
          The Future
          <span className="block text-[#FFC778]">Starts Here.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
          Where Africa&apos;s next generation of economists, innovators,
          entrepreneurs, and leaders connect with the opportunities shaping
          tomorrow.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#register"
            className="group inline-flex min-w-[190px] items-center justify-center rounded-full bg-[#F77006] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#ff861f]"
          >
            Register Now
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="#about"
            className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10"
          >
            Explore Econnext
          </a>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 border-y border-white/10 py-5">
          <div className="px-3">
            <p className="text-xl font-black text-[#FFC778] sm:text-3xl">
              2026
            </p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 sm:text-xs">
              Conference
            </p>
          </div>

          <div className="border-x border-white/10 px-3">
            <p className="text-xl font-black text-[#22CF01] sm:text-3xl">
              Lagos
            </p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 sm:text-xs">
              Nigeria
            </p>
          </div>

          <div className="px-3">
            <p className="text-xl font-black text-[#F77006] sm:text-3xl">
              NESA
            </p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 sm:text-xs">
              Lagos
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
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