"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { PORTFOLIO } from "@/data/portifolio";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) =>
        document.getElementById(link.href.slice(1)),
      ).filter((section): section is HTMLElement => section !== null);

      let currentSection = "home";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 160) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "border-b border-white/10 bg-[#0B0F19]/95 shadow-lg backdrop-blur-xl"
          : "bg-[#0B0F19]/70 backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"
      >
        {/* LOGO */}
        <Link
          href="/#home"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight text-white"
        >
          {PORTFOLIO.name.split(" ")[0]}
          <span className="text-violet-400">.</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <Link
                key={link.href}
                href={`/${link.href}`}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-violet-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}

                {isActive && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-violet-500" />
                )}
              </Link>
            );
          })}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((previous) => !previous)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white transition-colors hover:bg-white/10 md:hidden"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#0B0F19] md:hidden"
        >
          <div className="flex max-h-[calc(100dvh-5rem)] flex-col gap-2 overflow-y-auto px-6 py-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);

              return (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={closeMenu}
                  aria-current={isActive ? "location" : undefined}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-violet-500/10 text-violet-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
