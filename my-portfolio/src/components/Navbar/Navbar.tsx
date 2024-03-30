import { useState } from 'react';
import negro from '../../assets/logo/negro.png'
import menu from '../../assets/arrows/menu.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    

    return (
        <div className="flex flex-wrap">
            <div className="h-16 w-full flex flex-row justify-between items-center bg-gradient-to-br from-[#E1A0E7] to-[#AC48B5] text-black font-semibold text-lg">
                <div className="w-20 m-6">
                    <img src={negro} className='rounded-full h-14 w-14'/>
                </div>
                
                <div className="hidden md:flex flex-row gap-8 z-10">
                    <a href='#aboutme'>SOBRE MÍ</a>
                    <a href='#skills'>TECNOLOGÍAS</a>
                    <a href='#projects'>PROYECTOS</a>
                    <a href='#contact'>CONTACTO</a>
                </div>

                <div></div>

                <div className="md:hidden flex items-center mr-6 z-10" >
                    <div className={`md:hidden ${isOpen ? "flex" : "hidden"} flex-col items-center rounded-xl mt-24 p-2 bg-gradient-to-tr from-[#e8bbec] to-[#E1A0E7] z-10`}>
                        <a href='#aboutme' >SOBRE MÍ</a>
                        <a href='#skills' >TECNOLOGÍAS</a>
                        <a href='#projects' >PROYECTOS</a>
                        <a href='#contact' >CONTACTO</a>
                    </div>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <img src={menu} className="w-8 h-8"/>
                    </button>
                    
                </div>

                

            </div>
        </div>
    )
};

export default Navbar;