import React from 'react';
import gsap from "gsap";                 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from './AnimatedTitle'; 

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.set(".mask-clip-path", {
    width: "100vw",
    height: "100vh",
    borderRadius: 0,
  });
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  
  return (
   <div id="home" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to my journey
        </p>


        <AnimatedTitle
          title="Buil<b>d</b>ing producits<br /> you care ab<b>o</b>ut"
          containerClass="mt-5 !text-black text-center"
        />

       <div>
        <p className="text-gray-500 relative flex flex-col items-center gap-5 text-center mt-5 px-10">
I’m a freshman at Bucknell University with a strong curiosity for building technology that actually makes a difference. I love turning ideas into real products, which led me to creating JobQuest—an AI-powered platform that helps job seekers improve their resumes and find better opportunities. Through this experience, I’ve developed both my technical skills and my ability to think like a problem-solver and builder. I’m especially excited about working at the intersection of AI and software engineering, and I’m always looking for opportunities to learn, collaborate, and create tools that have a meaningful impact.        </p>
       </div>


        <div className="about-subtext">
          <p>make it happen.</p>
          <p className="text-gray-500 relative mb-8 flex flex-col items-center gap-5">
          I care about solving real problems through thoughtful engineering and product design.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About