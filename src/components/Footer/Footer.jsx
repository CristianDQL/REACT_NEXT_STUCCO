import React from 'react'
import './Footer.css'
import Link from 'next/link';



// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  /* { name: 'HOME', href: '/'}, */
  {
    name: 'SERVICES', href: '/services'
  },
  { name: 'PORTFOLIO', href: '/portfolio'},
  { name: 'DETAILS', href: '/details'},
];



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
            {links.map((link) => (
                <Link 
                    key={link.name} 
                    href={link.href}
                    className='footer-link-style'
                    /* className={clsx(
                        'link-style',
                        { 'active-link': pathname === link.href }
                    )} */
                        
                >   
                    <p className="hidden md:block">{link.name}</p>
                </Link>
                              
              ))}




            {/* <span>Home</span>
            <span>Services</span>
            <span>Portfolio</span>
            <span>Details</span>
            <span>Contact Us</span> */}
          </div>

          <hr />

          <div className="f-info">
            <div className="f-company-info">
              <span className="info-title">COMPANY INFO</span>
              <span>1868 Pacific Ave,</span>
              <span>Miramar, MI 2000</span>
              <span>(786) 487-5772</span>
              
              <span>optimumstuccoinc@gmail.com</span>
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

