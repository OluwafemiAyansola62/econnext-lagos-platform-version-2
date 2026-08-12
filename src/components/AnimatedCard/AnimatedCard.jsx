// src/components/AnimatedCard/AnimatedCard.jsx

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedCard({
  children,
  className = "",
  intensity = 1,
}) {
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const card = cardRef.current;

    if (!card) {
      return undefined;
    }

    const supportsHover = window.matchMedia("(hover: hover)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!supportsHover || prefersReducedMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const moveX = gsap.quickTo(card, "x", {
        duration: 0.45,
        ease: "power3.out",
      });

      const moveY = gsap.quickTo(card, "y", {
        duration: 0.45,
        ease: "power3.out",
      });

      const rotateX = gsap.quickTo(card, "rotationX", {
        duration: 0.5,
        ease: "power3.out",
      });

      const rotateY = gsap.quickTo(card, "rotationY", {
        duration: 0.5,
        ease: "power3.out",
      });

      const handleMouseMove = (event) => {
        const rect = card.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        moveX(x * 5 * intensity);
        moveY(y * 5 * intensity);
        rotateX(y * -5 * intensity);
        rotateY(x * 5 * intensity);
      };

      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.025,
          duration: 0.35,
          ease: "power3.out",
        });
      };

      const handleMouseLeave = () => {
        moveX(0);
        moveY(0);
        rotateX(0);
        rotateY(0);

        gsap.to(card, {
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, card);

    return () => ctx.revert();
  }, [intensity]);

  return (
    <div
      ref={cardRef}
      className={`transform-gpu [transform-style:preserve-3d] ${className}`}
    >
      {children}
    </div>
  );
}