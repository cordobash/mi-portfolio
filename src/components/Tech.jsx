import React from 'react'
// import {BallCanvas} from '../components/canvas/Ball';
import BallCanvas from '../components/canvas/Ball'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { technologies } from '../constants'
import { BiLogoJavascript, BiLogoReact,BiLogoVuejs,BiLogoAndroid,BiLogoTailwindCss,BiLogoMongodb} from 'react-icons/bi'
import { BiLogoJava } from 'react-icons/bi'
// import {LiaVuejs} from 'react-icons/lia';
import {SiDotnet} from 'react-icons/si';
import {FcLinux} from 'react-icons/fc';
import {TbBrandPython,TbBrandCpp} from 'react-icons/tb';
import {PiFileSqlDuotone} from 'react-icons/pi';

const Tech = () => {
  return (
    <div className='flex flex-wrap flex-row justify-center gap-3'>
      <BiLogoReact size='100px' color='cyan' className='hover:opacity-50 ' />
      <BiLogoJava size='100px' color='orange' className='hover:opacity-50' />
      <BiLogoJavascript size='100px' color='yellow' className='hover:opacity-50' />
      <BiLogoVuejs size='100px'  color='green' className='hover:opacity-50' />
      <SiDotnet size='100px'  color='violet' className='hover:opacity-50' />
      <BiLogoAndroid size='100px'  color='green' className='hover:opacity-50' />
      <FcLinux size='100px'   className='hover:opacity-50' />
      <TbBrandPython size='100px'  color='white'   className='hover:opacity-50' style={{color: 'lightgreen'}} />
      <BiLogoTailwindCss size='100px'  color='white'   className='hover:opacity-50' style={{color: '#38BDF8'}} />
      <BiLogoMongodb size='100px'  color='white'   className='hover:opacity-50' style={{color: '#0F9151'}} />
      <PiFileSqlDuotone size='100px'  color='white'   className='hover:opacity-50' style={{color: '#DE7734'}} />
      <TbBrandCpp size='100px'  color='white'   className='hover:opacity-50' style={{color: '#00599C'}} />
      







    </div>
  )
}

export default SectionWrapper(Tech,'tech');