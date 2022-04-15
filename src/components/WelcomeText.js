import React from 'react'
import iconEmail from '../assets/icon-email.png'
import iconLinkedin from '../assets/icon-linkedin.png'
import iconPhone from '../assets/icon-phone.png'
import iconGithub from '../assets/icon-github.png'
import lineCircle from '../assets/line-circle.png'

const WelcomeText = () => {
    return ( 
        <div className='welcomeText'>
            <img src={lineCircle} alt="" className='welcomeText__line-circle'/>
            <p className='welcomeText__introduce'>Hi, My name is</p>
            <p className='welcomeText__introduce'>Mikołaj Marszałek</p>
            <div className="welcomeText__button-mail">
                <a href="#about">
                    <button className='welcomeText__button'> About Me </button>
                </a>
                <a href="mailto: mikimarsz215@gmail.com" className='welcomeText__email'>mikimarsz215@gmail.com</a>
            </div>
            <div className="welcomeText__icons">
                <a href="mailto: mikimarsz215@gmail.com">
                    <img src={iconEmail} alt="Link to send email" />
                </a>
                <a href="https://www.linkedin.com/in/mikolajma/" target="_blank"  rel="noopener noreferrer">
                    <img src={iconLinkedin} alt="Link to Linkedin" />
                </a>
                <a href="tel:+48574499047">
                    <img src={iconPhone} alt="Phone number: 574499047" />
                </a>
                <a href="https://github.com/Mikus215">
                    <img src={iconGithub} alt="Link to github" />
                </a>
            </div>
        </div>
     );
}
 
export default WelcomeText;