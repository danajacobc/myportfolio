import { Skill } from '../../utils/skills';

interface SkillProps {
  skill: Skill;
}

const CardSkills: React.FC<SkillProps>= ({skill}) => {

  return (
    <div
        className='flex flex-col gap-2 justify-center items-center rounded-full bg-gradient-to-br from-[#E1A0E7] to-[#AC48B5] h-[140px] w-[140px]
        hover:bg-gradient-to-tr'
    >
    
      <img src={skill.img} className='flex justify-center items-center h-[60px] w-[60px] z-10'/>
      <a className='italic font-medium text-black'>{skill.name}</a>
     
    </div>
  )
}

export default CardSkills