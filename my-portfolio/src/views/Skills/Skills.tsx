import { motion } from "framer-motion";
import { skillsArray } from '../../utils/skills';
import { container, item } from "../../utils/motion";
import CardSkills from "../../components/Skills/CardSkills";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
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
  }, [isVisible]);

  return (
    <div ref={skillsRef} className="flex flex-col justify-center items-center gap-10 p-4">
      <div className="text-center font-bold text-2xl">
        <h1 className='bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>TECNOLOGÍAS</h1>
      </div>
      <div className="w-full sm:w-4/5 md:w-3/5">
        <motion.ul
          variants={container}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"} 
          className="flex flex-wrap justify-center items-center gap-4 p-4">
          {
            skillsArray.length > 0 ? (
              skillsArray.map((sk) =>
                <motion.li key={sk.name} variants={item}>
                  <CardSkills skill={sk}/>
                </motion.li>
              )
            ) : <span>Loading skills...</span>
          }
        </motion.ul>
      </div>
    </div>
  );
}

export default Skills;