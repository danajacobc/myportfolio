import { moveToLink } from "../../utils/functions"
import { MyProjects } from "../../utils/projects"

interface ProjectProps {
    project: MyProjects
}

const ProjectsCard: React.FC<ProjectProps> = ({project}) => {
  
  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-2 md:gap-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full">
        <div className="w-full md:w-2/4 rounded-lg border-8 border-[#E1A0E7]">
          <img src={project.img} alt={project.name} />   
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-2/4 gap-2 md:gap-5">
          <h2 className='italic font-semibold text-lg text-white'>{project.name}</h2>
          <p className="">{project.description}</p>
          <div className="flex flex-row gap-2">
            {
             project.github && project.github !== '' ? 
             <button onClick={() => moveToLink(project.github)} className='bg-gradient-to-tr from-[#e8bbec] to-[#E1A0E7] text-black font-semibold p-3 rounded-full hover:bg-gradient-to-tr hover:from-[#E1A0E7] hover:to-[#CD60D8]'>Deploy</button>
             : null
            }
            {
             project.link && project.link !== '' ? 
            <button onClick={() => moveToLink(project.link)} className='bg-gradient-to-tr from-[#e8bbec] to-[#E1A0E7] text-black font-semibold p-3 rounded-full hover:bg-gradient-to-tr hover:from-[#E1A0E7] hover:to-[#CD60D8]'>YouTube</button>
             : null
            }
            {
             project.deploy && project.deploy !== '' ? 
            <button onClick={() => moveToLink(project.deploy)} className='bg-gradient-to-tr from-[#e8bbec] to-[#E1A0E7] text-black font-semibold p-3 rounded-full hover:bg-gradient-to-tr hover:from-[#E1A0E7] hover:to-[#CD60D8]'>Deploy</button>
             : null
            }
          </div>
        </div>
      </div>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
        
        {
          project.skills && project.skills.map((skill) => 
          <div className='flex flex-row gap-2 justify-center items-center rounded-full bg-gradient-to-tr from-[#e8bbec] to-[#E1A0E7] h-[50px] w-[50px] md:h-[80px] md:w-[80px]'>
            <img src={skill} className='h-[30px] w-[30px] md:h-[50px] md:w-[50px]'/>
          </div>
          )
        }
     
        </div>
    </div>
  )
}

export default ProjectsCard;