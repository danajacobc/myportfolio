import negro from '../../assets/logo/negro.png'

const Navbar = () => {
    return (
        <div className="h-16 w-full flex flex-row justify-between items-center bg-gradient-to-br from-[#E1A0E7] to-[#AC48B5] text-black font-bold text-lg">
            <div className="w-20 m-6">
                <img src={negro} className='rounded-full h-14 w-14'/>
            </div>
            
            <div className="flex flex-row gap-8">
                <a href=''>SOBRE MI</a>
                <a href=''>HABILIDADES</a>
                <a href=''>PROYECTOS</a>
                <a href=''>CONTACTO</a>
            </div>

            <div></div>

        </div>
    )
};

export default Navbar;