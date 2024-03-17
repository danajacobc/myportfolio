import { projectsArray } from '../../utils/projects';
import ProjectsCard from "./ProjectsCard"
import { useState } from "react";
import arrowl from '../../assets/arrows/arrow-l.png'
import arrowr from '../../assets/arrows/arrow-r.png'

const Carrousel = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projectsArray.length);
    };
    
    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projectsArray.length) % projectsArray.length);
    };

  return (
    <div className="relative bg-red-600 w-full gap-5">
        <div
         className="flex transition-transform duration-300 ease-in-out transform"
         style={{
           width: `${projectsArray.length * 100}%`,
           transform: `translateX(-${currentProject * (100 / projectsArray.length)}%)`,
         }}>
        {
          projectsArray.length > 0 ? (
            projectsArray.map((pj) => 
            { 
              return (
             
              <ProjectsCard key={pj.id} project={pj}/>
             
            )
          }
            )
            ) : <a>Loading projects...</a>
            
          }
        </div>
        <div>
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 mx-4 rounded-full bg-gradient-to-br from-[#E1A0E7] to-[#AC48B5] hover:bg-gradient-to-tr transition hover:duration-300 hover:scale-110 ease-in-out z-30 h-16 w-16"
              onClick={prevProject}
            >
              <img src={arrowl} className="h-10 w-10"/>
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 mx-4 rounded-full bg-gradient-to-br from-[#E1A0E7] to-[#AC48B5] hover:bg-gradient-to-tr transition hover:duration-300 hover:scale-110 ease-in-out z-30 h-16 w-16"
              onClick={nextProject}
            >
              <img src={arrowr} className="h-10 w-10"/>
            </button>
            </div>
        </div>
  )
}

export default Carrousel