import React from "react";
// import Tilt from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';

import {fadeIn, textVariant} from '../utils/motion';
// import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";




const About = () => {
  return (
   <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduccion</p>
      <h2 className={styles.sectionHeadText}>Acerca de mi</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
    Soy un desarrollador de software con aptitudes en el desarrollo de aplicaciones web,móviles
    y de escritorio.
    
    <p>
      A nivel profesional he tenido acercamientos en el area de Dev Ops.
      Sin embargo mi enfoque principal en la actualidad es el desarrollo de software con tecnologias .NET.
      
      </p>


    </motion.p>


   
    </>
  )
}

export default SectionWrapper(About,"acerca");