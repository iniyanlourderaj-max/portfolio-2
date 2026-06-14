import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const Skills = () => {
  return (
    <div
      id="about"
      className="min-h-dvh w-full overflow-x-hidden bg-black text-blue-50"
    >
      <div className="flex w-full flex-col items-center pb-24 pt-10">
        <p className="font-general text-sm uppercase md:text-[10px]">
          "Engineering" sucks
        </p>

        <div className="relative w-full">
          <AnimatedTitle
            title="AB<b>o</b>UT <br /> MY JOURNEY<b></b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="mx-auto mt-10 w-full max-w-6xl px-6 md:px-10">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-video">
              <img
                src="/img/Untitled.png"
                alt="Iniyan exploring an art installation"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="mt-8 max-w-2xl">
              <p className="font-circular-web text-base leading-relaxed text-white md:text-lg">
                I started in Odisha, India - a place that shaped my perspective
                and curiosity. Moving to Bucknell to study Computer Science
                wasn't just about education; it was about taking a leap into the
                unfamiliar and learning to navigate a completely new world on my
                own.
              </p>

              <a
                href="/Iniyan Resume ATS-3-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block"
              >
                <Button id="realm-btn" title="DOWNLOAD RESUME" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
