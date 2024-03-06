import principal from './assets/logo/principal.png';
import StarsCanvas from './components/StarsBackground/StarsBackground';
import Navbar from './views/Navbar/Navbar';

function App() {
  return (
    <div className='h-full min-w-full flex flex-col items-center bg-black'>
      <StarsCanvas />
      <Navbar />
    <div className='h-full p-8 flex flex-col justify-center items-center'>
      <h1 className='text-center text-5xl mb-2 font-mont text-white'>Hola mundo! </h1>
      <h2 className='text-center text-3xl mb-4 font-mont text-white'>Portfolio en proceso...</h2>

      <img src={principal} className='rounded-full h-80 w-80 justify-center'/>
    </div>
    </div>
  )
}

export default App
