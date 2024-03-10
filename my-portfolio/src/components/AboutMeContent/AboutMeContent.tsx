import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '../../utils/motion';
import principal from '../../assets/logo/principal.png';
import perfil from '../../assets/perfil/p-1.jpg';

const AboutMeContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-row items-center justify-center z-[20] font-bold">

        <div className='flex flex-col gap-5 justify-center text-start'>
            <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-white max-w-[600px]">
                Soy Desarrolladora Full-Stack, y te invito a que veas los proyectos en los que trabaje...
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