import React from 'react';
import AboutImg from '../../../../assets/img/aboutimg.png';
const About = () => {
    return (
        <div className="aboutUs">
            <div className="container">
                <div className="row no-gutters d__grid">
                    <div className="aboutUs__banner">
                        <figure>
                            <img src={AboutImg} alt="About Banner"/>
                        </figure>
                    </div>
                    <div className="aboutUs__content">
                        <h6 className="semiHeading mb-10">
                            About Us
                        </h6>
                        <h3 className="aboutUs__heading fw__bold mb-20">
                            Digital Agency
                            Providing various
                            Services
                        </h3>
                        <p className="aboutUs__text mb-30">
                            Our Products work Togather seamlassly to form 
                            talent science. start with one or more. 
                        </p>
                        <button className="btn__primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
