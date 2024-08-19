import React from 'react';
import './SplitScreenR.css';
import Image from 'next/image';

import  { useEffect, useRef } from 'react';
import Button from '../Button/Button';



const SplitScreenR = ({ data, id, showButton = true }) => {

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
    <div className="scr-wrapper" id={id}>
      <div className="container">
        <div className="scr-container">


          


            {/* IMage Section */}
            
              <div ref={imageRef} className="scr-imageSection">
                <Image src={data.imageUrl} alt={data.imageAlt} fill style={{ objectFit: "cover" }} />
              </div>
            

            
            {/* Text Section */}
            
              <div className="scr-textSection">
                <h1>{data.title}</h1>
                <div className='scr-linea'></div>
                {data.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}


                {/* botón */}
                <Button href={data.buttonHref} show={showButton}>
                  {data.buttonText}
                </Button>


              </div>
            

            

          
        </div>
      </div>
    </div>
  );
};

export default SplitScreenR;
