import React from 'react'
import leftBackground from '../assets/left-background.png'
import developerBackgoround from '../assets/developer-background.png'
import aboutLinePointer from '../assets/about-line-pointer.png'

const AboutSection = () => {
    return ( 
        <div className="about">
        <img src={leftBackground} alt="" className="about__left-background"/>
            <div className="about__img-developer">
                <img src={developerBackgoround} alt="Handsome men" className='about__developer-background'/>
                <img src={aboutLinePointer} alt="" className='about__developer-line-pointer'/>
            </div>
            <div className="about__text">
                    <h1 className="about__text-title">ABOUT ME</h1>
                    <p className="about__text-description">
                    Hello, my name is Mikołaj Marszałek. I'm 21 years old.
                    I am currently front end developer and I want become
                    fullstack developer. 
                    I am constantly working on improving my skills and knowledge of full stack technology (Stack MERN).
                    </p>
                    <p className="about__text-description">
                    I am ready to take on challenges. 
                    I would be extremely grateful for feedback at the end of the recruitment so that 
                    I know what to improve in the future. 
                    </p>
                    <h2 id="skills">Skills</h2>
                    <div className="about__text-skills">
                        <span className="about__text-skill">HTML</span>
                        <span className="about__text-skill">JavaScript (ES6+, OOP)</span>
                        <span className="about__text-skill">API</span>
                        <span className="about__text-skill">Rest Api</span>
                        <span className="about__text-skill">React.js(Hooks)</span>
                        <span className="about__text-skill">Redux</span>
                        <span className="about__text-skill">React Router</span>
                        <span className="about__text-skill">Node.js</span>
                        <span className="about__text-skill">Express.js</span>
                        <span className="about__text-skill">SASS (SCSS)</span>
                        <span className="about__text-skill">SQL</span>
                        <span className="about__text-skill">MongoDB</span>
                        <span className="about__text-skill">Mongoose</span>
                        <span className="about__text-skill">Express.js</span>
                        <span className="about__text-skill">Mongoose</span>
                        <span className="about__text-skill">Styled Component</span>
                    </div>
                    <a href="https://www.linkedin.com/in/mikolajma/" target="_blank"  rel="noopener noreferrer">
                        <button className='about__text-button'> Read More </button>
                    </a>
                </div>
        </div>
     );
}
 
export default AboutSection;