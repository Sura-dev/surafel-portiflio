import { Code2, Database, GitBranch, Server } from "lucide-react";
import Reveal from "@/components/UI/reveal";

const SKILL_GROUPS = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React", "Remix"],
  },
  {
    title: "Backend & Programming",
    icon: Server,
    skills: ["PHP", "Python", "Java", "C++", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "SQL Server"],
  },
  {
    title: "Tools & Practices",
    icon: GitBranch,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Problem Solving",
      "Data Structures",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 overflow-hidden bg-[#0B0F19] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <div className="mb-14 text-center">
          <Reveal delay={0.1}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
              My Toolkit
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Skills & <span className="text-violet-400">Technologies.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              Technologies and development practices I've used in academic,
              independent, and professional projects.
            </p>
          </Reveal>
        </div>

        {/* SKILL GROUPS */}
        <div className="grid gap-6 md:grid-cols-2">
          {SKILL_GROUPS.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <Reveal
                key={group.title}
                delay={Math.min(groupIndex * 0.12, 0.36)}
                y={35}
                className="h-full"
              >
                <div
                  className="
                    group
                    h-full
                    rounded-2xl
                    border border-white/10
                    bg-[#151B2B]
                    p-7
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-violet-500/40
                    hover:shadow-[0_12px_40px_rgba(139,92,246,0.08)]
                    motion-reduce:transform-none
                  "
                >
                  {/* GROUP HEADER */}
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className="
                        rounded-xl
                        bg-violet-500/10
                        p-3
                        text-violet-400
                        transition-transform duration-300
                        group-hover:scale-110
                        motion-reduce:transform-none
                      "
                    >
                      <Icon size={25} />
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>

                  {/* TECHNOLOGY BADGES */}
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill, skillIndex) => (
                      <Reveal
                        key={skill}
                        delay={0.1 + skillIndex * 0.06}
                        y={12}
                      >
                        <span
                          className="
                            inline-block
                            rounded-lg
                            border border-white/10
                            bg-[#20283A]
                            px-4 py-2
                            text-sm
                            text-slate-300
                            transition-all duration-300
                            hover:-translate-y-0.5
                            hover:border-violet-400
                            hover:bg-violet-500/10
                            hover:text-white
                            motion-reduce:transform-none
                          "
                        >
                          {skill}
                        </span>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
