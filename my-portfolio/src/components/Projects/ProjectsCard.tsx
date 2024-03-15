import { MyProjects } from "../../utils/projects"

interface ProjectProps {
    project: MyProjects
}

const ProjectsCard: React.FC<ProjectProps> = ({project}) => {
  return (
    <div className="flex flex-col gap-2 z-20 rounded-md justify-start items-center bg-gradient-to-br from-[#E1A0E7] to-[#AC48B5] h-80 w-80">
      <img src={project.img} />
      <a className='italic font-semibold text-black'>{project.name}</a>
    </div>
  )
}

export default ProjectsCard