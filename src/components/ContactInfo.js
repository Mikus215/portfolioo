import React from 'react'
import iconPhone from '../assets/phone-icon.png'
import iconEmail from '../assets/email-icon.png'
import iconLocation from '../assets/location-icon.png'
import cv from '../assets/cv.pdf'

const ContactInfo = () => {
    return ( 
        <div className="contact__info">
            <h1 className="contact__info-title">contact</h1>
            <p className="contact__info-description">
                I can work fully remotely or in Dabrowa Gornicza, 
                Katowice and nearby areas.
            </p>
            <button className="contact__info-download-button">
                <a href={cv} download="Mikołaj Marszałek" className="contact__info-download-link">download cv</a>
            </button>
            <div className="contact__info-box">
                <img src={iconPhone} alt="" />
                <a href="tel:+48574499047">+48 574-499-047</a>
            </div>
            <div className="contact__info-box">
                <img src={iconEmail} alt="" />
                <a href="mailto: mikimarsz215@gmail.com" className='welcomeText__email'>mikimarsz215@gmail.com</a>
            </div>
            <div className="contact__info-box">
                <img src={iconLocation} alt="" />
                <span>Dąbrowa Górnicza</span>
            </div>
        </div>
     );
}
 
export default ContactInfo;