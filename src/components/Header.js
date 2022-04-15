import React,{useState, useEffect} from 'react'
import Nav from './Nav';
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [showNav, setShowMobile] = useState(false)
    const widthScreen = window.innerWidth;

    const showNavMobile = () => {
        if(widthScreen > 576) return;
        setShowMobile(prevState => !prevState)
    }

    useEffect(() => {
        if(widthScreen > 576) setShowMobile(false)
    },[widthScreen])

    return ( 
        <header className='header'>
            <a href="#home">
                <img src={logo} alt="logo" />
            </a>
            <FontAwesomeIcon icon={faBars} size="2x" className='header__icon-bar' onClick={showNavMobile}></FontAwesomeIcon>
            <Nav showNav={showNav} showNavMobile={showNavMobile}/>
        </header>
     );
}
 
export default Header;