const highlights = [
  {
    type: "Project",
    date: "2026",
    title: "JobQuest",
    description:
      "An AI-powered career platform that helps job seekers improve their resumes, practice interviews, and discover better opportunities.",
    tags: ["React", "AI", "Product Design"],
  },
  {
    type: "Freelance",
    date: "2026",
    title: "WEB DEVELOPMENT",
    description:
      "Designed and developed a modern, SEO-optimized website for clients, focusing on performance, responsive design, and lead generation.",
    tags: ["React", "Vercel", "Hostinger", "SEO"],
    links: [
      {
        label: "Iniyan Lourderaj",
        url: "https://iniyanlourderaj.com",
      },
      {
        label: "Lewisburg BJJ",
        url: "https://www.lewisburg-bjj.com/",
      },
    ],
  },
  {
    type: "Experience",
    date: "2026",
    title: "Research at BUCKNELL",
    description:
      "Performed atmospheric data analysis using low-cost air quality sensors to evaluate AQI trends in the Shamokin region, supporting environmental research at Bucknell University under Professor Douglas Collins.",
    tags: ["Research", "Problem Solving", "Teamwork", "Matlab", "Data Analysis"],
  },
  {
    type: "Experience",
    date: "2025",
    title: "Research at NISER",
    description:
      "Explored academic research and strengthened my ability to investigate complex problems, analyze results, and communicate technical ideas.",
    tags: ["Research", "Problem Solving", "Teamwork"],
  },

  {
    type: "Leadership",
    date: "2024",
    title: "Student President",
    description:
      "Led student initiatives, represented my peers, and coordinated events while developing confidence in communication and collaboration.",
    tags: ["Leadership", "Communication", "Community"],
  },
];

const FeatureCard = ({ type, date, title, description, tags, links }) => (
  <article
    tabIndex={0}
    className="group relative min-h-[25rem] w-[85vw] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-7 outline-none transition-all duration-500 ease-out hover:-translate-y-3 hover:border-violet-300 hover:shadow-[0_22px_70px_-20px_rgba(87,36,255,0.85)] focus-visible:-translate-y-3 focus-visible:border-violet-300 focus-visible:shadow-[0_22px_70px_-20px_rgba(87,36,255,0.85)] sm:w-[70vw] md:min-h-[28rem] md:w-auto md:snap-none"
  >
    <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-violet-300/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 md:opacity-0" />

    <div className="relative z-10 flex h-full flex-col">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-violet-300/50 bg-violet-300/10 px-3 py-1 font-general text-[10px] uppercase tracking-[0.2em] text-violet-300">
          {type}
        </span>
        <span className="font-circular-web text-sm text-blue-50/50">{date}</span>
      </div>

      <div className="mt-auto pt-16">
        <h3 className="font-zentry text-4xl font-black uppercase text-blue-50 md:text-5xl">
          {title}
        </h3>
        <p className="mt-5 font-circular-web text-sm leading-6 text-blue-50/60 md:text-base">
          {description}
        </p>

        {links?.length > 0 && (
          <div className="mt-6 flex flex-col gap-2">
            {links.map(({ label, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-violet-300/40 bg-violet-300/10 px-4 py-2.5 font-general text-xs uppercase tracking-wider text-blue-50 transition-colors hover:border-violet-300 hover:bg-violet-300/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                View {label}
              </a>
            ))}
          </div>
        )}

        <div className="mt-7 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/[0.07] px-3 py-1.5 text-xs text-blue-50/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </article>
);

const Features = () => {
  return (
    <section id="experience" className="overflow-hidden bg-black py-24 text-blue-50 md:py-32">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="font-general text-xs uppercase tracking-[0.25em] text-violet-300">
            Experience and projects
          </p>
          <h2 className="mt-4 font-zentry text-5xl font-black uppercase sm:text-6xl md:text-7xl">
            Things I have built and led
          </h2>
          <p className="mt-6 max-w-xl font-circular-web text-base leading-7 text-blue-50/50">
            A selection of projects, research, and leadership experiences that
            have shaped how I learn, build, and solve problems.
          </p>
        </div>

        <div className="-mx-6 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-12 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {highlights.map((highlight) => (
            <FeatureCard key={highlight.title} {...highlight} />
          ))}
        </div>

        <p className="mt-1 text-center font-general text-[10px] uppercase tracking-[0.2em] text-blue-50/35 md:hidden">
          Swipe to explore
        </p>
      </div>
    </section>
  );
};

export default Features;
