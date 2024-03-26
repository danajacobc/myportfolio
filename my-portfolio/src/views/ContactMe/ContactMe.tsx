import logo from '../../assets/logo/principal.png'
import Redes from "../../components/ContactMe/Redes";


const ContactMe = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 z-10">
      <div className='flex flex-col justify-center items-center gap-2'>
        <h2 className='font-bold text-2xl bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>¡TRABAJEMOS JUNTOS!</h2>
        <p className='font-semibold text-xl'>Si te interesa mi perfil y deseas que trabajemos en conjunto, ¡no dudes en contactarme!</p>
      </div>

      <img src={logo} className="h-56 w-56"/>
          
      <Redes /> 
    </div>
  )
}

export default ContactMe;