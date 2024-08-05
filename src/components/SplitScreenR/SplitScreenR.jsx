import React from 'react';
import './SplitScreenR.css';
import Image from 'next/image';

/* import { splitScreenData1 } from '@/src/utils/data' */

const SplitScreenR = ({ data }) => {
  return (
    <div className="scr-wrapper">
      <div className="container">
        <div className="scr-container">


          


            {/* IMage Section */}
            
              <div className="scr-imageSection">
                <Image src={data.imageUrl} alt={data.imageAlt} layout="fill" objectFit="cover" />
              </div>
            

            
            {/* Text Section */}
            
              <div className="scr-textSection">
                <h1>{data.title}</h1>
                <div className='scr-linea'></div>
                {data.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <div className="scr-button-container">
                  <button className="scr-button">
                    {data.buttonText}<span className="arrow-icon">{">>"}</span>
                  </button>
                </div>
              </div>
            

            

          
        </div>
      </div>
    </div>
  );
};

export default SplitScreenR;
