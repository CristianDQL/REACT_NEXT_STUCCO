 import React from 'react'
import './ContactUs.css'
import { contactUsTitleData, contactUsData } from '@/src/utils/data'
import Image from 'next/image'
import { motion } from "framer-motion";
import { tagVariants, titleVariants } from '@/src/utils/animation';
import Title from '../Title/Title';

const ContactUs = () => {
    const featureVariants = {
        offscreen: {
            scale: 0.5
        },
        onscreen: {
            scale: 1,
            transition: {
                type: "spring",
                duration: 1.5,
            },
        },
    }

  return (

    <div className="cu-wrapper">
        <div className="container">
            <div className="cu-container">

                {/* Head */}
                <Title 
                    tag={contactUsTitleData.tag} 
                    title={contactUsTitleData.title} 
                    description={contactUsTitleData.description} 
                />
                {/* <div className="hiw-head">
                    <motion.span 
                        variants={tagVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='tag'
                    >
                        CONTACT US
                    </motion.span>
                    <motion.span 
                        variants={titleVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='title'
                    >
                        Ready to Schedule your Free Estimate?
                    </motion.span>
                    
                </div> */}

                {/* Features - from data.js*/}
                <div className="cu-features">
                    {
                        contactUsData.map((feature, i)=> (
                            <motion.div 
                                variants={featureVariants}
                                initial="offscreen"
                                whileInView={"onscreen"}
                                className="cu-feature" 
                                key={i}
                            >
                                {/* Left side */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ 
                                        opacity: 1, 
                                        x: 0,
                                        transition:{
                                            type: "easeIn",
                                            duration: 1,
                                            delay: .7
                                        }
                                     }}

                                    className="detail">
                                    {/* <span className='des'>0{i+1}</span> */}
                                    <span className='cu-title'>{feature.title}</span>
                                    <span className='cu-text'>{feature.des} </span>
                                </motion.div>

                                
                            </motion.div>
                        ))

                    }

                </div>


                <div className="cu-button-container ">
                    <button className="cu-button ">
                        Get Started <span className="cu-arrow-icon ">{">>"}</span>
                    </button>
                </div>



            </div>
        </div>
    </div>

  )
}

export default ContactUs
