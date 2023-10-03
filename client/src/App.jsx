import {
  BrowserRouter
} from 'react-router-dom';
import Navbar from 'src/components/Navbar';
import Hero from 'src/components/Hero';
import { StarsCanvas } from 'src/components/canvas';
import { motion } from "framer-motion";
import Contact from 'src/components/Contact';
import { EarthCanvas } from "src/components/canvas";
import { slideIn, fadeIn, textVariant } from "src/utils/motion";
import {
  About, Experience, Kontak, Tech
} from './components';

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <div className='relative z-0 bg-black h-screen'>
          <Contact />
          {/* <StarsCanvas /> */}
          <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          // className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <div 
            style={{
              position: 'absolute',
              right: 30,
              bottom: 100,
            }}
          >
            <EarthCanvas />
          </div>
        </motion.div>
          <div 
            className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'
          >
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className='w-3 h-3 rounded-full bg-secondary mb-1'
                />
              </div>
            </a>
          </div>
        </div>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <About />
        </div>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Experience />
        </div>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Tech />
        </div>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Kontak />
        </div>
    </BrowserRouter>
  )
}

export default App
