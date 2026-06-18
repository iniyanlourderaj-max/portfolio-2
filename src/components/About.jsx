const About = () => {
  return (
    <section id="about" className="border-b-2 border-neutral-950 bg-neutral-50 py-24 md:py-32">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 border-2 border-neutral-950" />
          <div className="relative aspect-[4/5] overflow-hidden border-2 border-neutral-950 bg-neutral-100">
            <img
              src="/img/Untitled.png"
              alt="Iniyan Lourderaj"
              className="size-full object-cover object-center"
            />
            <span className="absolute bottom-5 left-5 bg-neutral-50 px-3 py-2 font-general text-[11px] font-bold uppercase tracking-[0.12em] text-red-500">
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
          <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-600">
            I&apos;m a freshman at Bucknell University studying Computer Science.
            I enjoy turning ambitious ideas into useful products, especially
            where AI and software engineering can make complicated experiences
            feel simpler and more human.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600">
            Moving from Odisha, India to Bucknell taught me to adapt quickly,
            seek unfamiliar challenges, and build community while learning.
          </p>

          <div className="mt-10 grid gap-6 border-t-2 border-neutral-950 pt-8 sm:grid-cols-2">
            <div>
              <p className="font-display text-3xl text-neutral-950">06+</p>
              <p className="mt-2 font-general text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-500">
                Projects and roles
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-neutral-950">02</p>
              <p className="mt-2 font-general text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-500">
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
