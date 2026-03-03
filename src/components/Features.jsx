import React from 'react'

const BentoCard = ({ src, title, description, isComingSoon }) => {
  return (
    // ✅ ADDED: overflow-hidden + rounded-md (prevents video overflow + cleaner edges)
    <div id="skills" className="relative size-full overflow-hidden rounded-md px-5">
      
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center px-14"
      />

      {/* ✅ CHANGED: this now wraps EVERYTHING (including button) */}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        
        <div>
          <h1 className="bento-title special-font">{title}</h1>

          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">
              {description}
            </p>
          )}
        </div>

        {/* ✅ MOVED: this block INSIDE the padded container */}
        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            <div
              className="pointer-events-none absolute -inset-px transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            
            {/* ✅ ADDED: visible text inside button */}
            <span className="relative z-10">Coming Soon</span>
          </div>
        )}
      </div>
    </div>
  )
}

const Features = () => {
  return (

    <section className="bg-black py-5">
        <div className="container mx-auto px-3 md:px-10" >
            <div className="px-5 py-32">
                <p className="font-circular-web text-lg text-blue-50">
                    Experience and skills
                </p>
                <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
I’m a freshman at Bucknell University aspiring to become a computer scientist, driven by curiosity and creativity. My experience spans academic research at NISER, web and app development, and early work in robotics. Alongside building projects, I’ve taken on leadership roles such as Student President and actively participated in competitions. I’m eager to keep learning, building, and exploring opportunities in tech and innovation.                </p>
            </div>
        </div>
        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
            </>
          }
          description="With a strong passion for AI, 3D animation, and software engineering, I’ve dedicated myself to building projects like JobQuest that are designed to help people develop their skills, gain confidence, and achieve their goals."
        />
        </div>
    </section>
    
  )
}

export default Features