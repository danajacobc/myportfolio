import ProjectsCard from "../../components/Projects/ProjectsCard"
import { MyProjects, projectsArray } from '../../utils/projects';

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 gap-5">
        <div className="flex flex-col justify-center items-center font-bold text-xl ">
           <a className='text-white'>Mis Proyectos</a>
        </div>
        {
        projectsArray.length > 0 ? (
            projectsArray.map((pj) => 
            <ProjectsCard project={pj}/>
            )
        ) : <a>Loading projects...</a>
        
        }
    </div>
  )
}

export default Projects