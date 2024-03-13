import { MyProjects } from "../../utils/projects"

interface ProjectProps {
    project: MyProjects
}

const ProjectsCard: React.FC<ProjectProps> = ({project}) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-gradient-to-br from-[#E1A0E7] to-[#AC48B5] h-80 w-80">

    </div>
  )
}

export default ProjectsCard