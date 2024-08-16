/*Especifica que no haya más renderizado del lado del servidor, solo client-side render-mejor????*/
"use client"

import React, {useState} from 'react';
import './Navbar.css';
import { BiMenuAltRight } from 'react-icons/bi'; 
import { RxCross2 } from 'react-icons/rx';
import { motion, useMotionValueEvent, useScroll } from "framer-motion"; /* Sticky menu */



/* links */
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'HOME', href: '/'},
    {
      name: 'SERVICES', href: '/services'
    },
    { name: 'PORTFOLIO', href: '/portfolio'},
    { name: 'DETAILS', href: '/details'},
];

 

const Navbar = () => {
    
    const pathname = usePathname();


    {/*State Hook - funcionalidad para abrir el menú hamburguesa con clicl*/}
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

    /* Sticky menu */
    const [navStyle, setNavStyle] = useState("");
    const { scrollYProgress } = useScroll();
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.10) { 
            setNavStyle("sticky");
        } else {
            setNavStyle("");
        }
    });



  return (
    
    //n = navbar-wrapper, short n for navbar
    //Esta concatenación de divs es para faciltiar el Responsive
    <div className={`n-wrapper ${navStyle}`}>

        {/*Desktop version*/}
        <div className="container">
            <div className="n-container">
                {/*Dos secciones para el navbat*/}
                {/*Left side */}
                <div className="n-logo">
                    <Link href="/" >
                        
                        <Image 
                            src="/NavBar/optimum-stucco-services-logo.svg" 
                            alt="Optimum Stucco INC, Specializing in Residential and Commercial Stucco Applications" 
                            width={200} 
                            height={60} 
                            layout="fixed" 
                        />
                        
                    </Link>
                    
                    
                    
                </div>

                {/*Right side*/}
                <div className="n-right">
                    <div className="n-menu">
                        
                        {links.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.href}
                                
                                className={clsx(
                                    'link-style',
                                    { 'active-link': pathname === link.href }
                                )}
                                    
                            >   
                                <p className="hidden md:block">{link.name}</p>
                            </Link>
                        ))}
                        
                    </div>
                    <div className="fund-button">CONTACT US</div>
                </div>

                

            </div>

            {/* <hr/> */}
        </div>

        {/*Mobile/Tab Version = nm = navbarMobile version*/}
        <div className="nm-container">
            {/*Logo*/}
            <div className="nm-logo">
                <Link href="/" >
                            
                            <Image 
                                src="/NavBar/optimum-stucco-services-logo.svg" 
                                alt="Optimum Stucco Services, Specializing in Residential and Commercial Stucco Applications" 
                                width={200} 
                                height={60} 
                                layout="fixed" 
                            />
                            
                        </Link>
            </div>
           

            {/*Menu Icon = MenuHamburguesa + cambio de estado con Hook de arriba*/}
            {!mobileMenuOpened ? (
               <BiMenuAltRight size={30} onClick={()=>setMobileMenuOpened(true)} /> 
            ) : (  
               <RxCross2 size={30}  onClick={()=>setMobileMenuOpened(false)}/> 
            )}              
                

            {/*Mobile Menu*/}
            <div className="nm-menu" style={{transform: mobileMenuOpened && "translateX(0%)"}}> {/*El style es para que se vea con el click*/}
    
                    {links.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            
                            className={clsx('link-style', { 'active-link': pathname === link.href })}
                            onClick={() => setMobileMenuOpened(false)}
                        >
                                <p className="hidden md:block">{link.name}</p>
                            
                        </Link>
                    ))}
                <div className="m-funded-button">Contact Us</div>




            </div>
        </div>

    </div>
  );
}

export default Navbar
