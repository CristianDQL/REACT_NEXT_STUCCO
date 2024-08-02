import React from 'react';
import './SplitScreen.css';
import Image from 'next/image';

import { splitScreenData1 } from '@/src/utils/data'

const SplitScreen = () => {
  return (
    <div className="sc-wrapper">
      <div className="container">
        <div className="sc-container">
          <div className="sc-textSection">
            <h1>{splitScreenData1.title}</h1>
            {splitScreenData1.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="sc-button-container">
              <button className="sc-button">
                {splitScreenData1.buttonText}
              </button>
            </div>
          </div>
          <div className="sc-imageSection">
            <Image src={splitScreenData1.imageUrl} alt={splitScreenData1.imageAlt} layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitScreen;

