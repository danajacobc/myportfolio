import githubImg from '../../assets/contact/github.png'
import linkedinImg from '../../assets/contact/linkedin.png'
import emailImg from '../../assets/contact/email1.png'
import discordImg from '../../assets/contact/discord.png'


import { copyText, moveToLink } from '../../utils/functions'

const Redes = () => {

  const gitHub = 'https://github.com/danajacobc';
  const linkedIn = 'https://www.linkedin.com/in/danajacobc/';
  const mail = 'https://mail.google.com/mail/u/0/?fs=1&to=danajacobc@gmail.com&tf=cm';
  const userDiscord = 'danajacobc'

  return (
    <div className='flex flex-row justify-center items-center gap-2'>
      
      <button onClick={() => moveToLink(gitHub)} className='bg-white w-20 h-20 hover:bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] rounded-full flex justify-center items-center'><img src={githubImg} className='w-16 h-16'/></button>
      <button onClick={() => moveToLink(linkedIn)} className='bg-white w-20 h-20 hover:bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] rounded-full flex justify-center items-center'><img src={linkedinImg} className='w-16 h-16'/></button>
      <button onClick={() => moveToLink(mail)} className='bg-white w-20 h-20 hover:bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] rounded-full flex justify-center items-center'><img src={emailImg} className='w-16 h-16'/></button>
      <button onClick={() => copyText(userDiscord)} className='bg-white w-20 h-20 hover:bg-gradient-to-tr from-[#E1A0E7] to-[#CD60D8] rounded-full flex justify-center items-center'><img src={discordImg} className='w-16 h-16'/></button>
        
    </div>
  )
}

export default Redes