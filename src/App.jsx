// Importando las librerias necesarias
import { BrowserRouter } from "react-router-dom";
import {Contact, Experience,About, Feedbacks, Hero, Works,Tech, StarsCanvas, Navbar} from './components';
import './index.css'


function App() {
  return (
        <BrowserRouter>
          <div className="relative z-0 bg-primary" translate="no">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
              
            </div>
            <About />
            <Tech />
            <Experience />
          
          
            <Works />
            {/* <Feedbacks /> */}
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
             
              
            </div>
          </div>
        </BrowserRouter>
  )
}

export default App
