import React from 'react'
import './Services.css';
import SplitScreenL from '../SplitScreenL/SplitScreenL';
import SplitScreenR from '../SplitScreenR/SplitScreenR';
import VerticalSlider from '../VerticalSlider/VerticalSlider';
import { splitScreenData2, splitScreenData4, splitScreenData1, verticalSliderData1, splitScreenData3 } from '@/src/utils/data';

const Services = () => {
  return (
    <div className="ser-wrapper">
      <div className="container">
        <div className="ser-container">

          <SplitScreenL className="ser-split" data={splitScreenData1}/>
          <SplitScreenR className="ser-split" data={splitScreenData2}/>
          <SplitScreenL className="ser-split" data={splitScreenData3}/>
          <SplitScreenR className="ser-split" data={splitScreenData4}/>
          <VerticalSlider className="ser-vertical" features={verticalSliderData1} />

        </div>
      </div>
    </div>
  )
}

export default Services

/* - Crear un componente Services, en el que meta el SlipteScreen y el verticalSlider, y oculto o enseño uno según móvil o desktop tablet. */
