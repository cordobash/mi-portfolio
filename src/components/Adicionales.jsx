import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'

import { SectionWrapper } from '../hoc'
import { fadeIn,textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import imagen from '../assets/invernaderoDom.jpg'

const Experiencia = ({index,testimonial,name,designation,company,image}) =>{
  return(
    <motion.div
      variants={fadeIn("","spring",index * 0.5, 0.75)}
      className='bg-black-200 h-[400px] p-7 rounded-3xl xs:w-[320px] w-full'

    >
      <div className='relative w-full h-[170px] gap-5'>
        <p className={`${styles.sectionSubText} align-center justify-center items-center mb-5 flex`} >Concurso</p>
          {/* Logo(Hack, Curso o Institucion ) */}
        <img src={imagen} alt='imagen'
          className='w-full h-full object-cover rounded-none'
        />
          
            {/* Titulo Experiencia */}
            <p className='align-center  items-center justify-center flex font-bold mt-[12px]'>
              Hack Mty
              </p>
              <div className='items-center justify-center m-[4px]' align="center">
              <img src={imagen} alt='imagen' className='rounded-full align-center  w-[35px] h-[35px] cursor-pointer
              '
                onClick={() => window.open('https://hackmty.com/', '_blank')}
              />
              </div>
              {/* Imagen Experiencia */}
              
                {/* Año de la experiencia */}
            <span className='align-center  items-center justify-center flex text-gray-500 '>
              2022</span>
            
          
          
            </div>
        
    
    </motion.div>
  )  
}

const Adicionales = () => {
  return (
    <div
      className='mt-12 bg-black-100 rounded-[20px]'
    >
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h[300px]`}>
        <motion.div
          variants={textVariant()}
        >

            <p className={styles.heroSubText}>Experiencias adicionales y certificaciones</p>
            <h2 className={styles.sectionHeadText
            }>Experiencias adicionales</h2>
            <p className='text-gray-400'>Las experiencias adicionales han contribuido a mi desarrollo academico y profesional, 
            ademas de conocer nuevas amistades y entornos. </p>
        </motion.div>

        <div
          className={`${styles.paddingX} -mt-10 pb-14 flex flex-wrap gap-5`}
          >
           
            
          
        </div>
      <Experiencia />

        
      </div>

      <div className='flex flex-row items-center justify-center h-[50px] m-[30px] pb-[20px]'>
              <button className=' font-white font-bold  inline-block hover:animate-ping'>
                Ver certificaciones
              </button>
      </div>
    

    </div>
  )
}

export default SectionWrapper(Adicionales); 