import React from 'react'

import { SectionWrapper } from '../hoc'

import { BiLogoJavascript, BiLogoReact,BiLogoVuejs,BiLogoAndroid,BiLogoTailwindCss,BiLogoMongodb,BiLogoPython} from 'react-icons/bi'
import { BiLogoJava } from 'react-icons/bi'

import {SiDotnet} from 'react-icons/si';
import {FcLinux} from 'react-icons/fc';
import {TbBrandCpp} from 'react-icons/tb';
import {PiFileSqlDuotone} from 'react-icons/pi';
import {BsGit} from 'react-icons/bs';
import { TbBrandFlutter } from "react-icons/tb";

const Tech = () => {
  return (
    <div className='flex flex-wrap flex-row justify-center gap-3'>
      <TbBrandFlutter size='100PX' color='orange' className='hover:opacity-50'style={{color: '#38BDF8'}} />
      <BiLogoReact size='100px' color='cyan' className='hover:opacity-50 ' />
      <SiDotnet size='100px'  color='violet' className='hover:opacity-50' />
      <BiLogoJava size='100px' color='orange' className='hover:opacity-50' />
      <FcLinux size='100px'   className='hover:opacity-50' />
      <BiLogoJavascript size='100px' color='yellow' className='hover:opacity-50' />
      <BsGit size='100px'  color='orange'   className='hover:opacity-50' />
      <BiLogoVuejs size='100px'  color='green' className='hover:opacity-50' />
      <BiLogoAndroid size='100px'  color='green' className='hover:opacity-50' />
      <BiLogoPython size='100px'  color='white'   className='hover:opacity-50' style={{color: 'gray'}} />
      <BiLogoTailwindCss size='100px'  color='white'   className='hover:opacity-50' style={{color: '#38BDF8'}} />
      <BiLogoMongodb size='100px'  color='white'   className='hover:opacity-50' style={{color: '#0F9151'}} />
      <PiFileSqlDuotone size='100px'  color='white'   className='hover:opacity-50' style={{color: '#DE7734'}} />
      <TbBrandCpp size='100px'  color='white'   className='hover:opacity-50' style={{color: '#00599C'}} />

    </div>
  )
}

export default SectionWrapper(Tech,'tech');