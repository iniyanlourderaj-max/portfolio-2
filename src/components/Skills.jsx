import {
  SiJavascript,
  SiReact,
  SiPython,
  SiTailwindcss,
  SiGit,
  SiVercel,
  SiFigma,
  SiFlutter,
  SiUnity,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";
import { FiBarChart2 } from "react-icons/fi";

const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "MATLAB", icon: <FiBarChart2 /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Unity", icon: <SiUnity /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
];

const SkillCard = ({ name, icon }) => (
  <div className="panel group flex min-h-36 w-36 shrink-0 flex-col items-center justify-center gap-4 p-4 text-center transition-colors hover:border-cyan-300/40 sm:w-40">
    <span className="text-2xl text-cyan-300 transition-transform group-hover:-translate-y-1">
      {icon}
    </span>
    <span className="font-general text-[9px] uppercase tracking-[0.16em] text-slate-400">
      {name}
    </span>
  </div>
);

const timeline = [
  {
    date: "2026",
    title: "Bucknell Atmospheric Research",
    text: "Began analyzing air-quality sensor data and AQI trends in the Shamokin region under Professor Douglas Collins.",
  },
  {
    date: "2026",
    title: "Web Developer",
    text: "Became the official web developer for Lewisburg Brazilian Jiu-Jitsu Gym.",
  },
  {
    date: "2025",
    title: "Bucknell University and Rooke Chapel",
    text: "Joined Bucknell University and began working at Rooke Chapel as a student manager supporting Christian community work.",
  },
  {
    date: "2024",
    title: "School President",
    text: "Learnt event management and public speaking as the President of the school",
  },
  {
    date: "2023",
    title: "Mathematics Research at NISER",
    text: "Participated as a mathematics research intern under Professor Brundaban Sahu.",
  },
  {
    date: "2020",
    title: "First Website for NISER",
    text: "Built my first website for the National Institute of Science Education and Research for Professor U. Lourderaj",
  },
  {
    date: "2019",
    title: "Started Learning to Code",
    text: "Learned Python, JavaScript, CSS, Flutter, and more than five programming languages and technologies through online resources.",
  },
];

const Skills = () => {
  return (
    <section className="border-b border-white/10 bg-[#070b14] py-24 md:py-32">
      <div className="section-shell">
        <div className="text-center">
          <p className="section-kicker">04 / Technical arsenal</p>
          <h2 className="section-title mt-5">Tools I use to make ideas real.</h2>
        </div>

        <div className="skills-marquee mt-14 overflow-hidden">
          <div className="skills-marquee-track flex w-max">
            <div className="flex shrink-0 gap-3 pr-3">
              {skills.map(({ name, icon }) => (
                <SkillCard key={name} name={name} icon={icon} />
              ))}
            </div>
            <div aria-hidden="true" className="flex shrink-0 gap-3 pr-3">
              {skills.map(({ name, icon }) => (
                <SkillCard key={`duplicate-${name}`} name={name} icon={icon} />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-28 max-w-4xl">
          <div className="text-center">
            <p className="section-kicker">Career timeline</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              A journey still taking shape.
            </h3>
          </div>

          <div className="relative mt-14">
            <div className="absolute bottom-0 left-[5px] top-0 w-px bg-white/10" />
            <div className="space-y-12">
              {timeline.map(({ date, title, text }) => (
                <article key={title} className="relative pl-10">
                  <span className="absolute left-0 top-1 size-[11px] border border-cyan-300 bg-[#070b14]" />
                  <p className="section-kicker">{date}</p>
                  <h4 className="mt-3 text-xl font-medium text-white">{title}</h4>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <a
            href="/Iniyan Resume ATS-3-1-2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-button mt-12"
          >
            Download full resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
