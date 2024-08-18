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
            <SplitScreenPageL data={splitScreenServicesPageData1} showButton={false}/>
            {/* <SplitScreenPageR data={splitScreenServicesPageData2} showButton={false}/> */}
            <SplitScreenPageR data={splitScreenServicesPageData3} showButton={false}/>
            <SplitScreenPageL data={splitScreenServicesPageData4} showButton={false}/>
            <SplitScreenPageR data={splitScreenServicesPageData5} showButton={false}/>
            <SplitScreenPageL data={splitScreenServicesPageData6} showButton={false}/>
            <SplitScreenPageR data={splitScreenServicesPageData7} showButton={false}/>
          </div>

          
          
        </div>
      </div>
    </div>
  )
}

export default ServicesPage