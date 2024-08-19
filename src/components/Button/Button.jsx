import React from 'react'
import Link from 'next/link';
import './Button.css';


/* Button reutilizable, al que le paso: children: datos Texto; href: ruta; ambos pasados
mediante data.js; y show: que indica si muestro o no el botón. */
const Button = ({ children, href, show = true }) => {

  if (!show) return null;
  return (
    <div className="butt-wrapper">
      <div className="container">
        <div className="butt-container">

            <div className="buttonComponent-container">
                <Link href={href} className="buttonComponent">
                    {children}<span className="arrow-icon">{">>"}</span>
                </Link>
            </div>

        </div>
      </div>
      
    </div>
  )
}

export default Button
