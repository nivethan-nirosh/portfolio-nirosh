import './App.css'
import AuroraBackground from './components/AuroraBackground'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Highlights from './sections/Highlights'
import Projects from './sections/Projects'

function App() {
  return (
    <div className="relative min-h-screen text-white antialiased overflow-x-hidden">
      {/* Global Aurora Background */}
      <AuroraBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Highlights />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
