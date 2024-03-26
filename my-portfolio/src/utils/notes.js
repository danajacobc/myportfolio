// Animación - del centro se expande
<motion.div
          initial={{opacity: 0.5, scale: 0.5}}
          transition={{duration: 2}}
          whileInView={{opacity: 1, scale: 2}}
          drag>
</motion.div>

//projects
// return (
//     <div className="portfolio flex flex-col justify-center items-center p-8 gap-5" ref={ref}>
//         <div className="progress flex flex-col justify-center items-center font-bold text-xl w-2/3">
//            <a className='bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>Proyectos Realizados</a>
//           <motion.div style={{ scaleX }} className="progressBar"></motion.div>
//         </div>
//         <div className="flex flex-row gap-10">
//         {
//           projectsArray.length > 0 ? (
//             projectsArray.map((pj) => 
//             <ProjectsCard key={pj.id} project={pj}/>
//             )
//             ) : <a>Loading projects...</a>
            
//           }
//         </div>
//     </div>
//   )

// import { useRef } from "react";
// import {motion, useScroll, useSpring} from 'framer-motion';
// import { projectsArray } from "../../utils/projects"
// import ProjectsCard from "../../components/Projects/ProjectsCard";


// const Projects = () => {
//   const ref = useRef<HTMLDivElement>(null);

//   const {scrollYProgress} = useScroll({
//     target: ref, 
//     offset:['end end', 'start start']
//   });

//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   })

//   return (
//     <div className="relative flex flex-col justify-center items-center" >
      
//         <div id="anclar" className="sticky top-0 flex flex-col justify-center items-center font-bold text-xl gap-2 p-2 z-30" >
//            <h1 className='bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>Proyectos Realizados</h1>
//           <motion.div style={{ scaleX }} className="h-[10px] w-[1000px] bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] top-0 left-0"></motion.div>
//         </div>
        
        
//         <div id="cambia" ref={ref} className="overflow-y-auto max-h-[calc(100vh-100px)]">
//         {
//           projectsArray.length > 0 ? (
//             projectsArray.map((pj) => 
//             { 
//               return (
             
//               <ProjectsCard key={pj.id} project={pj} />
             
//             )
//           }
//             )
//             ) : <a>Loading projects...</a>
            
//           }
//         </div>
        
//     </div>
//   )
// }

// export default Projects;


//STYLE BUTTON
// className='bg-gradient-to-tr from-[#e8bbec] to-[#E1A0E7] text-black font-semibold p-3 rounded-full hover:bg-gradient-to-tr hover:from-[#E1A0E7] hover:to-[#CD60D8]'
// bg-gradient-to-tr from-[#e8bbec] to-[#E1A0E7] hover:bg-gradient-to-tr hover:from-[#E1A0E7] hover:to-[#CD60D8]