import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
} from "lucide-react";

import Reveal from "@/components/UI/reveal";

const INFO_CARDS = [
  {
    icon: <GraduationCap size={26} />,
    title: "Education",
    description: "BSc Information Technology, Hawassa University",
  },
  {
    icon: <BriefcaseBusiness size={26} />,
    title: "Experience",
    description: "Software Engineer Intern at iCog Labs",
  },
  {
    icon: <MapPin size={26} />,
    title: "Location",
    description: "Addis Ababa, Ethiopia",
  },
  {
    icon: <ArrowUpRight size={26} />,
    title: "Focus",
    description: "Full Stack Web Development",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 overflow-hidden bg-[#0B0F19] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <div className="mb-12">
          <Reveal delay={0.1}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
              About Me
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Beyond the <span className="text-violet-400">code.</span>
            </h2>
          </Reveal>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT: ABOUT DESCRIPTION */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <p className="text-lg leading-8 text-slate-300">
                I'm Surafel Nigussie, a Full Stack Developer based in Addis
                Ababa, Ethiopia, with a background in Information Technology
                from Hawassa University.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="leading-8 text-slate-400">
                I enjoy developing responsive applications, working with
                frontend and backend technologies, and solving real-world
                software challenges.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="leading-8 text-slate-400">
                At iCog Labs, I contributed to application development, software
                testing, and migrating React applications to Remix for
                graph-based statistical visualization projects.
              </p>
            </Reveal>

            {/* CONTACT LINK */}
            <Reveal delay={0.4}>
              <a
                href="mailto:nigussiesura50@gmail.com"
                className="group inline-flex items-center gap-2 font-medium text-violet-400 transition-colors hover:text-violet-300"
              >
                Let's work together
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          </div>

          {/* RIGHT: INFORMATION CARDS */}
          <div className="grid gap-4 sm:grid-cols-2">
            {INFO_CARDS.map((card, index) => (
              <Reveal
                key={card.title}
                delay={0.1 + index * 0.12}
                y={35}
                className="h-full"
              >
                <InfoCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div
      className="
        group
        h-full
        rounded-2xl
        border border-white/10
        bg-[#151B2B]
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-violet-500/40
        hover:shadow-[0_12px_40px_rgba(139,92,246,0.08)]
        motion-reduce:transform-none
      "
    >
      {/* ICON */}
      <div
        className="
          mb-5
          text-violet-400
          transition-transform duration-300
          group-hover:scale-110
          motion-reduce:transform-none
        "
      >
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="mb-2 font-semibold text-white">{title}</h3>

      {/* DESCRIPTION */}
      <p className="text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}
