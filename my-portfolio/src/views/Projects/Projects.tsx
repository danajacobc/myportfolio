import Carrousel from "../../components/Projects/Carrousel";


const Projects = () => {

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      
        <div id="anclar" className="font-bold text-2xl" >
           <h1 className='bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] text-transparent bg-clip-text'>PROYECTOS REALIZADOS</h1>
        </div>
        
        
        <div id="cambia">
          <Carrousel />
        </div>
        
    </div>
  )
}

export default Projects;