const About = () => {
  return (
    <section id="about" className="border-b border-white/10 bg-[#070b14] py-24 md:py-32">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 border border-cyan-300/15" />
          <div className="relative aspect-[4/5] overflow-hidden bg-[#0b1120]">
            <img
              src="/img/Untitled.png"
              alt="Iniyan Lourderaj"
              className="size-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/60 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 font-general text-[9px] uppercase tracking-[0.2em] text-cyan-300">
              Odisha to Bucknell
            </span>
          </div>
        </div>

        <div>
          <p className="section-kicker">03 / Engineering perspective</p>
          <h2 className="section-title mt-5">
            Curious by nature.
            <br />
            Practical by design.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400">
            I&apos;m a freshman at Bucknell University studying Computer Science.
            I enjoy turning ambitious ideas into useful products, especially
            where AI and software engineering can make complicated experiences
            feel simpler and more human.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Moving from Odisha, India to Bucknell taught me to adapt quickly,
            seek unfamiliar challenges, and build community while learning.
          </p>

          <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
            <div>
              <p className="text-3xl font-semibold text-white">06+</p>
              <p className="mt-2 font-general text-[9px] uppercase tracking-[0.18em] text-slate-500">
                Projects and roles
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">02</p>
              <p className="mt-2 font-general text-[9px] uppercase tracking-[0.18em] text-slate-500">
                Research institutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
