import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '../../utils/motion';
import principal from '../../assets/logo/principal.png';
import perfil from '../../assets/perfil/p-1.jpg';

const AboutMeContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-row items-center justify-center w-full z-[20] p-6 gap-2 font-mont font-bold">

        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromTop}
            className='w-[400px] py-[15px] px-[4px]'>
            <img src={principal} className='rounded-full h-64 w-64'/>
            </motion.div>
            <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-white my-5 max-w-[600px]">
                Soy Desarrolladora Full-Stack, y te invito a que veas los proyectos que he realizado...
            </motion.p>
        </div>
        <img src={perfil} className='h-80 w-80'/>
    </motion.div>
  )
};

export default AboutMeContent;