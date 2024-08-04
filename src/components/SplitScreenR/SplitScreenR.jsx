import React from 'react';
import './SplitScreenR.css';
import Image from 'next/image';

import { splitScreenData1 } from '@/src/utils/data'

const SplitScreenR = () => {
  return (
    <div className="scr-wrapper">
      <div className="container">
        <div className="scr-container">
          <div className="scr-textSection">
            <h1>{splitScreenData1.title}</h1>
            {splitScreenData1.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="scr-button-container">
              <button className="scr-button">
                {splitScreenData1.buttonText}
              </button>
            </div>
          </div>
          <div className="scr-imageSection">
            <Image src={splitScreenData1.imageUrl} alt={splitScreenData1.imageAlt} layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitScreenR;