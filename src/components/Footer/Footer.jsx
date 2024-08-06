import React from 'react'

import Button from './Button.jsx';
import './Footer.css'

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          {/* <div className="f-button-container">
            <Button />
          </div> */}

          <hr/>

          <div className="f-menu">
            <span>Home</span>
            <span>Services</span>
            <span>Portfolio</span>
            <span>Details</span>
            <span>Contact Us</span>
          </div>

          <hr />

          <div className="f-info">
            <div className="f-company-info">
              <span className="info-title">COMPANY INFO</span>
              <span>1868 Pacific Ave,</span>
              <span>Miramar, MI 2000</span>
              <span>(555) 679-2953</span>
              
              <span>info@optimum.com</span>
            </div>
            <div className="f-office-hours">
              <span className="info-title">OFFICE HOURS</span>
              <span>Mon-Fri: 8:00 am-5:00 pm</span>
              <span>Sat: 8:00 am-5:00 pm</span>
              
            </div>
          </div>

          {/* <span className="f-creator-text">Made with ❤️ by Artilino</span> */}
        </div>
      </div>
    </div>
  )
}

export default Footer

