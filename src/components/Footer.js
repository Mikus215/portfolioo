import React from 'react'

const getYear = () => {
    return new Date().getFullYear();
}

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__copyRights">
                <p> &copy; {getYear()} Mikołaj Marszałek</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;