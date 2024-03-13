import ProjectsCard from "../../components/Projects/ProjectsCard"

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 gap-5">
        <div className="flex flex-col justify-center items-center font-bold text-xl ">
           <a className='text-white'>Mis Proyectos</a>
        </div>
        <ProjectsCard />
    </div>
  )
}

export default Projects