import { FiArrowDown, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-white/5 bg-[#080b17] px-6 pb-20 pt-28 text-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_48%,rgba(21,111,126,0.28),transparent_42%),linear-gradient(110deg,#0a0b1a_10%,#101b31_48%,#0a2226_72%,#07111a_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 w-[92vw] max-w-4xl -translate-x-1/2 -translate-y-[46%] opacity-40"
      >
        <div className="overflow-hidden rounded-t-2xl border border-cyan-300/25 bg-[#050912]/90 shadow-[0_0_80px_rgba(54,211,235,0.12)]">
          <div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-4">
            <span className="size-1.5 rounded-full bg-cyan-300/50" />
            <span className="size-1.5 rounded-full bg-slate-500/50" />
            <span className="size-1.5 rounded-full bg-slate-500/30" />
            <span className="ml-3 font-mono text-[7px] text-slate-500">
              portfolio.jsx
            </span>
          </div>

          <div className="h-[25rem] space-y-3 px-5 py-8 text-left font-mono text-[9px] leading-5 text-slate-500 sm:px-10 sm:text-[11px] md:h-[29rem]">
            <p className="code-typing-line code-line-1">
              <span className="text-cyan-300">const</span>{" "}
              <span className="text-slate-300">developer</span> = {"{"}
            </p>
            <p className="code-typing-line code-line-2 pl-5">
              name: <span className="text-cyan-200">&quot;Iniyan Lourderaj&quot;</span>,
            </p>
            <p className="code-typing-line code-line-3 pl-5">
              university: <span className="text-cyan-200">&quot;Bucknell&quot;</span>,
            </p>
            <p className="code-typing-line code-line-4 pl-5">
              focus: [<span className="text-cyan-200">&quot;AI&quot;</span>,{" "}
              <span className="text-cyan-200">&quot;Software&quot;</span>,{" "}
              <span className="text-cyan-200">&quot;Design&quot;</span>],
            </p>
            <p className="code-typing-line code-line-5">{"};"}</p>
            <p className="code-typing-line code-line-6 pt-4">
              <span className="text-cyan-300">function</span>{" "}
              <span className="text-slate-300">buildIdeas</span>() {"{"}
            </p>
            <p className="code-typing-line code-line-7 pl-5">
              <span className="text-cyan-300">return</span> ideas.map(createImpact);
            </p>
            <p className="code-typing-line code-line-8">
              {"}"}
              <span className="code-cursor ml-1 inline-block h-3 w-px bg-cyan-300 align-middle" />
            </p>
          </div>
        </div>
        <div className="mx-auto h-3 w-[104%] -translate-x-[2%] rounded-b-xl border border-white/10 bg-gradient-to-b from-slate-700/60 to-slate-900/80" />
        <div className="mx-auto h-1.5 w-1/3 rounded-b-full bg-slate-800/80" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(7,11,20,0.25),rgba(7,11,20,0.72)_70%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        <p className="font-general text-[10px] font-semibold uppercase tracking-[0.34em] text-cyan-300 md:text-xs">
          Computer Science / Bucknell University
        </p>

        <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-slate-100 sm:text-7xl md:text-[6rem]">
          Iniyan Lourderaj
        </h1>

        <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg">
          A creative technologist building thoughtful digital products at the
          intersection of AI, software engineering, and human-centered design.
        </p>

        <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 rounded-full border border-cyan-300/70 px-8 py-3.5 font-general text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-100 shadow-[inset_0_0_0_1px_rgba(54,211,235,0.18),0_0_24px_rgba(54,211,235,0.08)] transition-colors hover:bg-cyan-300 hover:text-[#070b14]"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 font-general text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-cyan-300"
          >
            Get in touch
            <FiArrowRight className="text-lg" />
          </a>
        </div>
      </div>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-general text-[8px] uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-cyan-300"
      >
        Scroll
        <FiArrowDown className="text-base" />
      </a>
    </section>
  );
};

export default Hero;
