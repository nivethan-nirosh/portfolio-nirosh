import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Details from './sections/Details'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Activities from './sections/Activities'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen text-white bg-grid antialiased">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Details />
        <Projects />
        <Achievements />
        <Activities />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
