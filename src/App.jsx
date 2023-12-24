// Importando las librerias necesarias
import { BrowserRouter } from "react-router-dom";
import {
  Contact,
  Experience,
  About,
  Hero,
  Works,
  Tech,
  StarsCanvas,
  Navbar,
} from "./components";
import "./index.css";
import Adicionales from "./components/Adicionales";

function App() {
  return (
    <BrowserRouter>
      <div
        className="relative z-0 bg-primary overflow-x-hidden overflow-y-hidden"
        translate="no"
      >
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <Experience />
        <Adicionales />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
