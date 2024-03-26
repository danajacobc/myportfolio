import { useState } from 'react';
import negro from '../../assets/logo/negro.png'

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
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>

                <div className={`w-full md:hidden ${isOpen ? "flex" : "hidden"} flex-col items-center top-16 left-0 right-0 bg-gradient-to-tr from-[#e8bbec] to-[#E1A0E7] z-10`}>
                    <a href='#aboutme' className="py-2">SOBRE MÍ</a>
                    <a href='#skills' className="py-2">TECNOLOGÍAS</a>
                    <a href='#projects' className="py-2">PROYECTOS</a>
                    <a href='#contact' className="py-2">CONTACTO</a>
                </div>

            </div>
        </div>
    )
};

export default Navbar;