import './navbar.scss'
import negro from '../../assets/logo/negro.png'

const Navbar = () => {
    return (
        <div className="navbar flex flex-row justify-between items-center bg-white text-black font-semibold text-xl p-4">
            <div className="w-20">
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