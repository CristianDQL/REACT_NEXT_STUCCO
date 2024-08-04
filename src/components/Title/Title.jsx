import React from 'react'
import './Title.css'
import { motion } from 'framer-motion'
import { desVariants, tagVariants, titleVariants, containerVariants } from '@/src/utils/animation'

const Title = () => {
  return (
    
    <div className="t-wrapper">
        <div className="container">
            <div className="t-container">
                <div className="t-head">
                        <motion.span 
                            initial="offscreen" 
                            whileInView={"onscreen"} 
                            variants={tagVariants} 
                            className='tag'
                        >
                            What we do
                        </motion.span>
                        <motion.span initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className='title'>
                            {" "}
                            Transforming Spaces with Optimum Stucco and Expert Craftsmanship
                        </motion.span>
                        <motion.span initial="offscreen" whileInView={"onscreen"} variants={desVariants} className='des'>Here is how we can evaluate</motion.span>
                    </div>

            </div>
        </div>
    </div>
        
  )
}

export default Title
