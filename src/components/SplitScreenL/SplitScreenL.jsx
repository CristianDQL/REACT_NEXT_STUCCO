import React from 'react';
import './SplitScreenL.css';
import Image from 'next/image';

import  { useEffect, useRef } from 'react';



const SplitScreenL = ({ data }) => {


  /* Efecto Image */
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }/* else {  //Para que cargue la iamgen siempre con el scroll
            Remueve la clase visible cuando la imagen sale de la pantalla
            entry.target.classList.remove('visible');
          } */
        });
      },
      {
        threshold: 0.5 // Ajusta este valor según tus necesidades
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);



  return (
    <div className="scl-wrapper">
      <div className="container">
        <div className="scl-container">


          
            {/* Text Section */}
            
              <div className="scl-textSection">
                <h1>{data.title}</h1>
                <div className='scl-linea'></div>
                {data.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <div className="scl-button-container">
                  <button className="scl-button">
                    {data.buttonText}<span className="arrow-icon">{">>"}</span>
                  </button>
                </div>
              </div>
            

            {/* IMage Section */}
            
              <div ref={imageRef} className="scl-imageSection">
                <Image src={data.imageUrl} alt={data.imageAlt} fill style={{ objectFit: "cover" }} />
              </div>
            

          
        </div>
      </div>
    </div>
  );
};

export default SplitScreenL;

