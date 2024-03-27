import "./app.scss"
// Components //
import StarsCanvas from './components/StarsBackground/StarsBackground';
import AboutMe from './views/AboutMe/AboutMe';
import Navbar from './components/Navbar/Navbar';
import Skills from "./views/Skills/Skills";
import Projects from "./views/Projects/Projects";
import ContactMe from "./views/ContactMe/ContactMe";
import ScrollToUp from "./components/Navbar/ScrollToUp";
import { Analytics } from "@vercel/analytics/react"
import { useEffect, useState } from "react";


function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Obtener la posición actual del scroll
      const currentScrollPos = window.scrollY;

      // Obtener la posición de la sección aboutme
      const aboutMePos = document.getElementById('aboutme')?.offsetTop || 0;

      // Determinar si aboutme está en el viewport y actualizar el estado
      // Aquí, podrías necesitar ajustar el `window.innerHeight` o un valor específico para ser más preciso.
      setShowScroll(!(currentScrollPos >= aboutMePos && currentScrollPos < aboutMePos + window.innerHeight));
    };

    // Agregar el event listener
    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Analytics />
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
      {showScroll && <ScrollToUp />}
    </div>
  )
}

export default App
