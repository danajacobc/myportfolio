import logo from '../../assets/logo/principal.png'
import githubImg from '../../assets/contact/github.png'
import linkedinImg from '../../assets/contact/linkedin.png'
import emailImg from '../../assets/contact/email1.png'

import { moveToLink } from '../../utils/functions'

const Redes = () => {

  const gitHub = 'https://github.com/danajacobc';
  const linkedIn = 'https://www.linkedin.com/in/danajacobc/';
  const mail = 'https://mail.google.com/mail/u/0/?fs=1&to=danajacobc@gmail.com&tf=cm';

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
        <h3>¡Trabajemos juntos!</h3>
        <img src={logo} className="h-48 w-48"/>
        <div id='redes' className='flex flex-row justify-center items-center gap-2'>
          <button onClick={() => moveToLink(gitHub)} className='w-20 h-20 bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] rounded-full flex justify-center items-center'><img src={githubImg} className='w-16 h-16'/></button>
          <button onClick={() => moveToLink(linkedIn)} className='w-20 h-20 bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] rounded-full flex justify-center items-center'><img src={linkedinImg} className='w-16 h-16'/></button>
          <button onClick={() => moveToLink(mail)} className='w-20 h-20 bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] rounded-full flex justify-center items-center'><img src={emailImg} className='w-16 h-16'/></button>
        </div>
    </div>
  )
}

export default Redes