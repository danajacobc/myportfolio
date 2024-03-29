import { Skill } from '../../utils/skills';

interface SkillProps {
  skill: Skill;
}

const CardSkills: React.FC<SkillProps> = ({ skill }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 rounded-full bg-gradient-to-br from-[#E1A0E7] to-[#AC48B5] p-4 h-[120px] w-[120px] sm:h-[120px] sm:w-[120px] md:h-[140px] md:w-[140px] hover:bg-gradient-to-tr'>
      <img src={skill.img} alt={skill.name} className='h-[40px] w-[40px] md:h-[60px] md:w-[60px] z-10'/>
      <a className='italic font-medium text-black'>{skill.name}</a>
    </div>
  );
}

export default CardSkills;