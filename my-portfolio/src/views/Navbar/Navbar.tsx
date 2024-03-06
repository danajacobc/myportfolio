import negro from '../../assets/logo/negro.png'

const Navbar = () => {
    return (
        <div className="h-16 min-w-full flex flex-row items-center bg-white font-mont text-xl gap-8">
            <div className="flex justify-start">
            <img src={negro} className='rounded-full h-14 w-14 m-2'/>
            </div>
            <div className="flex flex-row justify-center gap-8">
            <h1>SOBRE MI</h1>
            <h1>HABILIDADES</h1>
            <h1>PROYECTOS</h1>
            <h1>CONTACTO</h1>
            </div>

        </div>
    )
};

export default Navbar;