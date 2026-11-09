import { Code2, Database, Layers3, Terminal } from "lucide-react";

export default function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center"
    >
      <div className="absolute inset-[12%] rounded-full bg-violet-600/20 blur-[80px]" />

      <div className="absolute left-[7%] top-[20%] animate-float rounded-2xl border border-violet-400/30 bg-[#1E1838] p-4 shadow-xl">
        <Code2 className="text-violet-400" size={34} />
      </div>

      <div className="absolute right-[6%] top-[12%] animate-float-delayed rounded-2xl border border-cyan-400/30 bg-[#142A3A] p-4 shadow-xl">
        <Database className="text-cyan-400" size={32} />
      </div>

      <div className="absolute bottom-[14%] right-[4%] animate-float rounded-2xl border border-violet-400/30 bg-[#1E1838] p-4 shadow-xl">
        <Layers3 className="text-violet-300" size={32} />
      </div>

      <div className="relative w-[78%] rotate-[-7deg] rounded-2xl border border-violet-400/40 bg-[#171C30] p-3 shadow-[0_30px_100px_rgba(124,58,237,0.35)]">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0D1220]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="ml-auto text-xs text-slate-500">
              portfolio.tsx
            </span>
          </div>

          <div className="space-y-3 px-5 py-8 font-mono text-xs sm:text-sm">
            <p className="text-violet-400">
              const <span className="text-cyan-300">developer</span> = {"{"}
            </p>
            <p className="pl-4 text-slate-300">
              name: <span className="text-emerald-300">'Surafel'</span>,
            </p>
            <p className="pl-4 text-slate-300">
              role: <span className="text-emerald-300">'Full Stack'</span>,
            </p>
            <p className="pl-4 text-slate-300">
              passion: <span className="text-emerald-300">'Building'</span>,
            </p>
            <p className="text-violet-400">{"}"}</p>
            <p className="pt-3 text-slate-500">
              // Let's create something great
            </p>
          </div>
        </div>

        <div className="absolute -bottom-5 left-[12%] right-[12%] h-5 rounded-b-xl border border-violet-400/20 bg-gradient-to-b from-[#34345A] to-[#16182C] shadow-xl" />
      </div>

      <div className="absolute bottom-[8%] left-[6%] flex items-center gap-2 rounded-xl border border-white/10 bg-[#1C2035] px-4 py-3 shadow-xl">
        <Terminal className="text-emerald-400" size={18} />
        <span className="font-mono text-xs text-slate-300">
          npm run build ✓
        </span>
      </div>
    </div>
  );
}
