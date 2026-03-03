import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const Skills = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;
    if (!element) return;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  return (
    <div id="about" className="min-h-dvh w-full bg-black text-blue-50 overflow-x-hidden">
      {/* ✅ CHANGED: size-full -> w-full */}
      <div className="flex w-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          "Engineering" sucks
        </p>

        {/* ✅ CHANGED: size-full -> w-full, and this wrapper is now the positioning parent */}
        <div className="relative w-full">
          <AnimatedTitle
            title="AB<b>o</b>UT <br /> MY JOURNEY<b></b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          {/* ✅ CHANGED: this becomes the main layout wrapper for image + overlay text */}
          <div className="story-img-container relative">
            {/* IMAGE */}
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/Untitled.png"
                  alt="entrance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* ✅ CHANGED: Text is now INSIDE the relative wrapper so md:absolute works */}
            <div className="mt-12 pt-10 md:pt-20 absolute z-30 right-6 bottom-6 md:right-16 md:bottom-16 w-[90%] md:w-[28rem]">
    <p className="font-circular-web !text-white text-base md:text-lg leading-relaxed mix-blend-normal">
I started in Odisha, India — a place that shaped my perspective and curiosity.
Moving to Bucknell to study Computer Science wasn’t just about education, it was about taking a leap into the unfamiliar and learning to navigate a completely new world on my own.    </p>

    <a
      href="/Iniyan Resume ATS-3-1.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4"
    >
      <Button id="realm-btn" title="DOWNLOAD RESUME" />
    </a>
  </div>


            {/* SVG filter */}
            <svg className="invisible absolute size-0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;