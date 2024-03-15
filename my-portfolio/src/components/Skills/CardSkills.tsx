import { Skill } from '../../utils/skills';

interface SkillProps {
  skill: Skill;
}

const CardSkills: React.FC<SkillProps>= ({skill}) => {

  return (
    <div
        className='flex flex-col gap-2 justify-center items-center rounded-full bg-gradient-to-br from-[#E1A0E7] to-[#AC48B5] h-[150px] w-[150px]
        hover:bg-gradient-to-tr'
    >
    
      <img src={skill.img} className='flex justify-center items-center h-[70px] w-[70px] z-20'/>
      <a className='italic font-medium text-black'>{skill.name}</a>
     
    </div>
  )
}

export default CardSkills