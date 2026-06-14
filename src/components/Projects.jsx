import { FiArrowUpRight } from "react-icons/fi";

const metrics = [
  { value: "AI", label: "Career guidance" },
  { value: "3+", label: "Core tools" },
  { value: "100%", label: "Responsive" },
  { value: "01", label: "Product vision" },
];

const Projects = () => {
  return (
    <section id="projects" className="border-b border-white/10 bg-[#090d17] py-24 md:py-32">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">01 / Selected work</p>
            <h2 className="section-title mt-4">Building products with purpose.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-500">
            A focused selection of products and client work shaped by research,
            practical engineering, and a bias toward shipping.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="panel group relative min-h-[34rem] overflow-hidden p-7 md:p-10">
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between">
                <p className="section-kicker">Featured / 2026</p>
                <span className="border border-cyan-300/20 px-3 py-1 font-general text-[9px] uppercase tracking-[0.2em] text-cyan-300">
                  Coming soon
                </span>
              </div>

              <div className="mt-12 max-w-lg">
                <h3 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
                  JobQuest
                </h3>
                <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
                  An AI-powered career platform for stronger resumes, realistic
                  interview practice, and more confident job searches.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["React", "AI", "Voice", "Product Design"].map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/10 px-3 py-1.5 font-general text-[9px] uppercase tracking-[0.16em] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto grid items-end gap-8 pt-12 sm:grid-cols-2">
                <div className="overflow-hidden border border-white/10 bg-[#070b14] p-4">
                  <img
                    src="/img/JOBQUEST.jpg"
                    alt="JobQuest interface"
                    className="w-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <img
                  src="/img/jobquest_phone_clean.png"
                  alt="JobQuest mobile interface"
                  className="mx-auto max-h-64 object-contain"
                />
              </div>
            </div>
          </article>

          <article className="panel flex min-h-[34rem] flex-col p-7 md:p-10">
            <p className="section-kicker">Freelance / 2026</p>
            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.035em] text-white">
              Web experiences for real clients.
            </h3>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Responsive, SEO-minded websites designed to communicate clearly,
              perform quickly, and turn visits into meaningful action.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href="https://iniyanlourderaj.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-white/10 px-4 py-4 text-sm text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-cyan-300"
              >
                Iniyan Lourderaj
                <FiArrowUpRight />
              </a>
              <a
                href="https://www.lewisburg-bjj.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-white/10 px-4 py-4 text-sm text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-cyan-300"
              >
                Lewisburg BJJ
                <FiArrowUpRight />
              </a>
            </div>

            <div className="mt-auto border-t border-white/10 pt-6">
              <p className="font-general text-[10px] uppercase tracking-[0.18em] text-slate-500">
                React / Vercel / Hostinger / SEO
              </p>
            </div>
          </article>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metrics.map(({ value, label }) => (
            <div key={label} className="panel p-6">
              <p className="text-3xl font-semibold tracking-[-0.04em] text-cyan-300 md:text-4xl">
                {value}
              </p>
              <p className="mt-2 font-general text-[9px] uppercase tracking-[0.18em] text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
