
const ContactMe = () => {
  return (
    <div className="mt-2">
        <div className="flex flex-col justify-center items-center font-bold text-xl">
           <h1 className='bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>Contacto</h1>
        </div>
        <form>
            <input placeholder="Ingrese su email"/>
            <input placeholder="Ingrese su mensaje"/>
        </form>
    </div>
  )
}

export default ContactMe;