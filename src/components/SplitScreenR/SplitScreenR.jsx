import React from 'react';
import './SplitScreenL.css';
import Image from 'next/image';

/* import { splitScreenData1 } from '@/src/utils/data' */

const SplitScreenL = ({ data }) => {
  return (
    <div className="scl-wrapper">
      <div className="container">
        <div className="scl-container">


          <div className="scl-blocks">


            {/* IMage Section */}
            <div className="scl-block">
              <div className="scl-imageSection">
                <Image src={data.imageUrl} alt={data.imageAlt} layout="fill" objectFit="cover" />
              </div>
            </div>

            
            {/* Text Section */}
            <div className="scl-block">
              <div className="scl-textSection">
                <h1>{data.title}</h1>
                {data.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <div className="scl-button-container">
                  <button className="scl-button">
                    {data.buttonText}<span className="arrow-icon">{">>"}</span>
                  </button>
                </div>
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitScreenL;
