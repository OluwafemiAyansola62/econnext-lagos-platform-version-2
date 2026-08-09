// src/components/Navbar/Navbar.jsx

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#focus" },
  { label: "Why Attend", href: "#why" },
  { label: "NESA", href: "#nesa" },
  { label: "Speakers", href: "#speakers" },
  { label: "Team", href: "#team" },
  { label: "Volunteers", href: "#volunteers" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto w-full border-b border-black/10 bg-[#d0f4df]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          {/* BRAND */}
          <a
            href="#hero"
            onClick={closeMenu}
            className="flex items-center gap-3"
            aria-label="Econnext Lagos 2026 home"
          >
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white">
              <img
                src="/assets/econnext-logo.png"
                alt="Econnext Lagos logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="leading-none">
              <p className="text-lg font-black tracking-tight text-black">
                ECONNEXT
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
                Lagos 2026
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-black transition-opacity hover:opacity-50"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#register"
              className="rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              Register
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-xl text-white lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <div className="border-t border-black/10 bg-[#d0f4df] px-5 pb-6 pt-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-black transition-colors hover:bg-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#register"
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-black px-4 py-4 text-center font-bold text-white"
              >
                Register for Econnext 2026
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}