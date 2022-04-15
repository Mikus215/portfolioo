import React from 'react'

const Nav = ({ showNav, showNavMobile }) => {
    return (
        <nav className={showNav ? "show-nav-mobile" : ""}>
            <ul onClick={showNavMobile} className={showNav ? "active" : ""}>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;