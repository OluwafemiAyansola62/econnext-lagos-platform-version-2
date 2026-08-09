// src/components/Loader/Loader.jsx

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete,
      });

      timeline
        .fromTo(
          logoRef.current,
          {
            opacity: 0,
            scale: 0.75,
            y: 20,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          }
        )
        .fromTo(
          lineRef.current,
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.4"
        )
        .fromTo(
          textRef.current,
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to({}, { duration: 0.7 })
        .to(loaderRef.current, {
          opacity: 0,
          duration: 0.9,
          ease: "power2.inOut",
        });
    }, loaderRef);

    return () => context.revert();
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#C8F3D9]"
    >
      <div className="flex w-full max-w-xl flex-col items-center px-8 text-center">
        <div
          ref={logoRef}
          className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-white shadow-xl"
        >
          <img
            src="/assets/econnext-logo.png"
            alt="Econnext Lagos"
            className="h-full w-full object-contain p-5"
          />
        </div>

        <div
          ref={lineRef}
          className="mt-8 h-[3px] w-32 bg-[#00863D]"
        />

        <div ref={textRef} className="mt-6">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#00863D]">
            Nigerian Economics Students&apos; Association
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-[#211A3B] sm:text-5xl">
            NESA Lagos
          </h1>

          <p className="mt-3 text-xs font-bold uppercase tracking-[0.3em] text-[#211A3B]/50">
            Presents
          </p>
        </div>
      </div>
    </div>
  );
}