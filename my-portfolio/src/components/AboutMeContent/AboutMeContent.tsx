import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '../../utils/motion';
import principal from '../../assets/logo/principal.png';
import perfil from '../../assets/perfil/p-1.jpg';

const AboutMeContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-row w-[100vw] items-center justify-center z-[20]">

        <div className='flex flex-col gap-5 justify-center text-start'>
            <motion.p
            variants={slideInFromLeft(0.5)}
            className="text-white max-w-[600px] font-bold text-xl">
                ¡Hola! Mi nombre es Dana.
            </motion.p>
            <motion.p
            variants={slideInFromLeft(0.5)}
            className="text-lg text-white max-w-[600px]">
                Soy Desarrolladora Full-Stack, y te invito a que conozcas un poco sobre mi y mi trabajo...
            </motion.p>
        </div>
        <motion.div
            variants={slideInFromTop}
            className='relative'>
            <img src={perfil} className='h-80 w-80'/>
            <img src={principal} className='absolute left-52 top-52 rounded-full h-56 w-56'/>
            </motion.div>
    </motion.div>
  )
};

export default AboutMeContent;