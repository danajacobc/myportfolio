
const FormContact = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 ">
        <form>
            <div className="flex flex-col gap-2">
                <label>Nombre</label>
                <input 
                    type="text"
                    placeholder="Escribe tu nombre..."
                    className=" rounded-xl h-8 p-2"
                />
                <label>Email</label>
                <input 
                    type="email"
                    placeholder="Escribe tu email..."
                    className=" rounded-xl h-8 p-2"
                />
                <label>Mensaje</label>
                <textarea 
                    rows={8}
                    placeholder="Escribe el mensaje..."
                    className="rounded-xl p-2"
                ></textarea>
                <button className='w-24 bg-white text-black font-semibold p-3 rounded-sm hover:bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8]'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default FormContact