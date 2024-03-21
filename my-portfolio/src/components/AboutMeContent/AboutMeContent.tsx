import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '../../utils/motion';
import principal from '../../assets/logo/principal.png';
import perfil from '../../assets/perfil/p-1.jpg';
import { moveToLink } from '../../utils/functions';

const AboutMeContent = () => {
  const cvLink = 'https://drive.google.com/file/d/1SUczjW2ofLHgbcI82FKTOcjVlKfV_Rmb/view?usp=drive_link';
  
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-row w-[100vw] items-center justify-center gap-4">

        <div className='flex flex-col justify-center text-start'>
            <motion.p
            variants={slideInFromLeft(0.5)}
            className="max-w-[600px] font-bold text-3xl text-white">
                ¡Hola, soy <a className=' bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>Dana</a>!
            </motion.p>
            <motion.p
            variants={slideInFromLeft(0.5)}
            className="text-lg text-white max-w-[600px]">
              <h2 className='font-bold text-2xl bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>Desarrolladora Full-Stack</h2>
              <p>Te invito a que conozcas un poco sobre mi y mi trabajo... </p>
              <p>Mi curiosidad e inquietud me impulsan a buscar nuevas habilidades y tecnologías en el mundo del desarrollo web, lo cual me ha permitido trabajar en proyectos tanto Back-End como Front-End.</p>
              <p>Me adapto a diversos entornos y tengo facilidad para conectar con la gente, lo cual me permite trabajar muy bien en equipo, siempre buscando el equilibrio entre las necesidades de las personas y los objetivos del proyecto. 💪🏻</p> 
              <p>🪄 ❤️ La atención a los detalles y mi amor por la estética me llevan a buscar la perfección en la funcionalidad y el diseño, encontrando la armonía entre ambos.</p>
            </motion.p>
            <motion.div
              variants={slideInFromLeft(0.5)}
              className='flex justify-end mr-2'>
              <button onClick={() => moveToLink(cvLink)}
              className='bg-white text-black font-semibold p-3 rounded-sm hover:bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8]'>Descargar CV</button>
            </motion.div>
        </div>
        <motion.div
            variants={slideInFromTop}
            className='relative flex flex-col bottom-10'>
            <img src={perfil} className='rounded-r-full rounded-t-full h-80 w-80'/>
            <img src={principal} className='absolute left-52 top-52 rounded-full h-56 w-56'/>
        </motion.div>
    </motion.div>
  )
};

export default AboutMeContent;