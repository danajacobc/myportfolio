import negro from '../../assets/logo/negro.png'

const Navbar = () => {
    return (
        <div className="h-16 w-full flex flex-row justify-between items-center bg-gradient-to-br from-[#E1A0E7] to-[#AC48B5] text-black font-semibold text-lg">
            <div className="w-20 m-6">
                <img src={negro} className='rounded-full h-14 w-14'/>
            </div>
            
            <div className="flex flex-row gap-8 z-10">
                <a href='#aboutme'>SOBRE MÍ</a>
                <a href='#skills'>TECNOLOGÍAS</a>
                <a href='#projects'>PROYECTOS</a>
                <a href='#contact'>CONTACTO</a>
            </div>

            <div></div>

        </div>
    )
};

export default Navbar;