import "./app.scss"
// Components //
import StarsCanvas from './components/StarsBackground/StarsBackground';
import AboutMe from './views/AboutMe/AboutMe';
import Navbar from './components/Navbar/Navbar';
import Skills from "./views/Skills/Skills";


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
        Proyectos
      </section>
      <section>
        Contacto
      </section>
    </div>
  )
}

export default App
