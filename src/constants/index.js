
import {
    
    // Imagenes utilizadas para el area de proyecos
    tyson,
    dotstall,
    portfolio,
    pyspark,
    recetasimage,
    librosnet,
    invernaderoDomImg,
    // Logos - Adicionales
    hackmty,
    itsnpedro,
    icpclogo,
    tecnmlogo,
    banortehacklogo,
    siticlogo,
    // Certificados, diplomas o reconocimientos
    certificadoHackMty,
    certificadoSanPedro,
    certificadoIcpc,
    ccupImage,
    logoUdemy,
    udemyCertAsp,
    hackBanorte,
    recoPiedras,
    recoSitic,
    github,
    herobg
  } from "../assets";
  


  // Links que se mostraran en la barra de navegacion y su respectivo id
  export const navLinks = [
    {
      id: "acerca",
      title: "Acerca de mi",
    },
    {
      id: "proyectos",
      title: "Proyectos",
    },
    {
      id: "experiencia",
      title: "Experiencia",
    },
    {
      id: "contacto",
      title: "Contacto",
    },
  ];
  

export const Tags = ["Kubernetes","Linux","ASP.NET","Help Desk","Git","SQL"];

  const paletaColores = {
    primary: "#002554",
    secondary: "#aaa6c3",
    shell: "#A5F185",
    html: "#E44D26",
    css: "#264DE4",
    tailwind: "#38B2AC",
    javascript: "#F7DF1E",
    react: "#61DBFB",
    csharp: "#239120",
    nodejs: "#339933",
    swift: "#FA7343",
    linux: "#FCC624",
    flutter: "#02569B",
    java: "#007396",
    blazor: "#512BD4",
    windowManager: "#FE7E7E",
    vue: "#41B883",
    mongo: "#47A248",
    arduino: "#00979D",
    cpp: "#00599C",
    firebase: "#FFCA28",
    android: "#3DDC84",
    lua: "#2C2D72",
    rasi: "#A8FF97",
    ini: "#FFD580",
    ipynb: "#F37726",
    python: "#3776AB",
    aspnet: "#512BD4",
    
    
    
  }

  const experiences = [
    {
      title: "Practicante",
      company_name: "Tyson Foods",
      icon: tyson,
      iconBg: "#002554",
      date: "Enero 2023 - Junio 2023",
      points: [
        "Resolucion de problematicas a usuarios(HelpDesk).",
        "Mantenimiento a software empresarial.",
        "Manejo de bases de datos relacionales.",
        "Monitoreo de microservicios con Kubernetes.",
      ],
    },
    
    
 
  ];

  export const expAdicionales = [
    {
      tipo: 'Concurso',
      imagen: certificadoHackMty,
      nombre: 'Hack Mty',
      lugar: 'Tecnologico de Monterrey',
      logo_evento: hackmty,
      fecha: 'Septiembre 2022',
    },
    {
      tipo: 'Imparticion de Taller',
      imagen: recoPiedras,
      nombre: 'Django X Linux',
      lugar: 'Tecnm Piedras Negras',
      logo_evento: tecnmlogo,
      fecha: 'Noviembre 2022',
    },
    {
      tipo: 'Asistencia a Taller',
      imagen: recoSitic,
      nombre: 'Desarrollo de aplicaciones empresariales',
      lugar: 'SITIC',
      logo_evento: siticlogo,
      fecha: 'Sep 2022 - Nov 2022'
    },
  
    {
      tipo: 'Concurso',
      imagen: hackBanorte,
      nombre: 'Hack Banorte',
      lugar: 'Torre Koi',
      logo_evento: banortehacklogo,
      fecha: 'Mayo 2023'
    },
    {
      tipo: 'Concurso',
      imagen: certificadoIcpc,
      nombre: 'ICPC Mexico',
      lugar: 'Online',
      logo_evento: icpclogo,
      fecha: 'Mayo 2022',
    },
    {
      tipo: 'Concurso',
      imagen: certificadoSanPedro,
      nombre: 'IT San Pedro Contest',
      lugar: 'Online',
      logo_evento: itsnpedro,
      fecha: 'Mayo 2022',
    },
    {
      tipo: 'Concurso',
      imagen: ccupImage,
      nombre: 'Coding Cup 2022',
      lugar: 'Online',
      logo_evento: tecnmlogo,
      fecha: 'Octubre 2022',
    },
    {
      tipo: 'Curso',
      imagen: udemyCertAsp,
      nombre: 'ASP.Net MVC and C#',
      lugar: 'Udemy',
      logo_evento: logoUdemy,
      fecha: 'Agosto 2023',
    }
  ]
  
  
  const projects = [
    {
      name: "Dotstaller",
      description: "Script para la instalacion y automatizacion de mis archivos personalizados utilizados en el gestor de ventanas BSPWM, el script de momento cuenta con compatibilidad con Arch Linux",
      tags: [
        {
          name: "Linux",
          color: paletaColores.linux,
        },
        {
          name: "Shell",
          color: paletaColores.shell,
        },
        {
          name: "bspwm",
          color: paletaColores.windowManager,
        }
      ],
      image: dotstall,
      source_code_link: "https://github.com/IGerardoJR/Dotstaller",
    },
    {
      name: "Recetas JS",
      description: "Sitio web de recetas de cocina, con la finalidad de practicar mis habilidades en el desarrollo web, el sitio web cuenta con un buscador de recetas, un apartado de recetas favoritas, y un apartado de recetas creadas por el usuario.",
      tags: [
        {
          name: "Vue",
          color: paletaColores.vue,
        },
        {
          name: "Nodejs",
          color: paletaColores.nodejs,
        },
        {
          name: "Javascript",
          color: paletaColores.javascript,
        },
        {
          name: "Mongodb",
          color: paletaColores.mongo,
        }
      ],
      image: recetasimage,
      source_code_link: "https://github.com/IGerardoJR/RecetasJS",
    },
    {
      name: "Invernadero Domotizado",
      description: "Este proyecto tuvo como finalidad el desarrollo de un sistema de control de temperatura y humedad para un invernadero, el sistema cuenta con un panel de control web, una aplicacion movil y un sistema de control de temperatura y humedad.",
      tags: [
        {
          name: "Arduino",
          color: paletaColores.arduino,
        },
        {
          name: "C++",
          color: paletaColores.cpp,
        },
        {
          name: "Firebase",
          color: paletaColores.firebase,
        },
        {
          name: "Android",
          color: paletaColores.android,
        }

      ],
      image: invernaderoDomImg,
      source_code_link: "https://github.com/IGerardoJR/InvernaderoDomotizado-x-Arduino",
    },
    {
      name: "Portafolio Personal",
      description: "La finalidad del desarrollo de un portafolio es mostrar ante el publico la experiencia, proyectos y certificaciones que he obtenido a lo largo de mi carrera profesional, asi como tambien mostrar mis habilidades en el area de IT.",
      tags: [
        {
          name: "React",
          color: paletaColores.react,
        },
        {
          name: "Javascript",
          color: paletaColores.javascript,
        },
        {
          name: "Tailwind",
          color: paletaColores.tailwind,
        }
      ],
      image: portfolio,
      source_code_link:"https://github.com/IGerardoJR",
    },
    {
      name: "PySpark",
      description:"Proyecto escolar realizado en la materia de Big Data, con la finalidad de manipular datos de un archivo csv, y realizar un analisis de datos con pyspark e almacenarlos en una base de datos no relacional.",
      tags: [
        {
          name: "Python",
          color: paletaColores.python,
        },
        {
          name: "Jupyter",
          color: paletaColores.ipynb,
        },
        {
          name: "MongoDB",
          color: paletaColores.mongo,
        }
      ],
      image: pyspark,
      source_code_link: "https://github.com/IGerardoJR/PySpark-MongoDB/blob/main/PyMongo.ipynb"
    },
    {
      name: "LibrosNet",
      description: "Aplicacion piloto realizada para practicar los fundamentos y bases de ASP.Net. La realizacion de este proyecto me permitio fortalecer mis conocimientos en la parte web y de programacion en C#.",
      tags:[
        {
          name: "Asp.Net",
          color: paletaColores.aspnet,
        },
        {
          name: "html",
          color: paletaColores.html,
        },
        {
          name: "css",
          color: paletaColores.css,
        },
        {
          name: "csharp",
          color: paletaColores.csharp,
        },
      ],
      image: librosnet,
      source_code_link: "https://github.com/IGerardoJR/LibrosApp",
    },
 
  ];
  
  export {  experiences, projects };