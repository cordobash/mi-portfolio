import React from "react";
// import Tilt from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants/index';
import {fadeIn, textVariant} from '../utils/motion';
import { Tilt } from "react-tilt";
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
    Ingeniero en Sistemas Computacionales con habilidades en
    diversas áreas. Cuento con experiencia en el area de
    DevOps, sin embargo nunca descarto la posibilidad de aprender algo nuevo.
    <p>Mi enfoque actual es el desarrollo de software con .NET, pero no puedo negar
      que el desarrollo front end es uno de mis pasatiempos favoritos.
    </p>
    </motion.p>


   
    </>
  )
}

export default SectionWrapper(About,"acerca");