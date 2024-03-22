import "./app.scss"
// Components //
import StarsCanvas from './components/StarsBackground/StarsBackground';
import AboutMe from './views/AboutMe/AboutMe';
import Navbar from './components/Navbar/Navbar';
import Skills from "./views/Skills/Skills";
import Projects from "./views/Projects/Projects";
import ContactMe from "./views/ContactMe/ContactMe";


function App() {
  return (
    <div>
      <StarsCanvas />
      <section id="aboutme">
        <Navbar />
        <AboutMe />
      </section>
      <section id="skills" className='flex flex-col justify-center items-center'>
        <Skills />
      </section>
      <section id="projects" className='flex flex-col justify-center items-center'>
        <Projects />
      </section>
      <section id="contact" className='flex flex-col justify-center items-center'>
        <ContactMe />
      </section>
    </div>
  )
}

export default App
