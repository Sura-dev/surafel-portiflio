import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import HeroVisual from "./hero-visual";
import { PORTFOLIO } from "@/data/portifolio";
import Reveal from "@/components/UI/reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0B0F19] pt-28"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-700/10 blur-[100px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10">
        {/* LEFT CONTENT */}
        <div className="space-y-7">
          {/* DEVELOPER BADGE */}
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {PORTFOLIO.title}
            </div>
          </Reveal>

          {/* MAIN HEADLINE */}
          <div className="space-y-4">
            <Reveal delay={0.2}>
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Surafel Nigussie.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <h2 className="text-2xl font-semibold leading-snug text-slate-200 sm:text-3xl">
                {PORTFOLIO.headline}
              </h2>
            </Reveal>
          </div>

          {/* DESCRIPTION */}
          <Reveal delay={0.4}>
            <p className="max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              {PORTFOLIO.description} Based in {PORTFOLIO.location}, with
              professional experience at iCog Labs.
            </p>
          </Reveal>

          {/* CTA BUTTONS */}
          <Reveal delay={0.5}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-medium text-white transition-all hover:-translate-y-1 hover:bg-violet-500"
              >
                Explore My Experience
                <ArrowRight size={18} />
              </a>

              <a
                href={`mailto:${PORTFOLIO.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 font-medium text-white transition-colors hover:border-violet-400"
              >
                <Mail size={18} />
                Get in Touch
              </a>
            </div>
          </Reveal>

          {/* SOCIAL LINKS */}
          <Reveal delay={0.6}>
            <div className="flex items-center gap-4 pt-3">
              <a
                href={PORTFOLIO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-xl border border-white/10 p-3 text-slate-400 transition-colors hover:border-violet-500/40 hover:text-violet-400"
              >
                <FaGithub size={21} />
              </a>

              <a
                href={PORTFOLIO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-xl border border-white/10 p-3 text-slate-400 transition-colors hover:border-violet-500/40 hover:text-violet-400"
              >
                <FaLinkedinIn size={21} />
              </a>

              <a
                href={`mailto:${PORTFOLIO.email}`}
                aria-label="Send email"
                className="rounded-xl border border-white/10 p-3 text-slate-400 transition-colors hover:border-violet-500/40 hover:text-violet-400"
              >
                <Mail size={21} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* RIGHT HERO VISUAL */}
        <Reveal delay={0.35} y={40} className="w-full">
          <HeroVisual />
        </Reveal>

        {/* SCROLL INDICATOR */}
        <Reveal delay={0.8} className="lg:col-span-2">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-violet-400"
          >
            <ArrowDown size={16} />
            Scroll to explore
          </a>
        </Reveal>
      </div>
    </section>
  );
}
