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


          <div className="ser-split-container">
            <SplitScreenL data={splitScreenData1}/>
            <SplitScreenR data={splitScreenData2}/>
            <SplitScreenL data={splitScreenData3}/>
            <SplitScreenR data={splitScreenData4}/>
          </div>

          <div className="ser-vertical-container">
            <VerticalSlider features={verticalSliderData1} />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Services


