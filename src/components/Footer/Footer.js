import React from "react";
import "../Footer/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    return (
        <footer className= "footerStyles">
            <p className='iconStyles'><a className='color git' target='blank' href='https://github.com/GuyJiawei/'><FontAwesomeIcon icon={faGithub} /></a> </p>
            <p className='iconStyles'><a className='color linkedin' target='blank' href='www.linkedin.com/in/Guy-Jiawei-Anderson'><FontAwesomeIcon icon={faLinkedin} /></a></p>
        </footer>  
    );
}