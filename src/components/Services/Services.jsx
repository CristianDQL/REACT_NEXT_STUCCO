import React from 'react'
import './Services.css';
import SplitScreenL from '../SplitScreenL/SplitScreenL';
import SplitScreenR from '../SplitScreenR/SplitScreenR';
import VerticalSlider from '../VerticalSlider/VerticalSlider';
import { splitScreenData2, splitScreenData1, verticalSliderData1 } from '@/src/utils/data';

const Services = () => {
  return (
    <div className="ser-wrapper">
      <div className="container">
        <div className="ser-container">

          <SplitScreenL data={splitScreenData1}/>
          <SplitScreenR data={splitScreenData2}/>
          <SplitScreenL data={splitScreenData1}/>
          <VerticalSlider features={verticalSliderData1} />

        </div>
      </div>
    </div>
  )
}

export default Services

/* - Crear un componente Services, en el que meta el SlipteScreen y el verticalSlider, y oculto o enseño uno según móvil o desktop tablet. */
