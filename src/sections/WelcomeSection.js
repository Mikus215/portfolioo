import React from 'react'
import Header from '../components/Header';
import WelcomeText from '../components/WelcomeText';
import rightCornerBgc from '../assets/right-corner.png'
import imgOfDeveloper from '../assets/img-developer.png'
import blur12 from '../assets/blur12.png'
import blur14 from '../assets/blur14.png'

const WelcomeSection = () => {
    return ( 
        <div className="welcome">
                <img src={blur12} alt="" className='welcome__blur12'/>
                <img src={blur14} alt="" className='welcome__blur14'/>
            <div className='welcome__img-right-corner'>
                <img src={rightCornerBgc} alt="" className='welcome__img-bgc'/>
                <img src={imgOfDeveloper} alt="" className='welcome__img-developer'/>
            </div>
            <Header />
            <WelcomeText />
        </div>
     );
}
 
export default WelcomeSection;