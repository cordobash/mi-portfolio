import React from 'react'
// import {BallCanvas} from '../components/canvas/Ball';
import BallCanvas from '../components/canvas/Ball'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { technologies } from '../constants'


const Tech = () => {
  return (
    <div className='flex flex-wrap flex-row justify-center gap-10'>
      {technologies.map((tech, index) => (
        <div className='w-28 h-28' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,'tech');