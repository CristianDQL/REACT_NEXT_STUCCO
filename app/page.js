'use client'

//HOME PAGE

//Escribiendo el componente dentro del div, directamente hace las importaciones
/* import Navbar from '@/src/components/Navbar/Navbar';
 */
import './page.css'
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import WhatWeDo from '@/src/components/WhatWeDo/WhatWeDo';
import OurDiff from '@/src/components/Portfolio/OurDiff';
import { motion, unseAnimation, useAnimation  } from "framer-motion";
/* import HowItWorks from '@/src/components/ContactUs/HowItWorks'; */
import WhoWeInvest from '@/src/components/WhoWeInvest/WhoWeInvest';
import Testimonials from '@/src/components/Testimonials/Testimonials';
import Footer from '@/src/components/Footer/Footer';
import Portfolio from '@/src/components/Portfolio/Portfolio';
import AboutUs from '@/src/components/AboutUs/AboutUs';

import SplitScreenL from '@/src/components/SplitScreenL/SplitScreenL';
import { splitScreenData1 } from '@/src/utils/data';

import Title from '@/src/components/Title/Title';
import { titleServicesData } from '@/src/utils/data';

import { servicesData } from '@/src/utils/data';
import VerticalSlider from '@/src/components/VerticalSlider/VerticalSlider';
import Services from '@/src/components/Services/Services';
import ContactUs from '@/src/components/ContactUs/ContactUs';
import Hero from '@/src/components/Hero/Hero';

export default function Home() {

  /* Animación que afectará al scrollin, a cargo de la app, 
  para el cambio entre secciones */
  const controls = useAnimation()

  return (
    <motion.div className="app" animate={controls}>
      {/* <Navbar/> */}
      <Hero/>
      <Services/>
      <Portfolio/>
      <ContactUs/>
      
      {/* <Footer/> */}

    </motion.div>
  );
}
