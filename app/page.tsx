import Navbar   from "./component/sections/Navbar"
import Hero     from "./component/sections/Hero"
import About    from "./component/sections/About"
import Skills   from "./component/sections/Skills"
import Projects from "./component/sections/Projects"
import Contact  from "./component/sections/Contact"
import Footer   from "./component/sections/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}