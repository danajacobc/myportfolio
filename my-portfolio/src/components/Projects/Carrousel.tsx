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

    const currentProjectData = projectsArray[currentProject];

  return (
    <div className="flex flex-col justify-start items-center relative w-full h-96">
        <div
         className="flex transition-transform duration-300 ease-in-out transform"
         style={{
           width: `${80}%`,
           transform: `translateX(0)`,
         }}>
        {
          currentProjectData ? (
              
             
              <ProjectsCard key={currentProjectData.id} project={currentProjectData}/>
             
            
          )
          : <a>Loading projects...</a>
            
          }
          </div>
          <div>
            <button
              className="absolute flex justify-center items-center top-1/2 left-0 transform -translate-y-1/2 px-2 py-2 mx-2 rounded-full bg-gradient-to-br from-[#E1A0E7] to-[#AC48B5] hover:bg-gradient-to-tr transition hover:duration-300 hover:scale-110 ease-in-out h-10 w-10 md:h-16 md:w-16"
              onClick={prevProject}
            >
              <img src={arrowl} />
            </button>
            <button
              className="absolute flex justify-center items-center top-1/2 right-0 transform -translate-y-1/2 px-2 py-2 mx-2 rounded-full bg-gradient-to-br from-[#E1A0E7] to-[#AC48B5] hover:bg-gradient-to-tr transition hover:duration-300 hover:scale-110 ease-in-out h-10 w-10 md:h-16 md:w-16"
              onClick={nextProject}
            >
              <img src={arrowr} />
            </button>
          </div>
        </div>
  )
}

export default Carrousel