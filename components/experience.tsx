import { BriefcaseBusiness } from "lucide-react";
import Reveal from "@/components/UI/reveal";

const EXPERIENCES = [
  {
    role: "Software Engineer Intern",
    company: "iCog Labs",
    period: "June 2025 – Present",
    location: "Addis Ababa, Ethiopia",
    highlights: [
      "Contributed to developing and testing software applications.",
      "Worked on migrating React.js projects to Remix.js.",
      "Collaborated with multidisciplinary teams to improve application functionality and user experience.",
      "Supported applications involving graph-based statistical data visualization.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Self-Employed",
    period: "January 2024 – June 2025",
    location: "Remote / Independent",
    highlights: [
      "Built small-scale full stack web applications.",
      "Developed responsive interfaces and integrated RESTful APIs.",
      "Implemented authentication and authorization functionality.",
      "Collaborated with peers on university software projects.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-[#0E1422] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-5xl">
        {/* SECTION HEADING */}
        <div className="mb-14">
          <Reveal delay={0.1}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
              Career Journey
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Professional <span className="text-violet-400">Experience.</span>
            </h2>
          </Reveal>
        </div>

        {/* EXPERIENCE TIMELINE */}
        <div className="relative border-l border-violet-500/30 pl-8">
          {EXPERIENCES.map((experience, index) => (
            <div
              key={`${experience.company}-${experience.role}`}
              className="relative mb-12 last:mb-0"
            >
              {/* TIMELINE DOT */}
              <span
                aria-hidden="true"
                className="absolute -left-[39px] top-6 h-4 w-4 rounded-full border-4 border-[#0E1422] bg-violet-500"
              />

              {/* EXPERIENCE CARD */}
              <Reveal delay={Math.min(index * 0.15, 0.3)} y={35}>
                <div
                  className="
                    group
                    rounded-2xl
                    border border-white/10
                    bg-[#151B2B]
                    p-6
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-violet-500/40
                    hover:shadow-[0_12px_40px_rgba(139,92,246,0.08)]
                    motion-reduce:transform-none
                    md:p-8
                  "
                >
                  {/* ROLE AND PERIOD */}
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-violet-400">
                        {experience.company}
                      </p>
                    </div>

                    <span className="rounded-full bg-violet-500/10 px-4 py-2 text-xs text-violet-300">
                      {experience.period}
                    </span>
                  </div>

                  {/* LOCATION */}
                  <p className="mb-5 flex items-center gap-2 text-sm text-slate-500">
                    <BriefcaseBusiness size={15} />
                    {experience.location}
                  </p>

                  {/* RESPONSIBILITIES */}
                  <ul className="space-y-3">
                    {experience.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-7 text-slate-300"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
