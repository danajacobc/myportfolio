import "./app.scss"
// Components //
import StarsCanvas from './components/StarsBackground/StarsBackground';
import AboutMe from './views/AboutMe/AboutMe';
import Navbar from './components/Navbar/Navbar';
import Skills from "./views/Skills/Skills";
import Projects from "./views/Projects/Projects";


function App() {
  return (
    <div className='flex flex-col items-center'>
      <StarsCanvas />
      <section>
        <Navbar />
        <AboutMe />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        Contacto
      </section>
    </div>
  )
}

export default App
