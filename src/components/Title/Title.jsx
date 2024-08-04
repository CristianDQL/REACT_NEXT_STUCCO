import React from 'react'
import './Title.css'
import { motion } from 'framer-motion'
import { desVariants, tagVariants, titleVariants, containerVariants } from '@/src/utils/animation'

const Title = ({ tag, title, description }) => {
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
                            {tag}
                        </motion.span>
                        <motion.span initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className='title'>
                            {" "}
                            {title}
                        </motion.span>
                        <motion.span initial="offscreen" whileInView={"onscreen"} variants={desVariants} className='des'>
                            {description}
                        </motion.span>
                    </div>

            </div>
        </div>
    </div>
        
  )
}

export default Title
