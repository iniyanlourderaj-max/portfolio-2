import { FiArrowUpRight, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#090e19] py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[120px]" />
      <div className="section-shell relative text-center">
        <p className="section-kicker">05 · Start a conversation</p>
        <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl">
          Let&apos;s create something extraordinary.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
          I&apos;m always open to thoughtful projects, research opportunities,
          internships, and conversations about building useful technology.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a href="mailto:iniyanlourderaj@gmail.com" className="cyan-button">
            <FiMail />
            Send an email
          </a>
          <a
            href="https://www.linkedin.com/in/iniyanlourderaj/"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-button"
          >
            LinkedIn
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
