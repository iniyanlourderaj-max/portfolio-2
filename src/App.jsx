import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import NavBar from './components/Navbar.jsx'
import Features from './components/Features.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
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
