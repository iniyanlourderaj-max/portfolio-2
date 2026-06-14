import { useEffect } from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import NavBar from './components/Navbar.jsx'
import Features from './components/Features.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  useEffect(() => {
    const cleanupTimers = []
    const revealElements = document.querySelectorAll(
      [
        '#home > .relative.z-10',
        '#home > a',
        'section:not(#home) .section-shell > *',
        'section:not(#home) article',
        'footer .section-shell',
      ].join(','),
    )

    revealElements.forEach((element, index) => {
      element.classList.add('scroll-reveal')
      element.style.setProperty('--reveal-delay', `${(index % 4) * 90}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)

          const delay = Number.parseInt(
            entry.target.style.getPropertyValue('--reveal-delay'),
            10,
          ) || 0

          const cleanupTimer = window.setTimeout(() => {
            entry.target.classList.remove('scroll-reveal', 'is-visible')
            entry.target.style.removeProperty('--reveal-delay')
          }, 850 + delay)

          cleanupTimers.push(cleanupTimer)
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      cleanupTimers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [])

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070b14]">
      <NavBar/>
      <Hero/>
      <Projects/>
      <Features/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
