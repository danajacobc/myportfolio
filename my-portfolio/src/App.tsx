// Components //
import StarsCanvas from './components/StarsBackground/StarsBackground';
import AboutMe from './views/AboutMe/AboutMe';
import Navbar from './views/Navbar/Navbar';


function App() {
  return (
    <div className='h-full min-w-full flex flex-col items-center bg-black'>
      <StarsCanvas />
      <Navbar />
      <AboutMe />
    </div>
  )
}

export default App
