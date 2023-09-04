import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import {styles} from '../styles';
import {experiences} from '../constants/index';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
// Importamos las tags
import { Tags } from '../constants/index';
import '../index.css'

const ExperienceCard = ({experience}) => {
 return( <VerticalTimelineElement
    contentStyle={{ background: '#1d1736', 
  color: '#fff' }}

    contentArrowStyle={{borderRight: '15px solid #232631'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon}
        alt={experience.company_name}
        className='w-[80%] h-[60%] object-contain' />
      </div>
    }
  >
   <div>
    <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
    <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>{experience.company_name}</p>
   </div>

   <ul className='mt-5 list-disc ml-5 space-y-2'>
    {experience.points.map((
      point,index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[19px] pl-1 tracking-wider'
        >
          {point}
        </li>
    ))}

   </ul>
{/* Tags */}
   <h1 className='text-white text-bold mt-[5px] mb-[5px] text-[19px] xs:text-[15px]'>Tags:</h1>
   {/* Base para los elementos */}
 
        {Tags.map((tag,index)=> (
            <div className='inline-flex max-w-screen-sm ml-1 mt-2 mb-2  border-white border-2 bg-black rounded-full'>
              <div className='h-[30px] w-[90px] rounded-full border-white  flex p-1 justify-center items-center '>
                    <span key={index} className='flex text-[13px]'>
                          {tag}
                        </span>
                </div>
              </div>
        ))}
  
  </VerticalTimelineElement>
)}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Experiencia</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience,index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'experiencia') 