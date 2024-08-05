'use client'

//HOME PAGE

//Escribiendo el componente dentro del div, directamente hace las importaciones
import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import WhatWeDo from '@/src/components/WhatWeDo/WhatWeDo';
import OurDiff from '@/src/components/OurDiff/OurDiff';
import { motion, unseAnimation, useAnimation  } from "framer-motion";
import HowItWorks from '@/src/components/HowItWorks/HowItWorks';
import WhoWeInvest from '@/src/components/WhoWeInvest/WhoWeInvest';
import Testimonials from '@/src/components/Testimonials/Testimonials';
import Footer from '@/src/components/Footer/Footer';
import Portfolio from '@/src/components/OurDiff/Portfolio';
import AboutUs from '@/src/components/AboutUs/AboutUs';

import SplitScreenL from '@/src/components/SplitScreenL/SplitScreenL';
import { splitScreenData1 } from '@/src/utils/data';

import Title from '@/src/components/Title/Title';
import { titleServicesData } from '@/src/utils/data';

import { servicesData } from '@/src/utils/data';
import VerticalSlider from '@/src/components/VerticalSlider/VerticalSlider';
import Services from '@/src/components/Services/Services';

export default function Home() {

  /* Animación que afectará al scrollin, a cargo de la app, 
  para el cambio entre secciones */
  const controls = useAnimation()

  return (
    <motion.div className="app" animate={controls}>
      <Navbar/>
      <Hero/>
      {/* Services */}
      <Title
        tag={titleServicesData.tag} 
        title={titleServicesData.title} 
        description={titleServicesData.description} 
      
      />
      <Services/>
      {/* <SplitScreenL data={splitScreenData1}/>
      <VerticalSlider features={servicesData} /> */}


      {/* Fin Services */}


      {/* <BrandingVideo/>  */}
      {/* <WhatWeDo/>  */}

      {/* MODIFICAR cambio de color entre secciones, a rojo? */}
      {/* <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "rgb(203, 203, 203)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{amount: 0.4}} 
      >
        <Portfolio/>
      </motion.div> */}
      <Portfolio/>

      <AboutUs/>

      
      {/* <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "rgb(203, 203, 203)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{amount: 0.4}} 
      >
        <Testimonials/>
      </motion.div> */}
      <Testimonials/>
      
      <HowItWorks/>

      <Footer/>

    </motion.div>
  );
}
