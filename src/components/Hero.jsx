import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles';
import  ComputersCanvas from './canvas/Computers';
import { SectionWrapper } from '../hoc';
import CustomButton from './CustomButton';
// Importamos iconos respectivos a utilizar en esta area.
// Github icon
import {GrGithub as GithubIcon }  from 'react-icons/gr'
// Linkedin icon
import {BsLinkedin as LinkedInIcon } from 'react-icons/bs'
import {RiFilePaper2Line as CvIcon} from 'react-icons/ri'

const Hero = () => {

  const universalUrls = {
    profilePic: 'https://lardy-aids.000webhostapp.com/pic.jpg',
    githubProfile: 'https://github.com/IGerardoJR',
    linkedinProfile: 'https://www.linkedin.com/in/isaias-gerardo-cordova-palomares-1586a2244/',
    cvResource: 'https://lardy-aids.000webhostapp.com/CV%20-%20Isaias%20Cordova-1.pdf',
  }
  return (
    <>
      <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex
        flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
        <div className=''>
          <h1 className={`${styles.heroHeadText} text-white`}>Hola, soy <span className='text-[#915eff]'>Isaias</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Desarrollo de software con <br className='sm:block hidden'/> ASP.NET Core, React, Node.js y más
          </p>


          {/* Enlaces o redes sociales */}
          <div className='h-[50px] w-[700px]' align="left" >
            {/* Github */}
            <a href="https://github.com/IGerardoJR"
             alt='githubProfile'
            target='_blank'
            className='mt-10 h-[40px] w-[150px] bg-black font-white font-bold inline-flex  items-center justify-center
            rounded-full cursor-pointer  mr-[25px] hover:animate-bounce'
            onClick={() => window.open('https://github.com/IGerardoJR')}
            ><GithubIcon size='25px' style={{marginRight: '5px'}}/> Github</a>
            {/* Linkedin */}

            <a 
            href={universalUrls.linkedinProfile}
            target='_blank'
            className='mt-10 h-[40px] w-[130px] bg-blue-600 font-white font-bold  inline-flex items-center justify-center
            rounded-full  mr-[25px] hover:animate-bounce
            '
            >
              <LinkedInIcon size='25px' style={{marginRight: '5px'}}/>Linkedin 
            </a>
          {/* Curriculum Vitae */}
          <a 
            href={universalUrls.cvResource}
            target='_blank'
            className='mt-10 h-[40px] w-[130px] bg-green-600 font-white font-bold  inline-flex items-center justify-center
            rounded-full  mr-[25px] hover:animate-bounce
            '
            >
              <CvIcon size='25px' style={{marginRight: '5px'}}/>Ver CV 
            </a>
          
         
          </div>
        </div>

        {/* Imagen */}
        <img src={universalUrls.profilePic} alt='profile-pic'
         style={{
          'borderRadius': '70% 30% 73% 27% / 28% 53% 47% 72%',
          'width': '430px',
          'height': '450px',
          'margin': '0 auto'  
        }} />
           
        </div>
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center
          items-center'>
            <a href="#about">
              <div className='w-[35px] h-[64px] rounded-full border-2  border-secondary
              flex justify-center items-start p-2'>
                <motion.dev
                animate={{
                  y:[0,24,0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary  mb-1"
                />
              </div>
            </a>
          </div>
      </section>
    </>
  )
}

export default  SectionWrapper(Hero,'hero')