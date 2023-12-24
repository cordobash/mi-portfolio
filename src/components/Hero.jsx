import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";

// Importamos iconos respectivos a utilizar en esta area.
// Github icon
import { GrGithub as GithubIcon } from "react-icons/gr";
// Linkedin icon
import { BsLinkedin as LinkedInIcon } from "react-icons/bs";

const Hero = () => {
  const universalUrls = {
    profilePic: "https://lardy-aids.000webhostapp.com/pic.jpg",
    githubProfile: "https://github.com/IGerardoJR",
    linkedinProfile:
      "https://www.linkedin.com/in/isaias-gerardo-cordova-palomares-1586a2244/",
  };

  return (
    <section className="w-full h-[600px] mx-auto ">
      <div
        className={`${styles.paddingY} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex
        flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hola, soy{" "}
            <span className="text-[#915eff] sm:block xs:min-h[320px] flex">
              Isaias
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Desarrollo software con{" "}
            <br className="sm:block  xs:min-h[320px] block  " /> ASP.NET Core,
            React, Node.js y más
          </p>

          {/* Separacion */}
          {/* Enlaces o redes sociales */}
          <div className="h-[50px] w-[700px] xs:block">
            {/* Github */}
            <a
              href={universalUrls.githubProfile}
              alt="githubProfile"
              target="_blank"
              className="mt-10 h-[40px] w-[150px] bg-black font-white font-bold lg:inline-flex  items-center justify-center
            rounded-full cursor-pointer  mr-[15px] hover:bg-black-100 hover:transition-colors hover:duration-200 xs:min-h[320px] flex "
              onClick={() => window.open("https://github.com/IGerardoJR")}
            >
              <GithubIcon size="25px" style={{ marginRight: "7px" }} /> Github
            </a>

            {/* Linkedin */}
            <a
              href={universalUrls.linkedinProfile}
              target="_blank"
              className="mt-10 h-[40px] w-[150px] bg-blue-600 hover:bg-blue-500 hover:transition-colors hover:duration-200 font-white font-bold  lg:inline-flex items-center justify-center
            rounded-full  xs:min-h[320px] flex mr-[15px] xs:min-[320px] 
            "
            >
              <LinkedInIcon size="25px" style={{ marginRight: "7px" }} />{" "}
              Linkedin
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center mt-1
          items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-full border-2  border-secondary
              flex justify-center items-start p-2 max-lg:hidden"
          >
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary  mb-1 "
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero);
