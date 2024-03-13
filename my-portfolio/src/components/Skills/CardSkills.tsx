import { Skill } from '../../utils/skills';

interface SkillProps {
  skill: Skill;
}

const CardSkills: React.FC<SkillProps>= ({skill}) => {

  return (
    <div
        className="flex flex-col gap-2 justify-center items-center bg-gradient-to-br from-[#E1A0E7] to-[#AC48B5] h-[140px] w-[140px] 
                    hover:bg-gradient-to-tr"
    >
    
      <img src={skill.img} className='flex justify-center items-center h-[90px] w-[90px] z-20'/>
      <a className='font-bold text-black'>{skill.name}</a>
     
    </div>
  )
}

export default CardSkills