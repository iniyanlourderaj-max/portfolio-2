import { FiArrowDown, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center border-b-2 border-neutral-950 bg-neutral-50 px-6 pb-16 pt-28"
    >
      <div className="hero-image-backdrop" aria-hidden="true">
        <img src="/img/starwars.png" alt="" />
      </div>

      <div className="section-shell hero-layout relative z-10 grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="hero-copy">
          <p className="section-kicker text-neutral-950">
            Computer Science / Bucknell University
          </p>

          <h1 className="hero-title mt-5 font-display uppercase leading-[0.9] text-neutral-950">
            Iniyan Lourderaj
          </h1>

          <p className="mt-8 max-w-2xl border-l-4 border-red-500 pl-5 text-lg leading-8 text-neutral-700 md:text-xl">
            A creative technologist building thoughtful digital products at the
            intersection of AI, software engineering, and human-centered design.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="cyan-button">
              View projects
            </a>
            <a href="#contact" className="ghost-button">
              Get in touch
              <FiArrowRight />
            </a>
          </div>
        </div>

        <aside className="hero-info-card w-full border-2 border-neutral-950 bg-neutral-100 p-6 lg:p-8">
          <p className="section-kicker">Portfolio.jsx</p>
          <div className="mt-8 space-y-4 font-mono text-sm leading-7 text-neutral-700">
            <p>
              <span className="font-bold text-neutral-950">name:</span>{" "}
              &quot;Iniyan Lourderaj&quot;
            </p>
            <p>
              <span className="font-bold text-neutral-950">university:</span>{" "}
              &quot;Bucknell&quot;
            </p>
            <p>
              <span className="font-bold text-neutral-950">focus:</span> AI /
              Software / Design
            </p>
          </div>
          <div className="mt-10 border-t-2 border-neutral-950 pt-5">
            <p className="font-general text-xs font-bold uppercase tracking-[0.12em] text-neutral-950">
              Building ideas with impact
            </p>
          </div>
        </aside>
      </div>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 font-general text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-500 transition-colors hover:text-red-500"
      >
        Scroll
        <FiArrowDown />
      </a>
    </section>
  );
};

export default Hero;
