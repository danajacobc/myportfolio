// import FormContact from "../../components/ContactMe/FormContact";
import Redes from "../../components/ContactMe/Redes";

const ContactMe = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-2xl">
           <h1 className='bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>Contacto</h1>
        </div>
       
        <div className="flex flex-col justify-center items-center gap-8">
          <Redes /> 
        </div>

          {/* <div className="w-1/2">
            <FormContact />
          </div> */}
        
    </div>
  )
}

export default ContactMe;