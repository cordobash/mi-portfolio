import React from "react";
import { SectionWrapper } from "../hoc";

import {BsPaperclip as Clip} from 'react-icons/bs'

function CustomButton ({uri,altText}) {

    return(
        <div align="center">
            <a
                className="bg-violet-900 hover:bg-violet-700 font-white font-bold text-center text-[20px]
                rounded-[25px] ancleSize h-[74px] w-[200px] justify-center items-center flex mb-5 border-inherit border-2"
                href='https://lardy-aids.000webhostapp.com/CV%20-%20Isaias%20Cordova-1.pdf'
                alt={altText}
                download
                target="_blank"
                >
               <Clip  size='35px' style={{
                fontSize: '24px',
                marginRight: '8px',

               }}/> Ver CV </a> 
            
        </div> 
    )
}
export default SectionWrapper(CustomButton,'custom')