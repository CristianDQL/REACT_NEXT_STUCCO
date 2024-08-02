"use client";

import React from 'react';
import './Hero.css'; // Asegúrate de que el nombre del archivo CSS coincida
import Image from 'next/image';
import Slider from 'react-slick';
import { serviceData } from '@/src/utils/data';
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
        autoplaySpeed: 2000,
        
    };
  
    return (
        <div className="h-wrapper">
            <div className="container">
                <div className="h-container" >
                <Slider {...settings} className='slider-container'>
                    {serviceData.map((item, index) => (
                    <div key={index}>
                        
                        <img
                            src={item.icon}
                            alt="Portfolio"
                            className="project-image"
                            width="100%"
                            height="100%"
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




























