"use client";

import React from 'react';
import './Hero.css'; // Asegúrate de que el nombre del archivo CSS coincida
import Image from 'next/image';
import Slider from 'react-slick';
import { heroData } from '@/src/utils/data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation';
import { ArrowBack } from '@mui/icons-material';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        /* adaptiveHeight: false, */
        
    };
  
    return (
        <div className="h-wrapper">
            <div className="container">
                <div className="h-container" >
                <Slider {...settings} className='h-slider-container'>
                    {heroData.map((item, index) => (
                    <div key={index}>
                        
                        <img
                            src={item.icon}
                            alt="Portfolio"
                            className="project-image"
                            width="100%"
                            height="100%"
                            /* objectFit="containe" */
                            
                        />
                        
                        
                    </div>
                    ))}
                </Slider>
                </div>
            </div>
        </div>
    );
};

export default Hero;




























