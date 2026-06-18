import HeroHelmet from "./HeroHelmet.jsx";

const experiences = [
  {
    number: "01",
    date: "2026",
    title: "JobQuest Founder and Developer",
    description:
      "Design and develop an AI-powered career platform for resume improvement, interview practice, and more effective job discovery.",
    tags: "React / AI / Product Design",
  },
  {
    number: "02",
    date: "2026",
    title: "Web Developer",
    description:
      "Design and build responsive, SEO-focused websites for clients",
    tags: "React / Vercel / Hostinger / SEO",
  },
  {
    number: "03",
    date: "2026",
    title: "Bucknell Atmospheric Research",
    description:
      "Analyzed air-quality sensor data and AQI trends in the Shamokin region under Professor Douglas Collins.",
    tags: "MATLAB / Data Analysis / Research",
  },
  {
    number: "04",
    date: "2025 - Present",
    title: "Rooke Chapel Student Manager",
    description:
      "Support Rooke Chapel operations, campus events, and Christian community work while coordinating with staff and student teams.",
    tags: "Leadership / Operations / Community",
  },
  {
    number: "05",
    date: "2023",
    title: "Mathematics Research Intern at NISER",
    description:
      "Participated in a mathematics research internship at NISER under Professor Brundaban Sahu.",
    tags: "Mathematics / Research / Problem Solving",
  },
];

const Features = () => {
  return (
    <section id="experience" className="relative overflow-hidden border-b-2 border-neutral-950 bg-neutral-100 py-24 md:py-32">
      <HeroHelmet />
      <div className="section-shell relative z-10">
        <div className="max-w-3xl">
          <p className="section-kicker">02 / Experience</p>
          <h2 className="section-title mt-5">Learning by building and leading.</h2>
        </div>

        <div className="mt-14 border-t-2 border-neutral-950">
          {experiences.map(({ number, date, title, description, tags }) => (
            <article
              key={title}
              className="group grid gap-5 border-b-2 border-neutral-300 py-8 transition-colors hover:bg-neutral-50 md:grid-cols-[4rem_0.7fr_1.3fr] md:px-4"
            >
              <span className="font-mono text-sm font-bold text-neutral-950">
                {number}
              </span>
              <div>
                <p className="font-general text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-500">
                  {date}
                </p>
                <h3 className="mt-3 text-xl font-extrabold text-neutral-950 md:text-2xl">
                  {title}
                </h3>
              </div>
              <div>
                <p className="max-w-xl text-sm leading-7 text-neutral-600">
                  {description}
                </p>
                <p className="mt-4 font-general text-[11px] font-bold uppercase tracking-[0.08em] text-neutral-950">
                  {tags}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
