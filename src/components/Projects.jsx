import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-24">
       <div className="bg-black py-24 sm:py-32">
  <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <h2 className="text-center text-base/7 font-semibold text-indigo-400">JOBQUEST - COMING SOON!</h2>
    <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Everything you need to pursue your passion</p>
    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
      <div className="relative lg:row-span-2">
        <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
          <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
            <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Mobile responsive</p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">Use Jobquest Anywhere you go so that you can access your job search tools and resources on any device. <br></br> Always Be Prepared!</p>
          </div>
          <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
            <div>
                <img
  src="/img/jobquest_phone_clean.png"
  alt="Jobquest phone"
  className="w-40 sm:w-52 md:w-64 mx-auto object-contain py-10"
/>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl"></div>
      </div>
      <div className="relative max-lg:row-start-1">
        <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Performance</p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">Real-time feedback, fast processing, and seamless voice interactions—so you can practice without interruptions and improve faster.</p>
          </div>
          <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
            <img src="/img/JOBQUEST.jpg" alt="" className="w-full max-lg:max-w-xs" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl"></div>
      </div>
      <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
        <div className="absolute inset-px rounded-lg bg-gray-800"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Security</p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">JobQuest ensures your data is secure and private. We use industry-standard encryption and security protocols to protect your information.</p>
          </div>
          <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
            <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png" alt="" className="h-[min(152px,40cqw)] object-cover" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15"></div>
      </div>
      <div className="relative lg:row-span-2">
        <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
          <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
            <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Powerful APIs</p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">With state-of-the-art speech recognition, natural language understanding, and text-to-speech technologies powered by advanced AI APIs, JobQuest offers the ability to have seamless voice interviews, structured evaluations, and adaptive question generation—all within your browser.</p>
          </div>
          <div className="relative min-h-120 w-full grow">
           <div className="absolute top-10 right-0 bottom-0 left-10 flex items-center justify-center overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
  <img
    src="/img/artificial-intelligence.png"
    alt=""
    className="w-40 sm:w-42 md:w-44 object-contain"
  />
              <div className="px-6 pt-6 pb-14">
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
      </div>
    </div>
  </div>
</div>

    </section>
  )
}

export default Projects