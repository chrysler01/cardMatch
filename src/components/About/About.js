import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './About.scss';

const About = () => {

    const svgSize = {width: '2rem', height: '2rem'};

    return(
        <div className="about-wrapper">
            <header className="about-header">
                <h1>Card matching game</h1>
            </header>
            <section className="about-content">
                <p>Made by Evgeni Kolodinski</p>
            </section>
        </div>
    );
};

export default About;
