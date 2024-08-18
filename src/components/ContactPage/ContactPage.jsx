'use client'

import React from 'react'
import './ContactPage.css'

import Swal from 'sweetalert2'
const ContactPage = () => {

  const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        /* Solicitar access Key en: https://web3forms.com/platforms/react-contact-form */
        formData.append("access_key", "cd8cb140-6eb4-4b55-89b9-3cda25c7e550");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
    };
  return (
    <div className="cuP-wrapper">
        <div className="container">
            <div className="cuP-container">

                <section className='contact'>
                    <form onSubmit={onSubmit} className='form' >

                        <h2>Contact Form</h2>
                        
                        {/* Subject field del correo predefinido */}
                        <input type="hidden" name="subject" value="Service Request Submitted via optimumstucco.com" />


                        <div className="input-box">
                            <label>Full Name</label>
                            <input type='text' className='field' placeholder='Enter your name' name='name' required />
                        </div>

                        <div className="input-box">
                            <label>Email Address</label>
                            <input type='email' className='field' placeholder='Enter your email' name='email' required />
                        </div>

                        <div className="input-box">
                            <label>Your Message</label>
                            <textarea name="message" id="" className='field mess' placeholder='Enter your message' required></textarea>
                        </div>

                        <button type='submit'>Send Message</button>

                    </form>
                </section>

            </div>
        </div>
    </div>
  )
}

export default ContactPage
