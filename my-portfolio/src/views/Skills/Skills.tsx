import { motion } from "framer-motion";
import './skills.scss'
import { skillsArray } from '../../utils/skills';
import { container, item } from "../../utils/motion";
import CardSkills from "../../components/Skills/CardSkills";
import { useEffect, useRef } from "react";

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const skillsContainer = document.querySelector(".skills-container");
          if (skillsContainer) {
            skillsContainer.classList.add("animate");
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );
    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    };
  }, []);

  return (
    <div ref={skillsRef} className="skills-section">
    <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center font-bold text-2xl ">
           <h1 className='bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>Tecnologías</h1>
        </div>
        <div className="w-3/5">
        <motion.ul
        variants={container}
        initial="hidden"
        animate="visible" 
        className="container flex flex-wrap justify-center items-center grid-cols-4 gap-3 skills-container">
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
    </div>
  )
}

export default Skills