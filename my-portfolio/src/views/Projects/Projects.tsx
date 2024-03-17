import { useRef } from "react";
import {motion, useScroll, useSpring} from 'framer-motion';
import { projectsArray } from "../../utils/projects"
import ProjectsCard from "../../components/Projects/ProjectsCard";
import Carrousel from "../../components/Projects/Carrousel";


const Projects = () => {

  return (
    <div className="flex flex-col justify-center items-center gap-8" >
      
        <div id="anclar" className="flex flex-col justify-center items-center font-bold text-xl gap-2 p-2 z-30" >
           <h1 className='bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>Proyectos Realizados</h1>
        </div>
        
        
        <div id="cambia">
          <Carrousel />
        </div>
        
    </div>
  )
}

export default Projects;