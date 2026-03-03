import React from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import AnimatedTitle from './components/AnimatedTitle.jsx'
import NavBar from './components/Navbar.jsx'
import Features from './components/Features.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero/>
      <About/>
      <NavBar/>
      <Features/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
