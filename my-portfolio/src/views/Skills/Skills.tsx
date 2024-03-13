import { motion } from "framer-motion";
import { skillsArray, Skill } from '../../utils/skills';
import CardSkills from "../../components/Skills/CardSkills";

//flex flex-row justify-center align-center bg-slate-400 gap-5
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Skills = () => {
  return (
    <div className="flex flex-col justify-center align-center p-8">
        <div className="flex flex-col justify-center align-center font-bold">
           <p>Mis Habilidades</p>
        </div>
        
        
      
        <motion.ul
        variants={container}
        initial="hidden"
        animate="visible" 
        className="container flex flex-row justify-center align-center gap-5">
          
            
            {
              skillsArray.length > 0 ? (
              skillsArray.map((sk) =>
              <motion.li key={1} className="item" variants={item}>
               <CardSkills skill={sk}/>
              </motion.li>
               )
              ) : <a>Loading skills...</a>
            }
            
        {/* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="80" height="80"/></a>
        <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" width="80" height="80" /></a>  
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="80" height="80"/></a>
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="80" height="80"/></a>
        <a href="https://nodejs.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="80" height="80"/></a>
        <a href="https://expressjs.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="80" height="80"/></a> 
        <a href="https://sequelize.org/" target="_blank" rel="noreferrer"><img src="https://sequelize.org/img/logo.svg" alt="postgresql" width="80" height="80"/></a>
        <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="80" height="80"/></a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="80" height="80"/></a>
        <a href="https://redux.js.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="80" height="80"/></a> 
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="80" height="80"/></a>
        <a href="https://postman.com" target="_blank"><img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="80" height="80"/></a> */}
        </motion.ul>
    </div>
  )
}

export default Skills