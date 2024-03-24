import logo from '../../assets/logo/principal.png'
import Redes from "../../components/ContactMe/Redes";


const ContactMe = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 z-10">
      <div className='w-80 flex flex-col justify-center items-center gap-3'>
        <h2 className='font-bold text-2xl bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>¡Trabajemos juntos!</h2>
        <p className='font-semibold text-xl'>Si te interesa mi perfil y deseas que trabajemos en conjunto, ¡no dudes en contactarme!</p>
      </div>

      <img src={logo} className="h-56 w-56"/>
          
      <Redes /> 
    </div>
  )
}

export default ContactMe;