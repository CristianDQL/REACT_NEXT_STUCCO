import React from 'react';
import './Portfolio.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { heroData, splitScreenData1 } from '@/src/utils/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation';
import Title from '../Title/Title';
import { titlePortfolioData, portfolioData } from '@/src/utils/data';

const Portfolio = () => {
  

  return (
    <div className="port-wrapper">
      <div className="container">
        <div className="port-container">
          {/* Head */}
          <Title 
            tag={titlePortfolioData.tag} 
            title={titlePortfolioData.title} 
            description={titlePortfolioData.description} 
          />
          

          {/* Grid section */}
          <div className='port-grid-container'>
            {portfolioData.map((item, index) => (
              <div key={index} className="port-feature">
                <Image
                  src={item.icon}
                  alt="Portfolio"
                  className="project-image"
                  width={300}
                  height={200}
                />
                <div className="project-info">
                  <h3 className="project-title">{item.title}</h3>
                  {item.desc && <p className="project-desc">{item.desc}</p>}
                  
                </div>
              </div>
            ))}
          </div>

          <div className="port-button-container ">
            <button className="port-button ">
              See More <span className="port-arrow-icon ">{">>"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
