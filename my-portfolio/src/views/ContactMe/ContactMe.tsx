import FormContact from "../../components/ContactMe/FormContact";
import logo from '../../assets/logo/principal.png'

const ContactMe = () => {
  return (
    <div className="mt-2">
        <div className="flex flex-col justify-center items-center font-bold text-2xl">
           <h1 className='bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>Contacto</h1>
        </div>
        <div className="flex flex-row justify-center items-center gap-8">
          <div className="w-1/2 flex flex-col justify-center items-center gap-8">
            <h3>¡Trabajemos juntos!</h3>
            <img src={logo} className="h-48 w-48"/>
          </div>
          <div className="w-1/2">
            <FormContact />
          </div>
        </div>
    </div>
  )
}

export default ContactMe;