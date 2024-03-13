import { Skill } from '../../utils/skills';

const CardSkills = (skill: Skill) => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-[#E1A0E7] to-[#AC48B5] h-[100px] w-[100px]">
       <img src={skill.img} /> 
       <h1>{skill.img}</h1>
    </div>
  )
}

export default CardSkills