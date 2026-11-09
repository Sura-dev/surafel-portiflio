import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PORTFOLIO } from "@/data/portifolio";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080C15] px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* BRAND */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white"
            >
              Surafel<span className="text-violet-400">.</span>
            </Link>

            <p className="mt-2 text-sm text-slate-400">
              Building digital experiences that matter.
            </p>
          </div>

          {/* NAVIGATION */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={`/${link.href}`}
                className="text-sm text-slate-400 transition-colors hover:text-violet-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-xl border border-white/10 p-3 text-slate-400 transition-colors hover:border-violet-500/40 hover:text-violet-400"
            >
              <FaGithub size={19} />
            </a>

            <a
              href={PORTFOLIO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border border-white/10 p-3 text-slate-400 transition-colors hover:border-violet-500/40 hover:text-violet-400"
            >
              <FaLinkedinIn size={19} />
            </a>

            <Link
              href="/#home"
              aria-label="Back to top"
              className="rounded-xl bg-violet-600 p-3 text-white transition-colors hover:bg-violet-500"
            >
              <ArrowUp size={19} />
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center text-sm text-slate-500 md:flex-row">
          <p>© 2026 {PORTFOLIO.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed & Built with
            <Heart size={15} className="fill-violet-400 text-violet-400" />
            using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
