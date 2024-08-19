import React from 'react'
import './VerticalSlider.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { containerVariants } from '@/src/utils/animation'
import Link from 'next/link'

const VerticalSlider = ({ features }) => {
  return (
    
    <div className="vs-wrapper">
        <div className="container">
            <div className="vs-container">

                


                {/* Bloque imàgenes */}
                <div className="vs-features">
                    {features.map((feature, i) => (
                        <motion.div 
                            key={i}
                            className="vs-feature"
                            variants={containerVariants((i+1)*0.1)}
                            initial="offscreen"
                            whileInView="onscreen"
                            whileHover={{ scale: 1.05 }} /* Adding motion hover effect */
                        >   
                            <Link href={feature.href} passHref>
                                <Image src={feature.icon} alt={feature.title} width={250} height={250} />
                                
                            </Link>
                            <span>{feature.title}</span>
                            
                            {/* <span>{feature.des}</span> */}
                            
                        </motion.div>
                    ))}
                 </div>


                

            </div>
        </div>
      </div>
  )
}

export default VerticalSlider
