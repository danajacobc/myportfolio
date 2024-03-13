import { motion } from "framer-motion";
import { skillsArray } from '../../utils/skills';
import { container, item } from "../../utils/motion";
import CardSkills from "../../components/Skills/CardSkills";

//flex flex-row justify-center align-center bg-slate-400 gap-5

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 gap-5">
        <div className="flex flex-col justify-center items-center font-bold text-xl ">
           <a className='text-white'>Mis Habilidades</a>
        </div>
        <div className="w-3/5 ">
        <motion.ul
        variants={container}
        initial="hidden"
        animate="visible" 
        className="container flex flex-wrap justify-center items-center grid-cols-4 gap-5 ">
            {
              skillsArray.length > 0 ? (
              skillsArray.map((sk) =>
              <motion.li key={1} className="item" variants={item}>
               <CardSkills skill={sk}/>
              </motion.li>
               )
              ) : <a>Loading skills...</a>
            }
            
        </motion.ul>
        </div>
    </div>
  )
}

export default Skills