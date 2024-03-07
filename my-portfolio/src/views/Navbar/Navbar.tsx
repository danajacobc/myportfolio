import negro from '../../assets/logo/negro.png'

const Navbar = () => {
    return (
        <div className="h-16 min-w-full flex flex-row justify-between items-center bg-white font-mont font-semibold text-xl p-4">
            <div className="w-20">
            <img src={negro} className='rounded-full h-14 w-14'/>
            </div>
            
            <div className="flex flex-row gap-8">
            <h1>SOBRE MI</h1>
            <h1>HABILIDADES</h1>
            <h1>PROYECTOS</h1>
            <h1>CONTACTO</h1>
            </div>

            <div></div>

        </div>
    )
};

export default Navbar;