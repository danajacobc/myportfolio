import { scrollToTop } from '../../utils/functions'
import arrowUp from '../../assets/arrows/scroll-up.png'

const ScrollToUp = () => {

  return (
    <div className='fixed bottom-6 right-10 z-10'>
        <button
          className="flex justify-center items-center top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 mx-4 rounded-full bg-white hover:bg-gradient-to-br from-[#E1A0E7] to-[#AC48B5] transition hover:duration-300 hover:scale-110 ease-in-out h-14 w-14"
          onClick={scrollToTop}
        >
          <img src={arrowUp} />
        </button>
    </div>
  )
}

export default ScrollToUp