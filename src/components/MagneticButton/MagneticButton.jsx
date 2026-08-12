// src/components/MagneticButton/MagneticButton.jsx

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticButton({
  children,
  href = "#",
  className = "",
}) {
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const button = buttonRef.current;

    if (!button) {
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
      const moveX = gsap.quickTo(button, "x", {
        duration: 0.35,
        ease: "power3.out",
      });

      const moveY = gsap.quickTo(button, "y", {
        duration: 0.35,
        ease: "power3.out",
      });

      const handleMouseMove = (event) => {
        const rect = button.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        moveX(x * 12);
        moveY(y * 12);
      };

      const handleMouseLeave = () => {
        moveX(0);
        moveY(0);
      };

      button.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        button.removeEventListener("mousemove", handleMouseMove);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, button);

    return () => ctx.revert();
  }, []);

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`inline-flex transform-gpu ${className}`}
    >
      {children}
    </a>
  );
}