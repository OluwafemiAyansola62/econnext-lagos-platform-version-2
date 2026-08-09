// src/components/ScrollReveal/ScrollReveal.jsx

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.9,
  distance = 60,
  stagger = 0,
  once = true,
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const element = elementRef.current;

      if (!element) {
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(element, {
          clearProps: "all",
        });

        return;
      }

      const directions = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
        none: { x: 0, y: 0 },
      };

      const initialPosition = directions[direction] || directions.up;

      gsap.set(element, {
        opacity: 0,
        ...initialPosition,
      });

      gsap.to(element, {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 82%",
          once,
          toggleActions: once
            ? "play none none none"
            : "play reverse play reverse",
        },
      });
    }, elementRef);

    return () => context.revert();
  }, [delay, direction, distance, duration, once, stagger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}