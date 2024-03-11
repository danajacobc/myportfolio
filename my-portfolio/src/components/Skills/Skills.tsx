import { motion } from "framer-motion";

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
            <motion.li key={1} className="item" variants={item}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="80" height="80"/></motion.li>
            <motion.li key={2} className="item" variants={item}><img src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" width="80" height="80" />  </motion.li>
            <motion.li key={3} className="item" variants={item}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="80" height="80"/></motion.li>
            <motion.li key={4} className="item" variants={item}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="80" height="80"/></motion.li>
            <motion.li key={5} className="item" variants={item}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="80" height="80"/></motion.li>
            <motion.li key={6} className="item" variants={item}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="80" height="80"/> </motion.li>
            <motion.li key={7} className="item" variants={item}><img src="https://sequelize.org/img/logo.svg" alt="postgresql" width="80" height="80"/></motion.li>
            <motion.li key={8} className="item" variants={item}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="80" height="80"/></motion.li>
            <motion.li key={9} className="item" variants={item}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="80" height="80"/></motion.li>
            <motion.li key={10} className="item" variants={item}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="80" height="80"/> </motion.li>
            <motion.li key={11} className="item" variants={item}><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="80" height="80"/></motion.li>
            <motion.li key={12} className="item" variants={item}><img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="80" height="80"/></motion.li>
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