import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'

import { SectionWrapper } from '../hoc'
import { fadeIn,textVariant } from '../utils/motion'

// import imagen from '../assets/invernaderoDom.jpg'
// import imagen2 from '../assets/hackmtylogo.svg'


import { expAdicionales } from '../constants'



const Experiencia = ({index,tipo,imagen,nombre,lugar,logo_evento,fecha}) =>{
  return(
    <motion.div
      variants={fadeIn("","spring",index * 0.5, 0.75)}
      className='bg-black-200 h-[420px] p-10 rounded-3xl xs:w-[320px] w-full inline-flex m-[10px]'

    >
      <div className='relative w-full h-[170px] gap-5'>
        <p className={`${styles.sectionSubText} align-center justify-center items-center mb-5 flex`} >{tipo}</p>
          {/* Imagen Experiencia */}
        <img src={imagen} alt='imagen'
          className='w-full h-full object-cover rounded-none rounded-tr-3xl rounded-bl-3xl'
        />
          
            {/* Titulo Experiencia */}
            <div className='align-center  items-center justify-center flex font-bold mt-[12px]'>
              <p>{nombre} </p>
              </div>
              <p className='align-center items-center justify-center flex text-secondary mt-[2px]'>{lugar}</p>
                {/* Logo experiencia */}
              <div className='items-center justify-center m-[4px] rounded-full' align="center">
              <img src={logo_evento} alt='imagen' className=' align-center  w-[40px] h-[40px] 
              '
                
              />
              </div>
              
                {/* Año de la experiencia */}
            <span className='align-center  items-center justify-center flex text-gray-500 '>
              {fecha}</span>
                      
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
      {/* <Experiencia /> */}
      
      {expAdicionales.map((elemento,index) => {
        return(
          <Experiencia
          key={index}
          index={index}
          tipo={elemento.tipo}
          imagen={elemento.imagen}
          nombre={elemento.nombre}
          lugar={elemento.lugar}
          logo_evento={elemento.logo_evento}
          fecha={elemento.fecha}
          />
          )
        })}
      

        
      </div>

      <div className='flex flex-row items-center justify-center h-[50px] m-[30px] pb-[20px] '>
              <button className=' font-white font-bold 
                rounded-full h-[50px] w-[300px] hover:bg-violet-500 transition duration-300 ease-linear  hover:text-white hover:text-bold    
               '
              onClick={() => window.open('https://www.github.com/IGerardoJR','_blank')}
               >
                Ver certificaciones
              </button>
      </div>
    

    </div>
  )
}

export default SectionWrapper(Adicionales); 