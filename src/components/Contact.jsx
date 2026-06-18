import { FiArrowUpRight, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-neutral-950 py-24 text-neutral-50 md:py-32">
      <div className="section-shell relative text-center">
        <p className="font-general text-[11px] font-bold uppercase tracking-[0.12em] text-red-500">
          05 / Start a conversation
        </p>
        <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl uppercase leading-[1.02] text-neutral-50 sm:text-6xl md:text-7xl">
          Let&apos;s create something extraordinary.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-neutral-300 md:text-base">
          I&apos;m always open to thoughtful projects, research opportunities,
          internships, and conversations about building useful technology.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a href="mailto:iniyanlourderaj@gmail.com" className="inline-flex items-center justify-center gap-2 border-2 border-neutral-50 bg-neutral-50 px-6 py-3 font-general text-sm font-bold uppercase tracking-[0.06em] text-neutral-950 transition-colors hover:border-red-500 hover:bg-red-500 hover:text-neutral-50">
            <FiMail />
            Send an email
          </a>
          <a
            href="https://www.linkedin.com/in/iniyanlourderaj/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-neutral-50 bg-transparent px-6 py-3 font-general text-sm font-bold uppercase tracking-[0.06em] text-neutral-50 transition-colors hover:bg-neutral-50 hover:text-neutral-950"
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
