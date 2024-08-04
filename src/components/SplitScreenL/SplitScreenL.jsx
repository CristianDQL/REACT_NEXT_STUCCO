import React from 'react';
import './SplitScreenL.css';
import Image from 'next/image';

import { splitScreenData1 } from '@/src/utils/data'

const SplitScreenL = () => {
  return (
    <div className="scl-wrapper">
      <div className="container">
        <div className="scl-container">
          <div className="scl-textSection">
            <h1>{splitScreenData1.title}</h1>
            {splitScreenData1.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="scl-button-container">
              <button className="scl-button">
                {splitScreenData1.buttonText}
              </button>
            </div>
          </div>
          <div className="scl-imageSection">
            <Image src={splitScreenData1.imageUrl} alt={splitScreenData1.imageAlt} layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitScreenL;

