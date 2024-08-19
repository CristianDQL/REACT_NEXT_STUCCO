'use client'
import React from 'react'
import './ServicesPage.css';

import { titleServicesPageData, splitScreenServicesPageData1, splitScreenServicesPageData2, splitScreenServicesPageData3, splitScreenServicesPageData4, verticalSliderServicesPageData1, splitScreenServicesPageData5, splitScreenServicesPageData7, splitScreenServicesPageData6 } from '@/src/utils/data';

import SplitScreenPageL from './SplitScreenPageL';
import SplitScreenPageR from './SplitScreenPageR';

import Title from '../components/Title/Title';

const ServicesPage = () => {
  return (
    <div className="servP-wrapper">
      <div className="container">
        <div className="servP-container">

          <Title
            tag={titleServicesPageData.tag} 
            title={titleServicesPageData.title} 
            description={titleServicesPageData.description} 
          
          />


          <div className="servP-split-container">
            <SplitScreenPageL data={splitScreenServicesPageData1} id="serviceP1" showButton={false}/>
            {/* <SplitScreenPageR data={splitScreenServicesPageData2} showButton={false}/> */}
            <SplitScreenPageR data={splitScreenServicesPageData3} id="serviceP2" showButton={false}/>
            <SplitScreenPageL data={splitScreenServicesPageData4} id="serviceP3" showButton={false}/>
            <SplitScreenPageR data={splitScreenServicesPageData5} id="serviceP4" showButton={false}/>
            <SplitScreenPageL data={splitScreenServicesPageData6} id="serviceP5" showButton={false}/>
            <SplitScreenPageR data={splitScreenServicesPageData7} id="serviceP6" showButton={false}/>
          </div>

          
          
        </div>
      </div>
    </div>
  )
}

export default ServicesPage