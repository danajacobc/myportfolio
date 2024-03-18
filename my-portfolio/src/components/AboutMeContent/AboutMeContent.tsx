import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '../../utils/motion';
import principal from '../../assets/logo/principal.png';
import perfil from '../../assets/perfil/p-1.jpg';

const AboutMeContent = () => {

  const downloadCV =  () => {
    const link = document.createElement('a');

    link.href = 'https://drive.google.com/file/d/1SUczjW2ofLHgbcI82FKTOcjVlKfV_Rmb/view?usp=drive_link';
    link.target = '_blank';

    document.body.appendChild(link);
    
    link.click();
  }

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-row w-[100vw] items-center justify-center gap-4">

        <div className='flex flex-col gap-3 justify-center text-start'>
            <motion.p
            variants={slideInFromLeft(0.5)}
            className="max-w-[600px] font-bold text-3xl text-white">
                ¡Hola, soy <a className=' bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>Dana</a>!
            </motion.p>
            <motion.p
            variants={slideInFromLeft(0.5)}
            className="text-lg text-white max-w-[600px] ">
              <p><a className='font-semibold bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>Desarrolladora Full-Stack</a>, y te invito a que conozcas un poco sobre mi y mi trabajo... </p> 
              <p>Algo que me gusta de mi, es que naturalmente me adapto a diversos entornos y tengo facilidad para conectar con las personas. Esto me permite trabajar muy bien en equipo, siempre buscando el equilibrio entre las necesidades de las personas y los objetivos del proyecto. 💪🏻</p> 
              <p>🪄 ❤️ La atención a los detalles y mi amor por la estética me llevan a buscar la perfección en la funcionalidad y el diseño, encontrando la armonía entre ambos.</p>
            </motion.p>
            <motion.div
              variants={slideInFromLeft(0.5)}
              className='flex justify-end mr-2'>
              <button onClick={downloadCV}
              className='bg-white text-black font-semibold p-3 rounded-sm hover:bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8]'>Descargar CV</button>
            </motion.div>
        </div>
        <motion.div
            variants={slideInFromTop}
            className='relative'>
            <img src={perfil} className='rounded-r-full rounded-t-full h-80 w-80'/>
            <img src={principal} className='absolute left-52 top-52 rounded-full h-56 w-56'/>
        </motion.div>
    </motion.div>
  )
};

export default AboutMeContent;