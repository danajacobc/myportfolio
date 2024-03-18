import { MyProjects } from "../../utils/projects"

interface ProjectProps {
    project: MyProjects
}

const ProjectsCard: React.FC<ProjectProps> = ({project}) => {
  
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-10 gap-5">
      <div className="flex flex-row justify-center items-center gap-5">
      <div className="w-2/5">
        <img src={project.img} alt={project.name} />
          
      </div>
        <div className="flex flex-col gap-2 p-2 justify-start items-center w-2/5">
          <h2 className='italic font-semibold text-lg text-white'>{project.name}</h2>
          <p>{project.description}</p>
          <button className=' bg-white text-black font-semibold p-3 rounded-sm hover:bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8]'>GitHub</button>
        </div>
      </div>
        <div className="flex flex-row justify-center items-center gap-2 h-24 w-full bg-blue-500">
          <h1>tecno</h1>
        </div>
    </div>
  )
}

export default ProjectsCard