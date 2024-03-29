import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '../../utils/motion';
import principal from '../../assets/logo/principal.png';
import perfil from '../../assets/perfil/p-1.jpg';
import { moveToLink } from '../../utils/functions';

const AboutMeContent = () => {
  const cvLink = 'https://drive.google.com/file/d/1WVSTUmljAE7-AcPNffGITidjceRWPgf4/view?usp=drive_link';
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row w-full justify-center items-center md:gap-8 p-4 md:p-8">

        <motion.div
            variants={slideInFromTop}
            className='relative flex justify-center md:flex-col mt-2 md:mt-0 m-6'>
            <img src={perfil} alt="Perfil" className='rounded-full h-40 w-40 md:h-80 md:w-80'/>
            <img src={principal} alt="Principal" className='rounded-full h-36 w-36 md:h-56 md:w-56 absolute -right-24 md:right-52 top-10 md:top-52'/>
        </motion.div>

        <div className='flex flex-col justify-center gap-2 items-center md:items-start text-center md:text-left'>
            <motion.p
            variants={slideInFromLeft(0.5)}
            className="font-bold text-xl md:text-3xl text-white">
                ¡Hola, soy <a className='bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>Dana</a>!
            </motion.p>
            <motion.p
            variants={slideInFromLeft(0.5)}
            className="text-white max-w-md">
              <p className='font-bold text-lg md:text-2xl bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>Desarrolladora Full-Stack</p>
              <p className='font-bold text-md md:text-xl'>Te invito a que conozcas un poco sobre mi y mi trabajo... </p>
              <div className='p-2'>
                <p>Mi curiosidad e inquietud me impulsan a buscar nuevas habilidades y tecnologías en el mundo del desarrollo web, lo cual me ha permitido trabajar en proyectos tanto Back-End como Front-End.</p>
                <p>Me adapto a diversos entornos y tengo facilidad para conectar con la gente, lo cual me permite trabajar muy bien en equipo, siempre buscando el equilibrio entre las necesidades de las personas y los objetivos del proyecto. 💪🏻</p> 
                <p>🪄 ❤️ La atención a los detalles y mi amor por la estética me llevan a buscar la perfección en la funcionalidad y el diseño, encontrando la armonía entre ambos.</p>
            </div>
            </motion.p>
            <motion.div
              variants={slideInFromLeft(0.5)}
              className='flex justify-center md:justify-end w-full'>
              <button onClick={() => moveToLink(cvLink)}
              className='bg-gradient-to-tr from-[#e8bbec] to-[#E1A0E7] text-black font-semibold p-2 md:p-3 rounded-full hover:bg-gradient-to-tr hover:from-[#E1A0E7] hover:to-[#CD60D8]'>Descargar CV</button>
            </motion.div>
        </div>
    </motion.div>
  )
};

export default AboutMeContent;