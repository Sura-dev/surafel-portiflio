import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PORTFOLIO } from "@/data/portifolio";
import Reveal from "@/components/UI/reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 overflow-hidden bg-[#0B0F19] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal delay={0.1}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
              Get In Touch
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Let's Build Something{" "}
              <span className="text-violet-400">Great.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-5 leading-8 text-slate-400">
              Have a project in mind, an opportunity to discuss, or just want to
              say hello? I'd love to hear from you.
            </p>
          </Reveal>
        </div>

        {/* CONTACT CONTENT */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* CONTACT INFORMATION CARD */}
          <Reveal delay={0.1} className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-[#151B2B] p-7 transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_12px_40px_rgba(139,92,246,0.08)] md:p-9">
              <h3 className="mb-7 text-xl font-semibold text-white">
                Contact Information
              </h3>

              <div className="space-y-7">
                {/* EMAIL */}
                <a
                  href={`mailto:${PORTFOLIO.email}`}
                  className="group flex items-start gap-4"
                >
                  <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                    <Mail size={21} />
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 text-sm text-slate-400">Email</p>

                    <p className="break-all text-sm font-medium text-white transition-colors group-hover:text-violet-400">
                      {PORTFOLIO.email}
                    </p>
                  </div>
                </a>

                {/* LOCATION */}
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <p className="mb-1 text-sm text-slate-400">Location</p>

                    <p className="text-sm font-medium text-white">
                      {PORTFOLIO.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* SOCIAL LINKS CARD */}
          <Reveal delay={0.2} className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-[#151B2B] p-7 transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_12px_40px_rgba(139,92,246,0.08)] md:p-9">
              <h3 className="mb-5 text-xl font-semibold text-white">
                Find Me Online
              </h3>

              <div className="space-y-3">
                {/* GITHUB */}
                <a
                  href={PORTFOLIO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/10 p-4 text-slate-300 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/5 hover:text-violet-400"
                >
                  <span className="flex items-center gap-3">
                    <FaGithub size={21} />
                    GitHub
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none"
                  />
                </a>

                {/* LINKEDIN */}
                <a
                  href={PORTFOLIO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/10 p-4 text-slate-300 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/5 hover:text-violet-400"
                >
                  <span className="flex items-center gap-3">
                    <FaLinkedinIn size={21} />
                    LinkedIn
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
