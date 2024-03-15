//import Carrousel from "../../components/Projects/Carrousel";
import ProjectsCard from "../../components/Projects/ProjectsCard"
import { projectsArray } from '../../utils/projects';

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 gap-5">
        <div className="flex flex-col justify-center items-center font-bold text-xl w-2/3">
           <a className='bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>Mis Proyectos</a>
        </div>
        <div className="flex flex-row gap-10">
        {
          projectsArray.length > 0 ? (
            projectsArray.map((pj) => 
            <ProjectsCard project={pj}/>
            )
            ) : <a>Loading projects...</a>
            
          }
        </div>
    </div>
  )
}

export default Projects