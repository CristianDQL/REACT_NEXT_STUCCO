import React from 'react';
import './SplitScreenPageL.css';
import Image from 'next/image';

import  { useEffect, useRef } from 'react';



const SplitScreenL = ({ data, showButton = true }) => {


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
    <div className="scpl-wrapper">
      <div className="container">
        <div className="scpl-container">


          
            {/* Text Section */}
            
              <div className="scpl-textSection">
                <h1>{data.title}</h1>
                <div className='scpl-linea'></div>
                {data.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                {/* Condición para mostrar u ocultar el botón */}
                {showButton && (
                    <div className="scpl-button-container">
                      <button className="scpl-button">
                        {data.buttonText}<span className="arrow-icon">{">>"}</span>
                      </button>
                    </div>
                )}
              </div>
            

            {/* IMage Section */}
            
              <div ref={imageRef} className="scpl-imageSection">
                <Image src={data.imageUrl} alt={data.imageAlt} fill style={{ objectFit: "cover" }} />
              </div>
            

          
        </div>
      </div>
    </div>
  );
};

export default SplitScreenL;

