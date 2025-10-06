import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Highlights from './sections/Highlights'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen text-white bg-grid antialiased">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Highlights />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
