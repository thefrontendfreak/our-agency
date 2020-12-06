import React from 'react'
import HeroImg from '../../../../assets/img/heroimg.png';

const HeroBanner = () => {
    return (
        <div className="heroBanner mb-200">
            <div className="container">
                <div className="row ai__center">
                    <div className="col-lg-6 col-md-6">
                        <div className="heroBanner__content">
                            <h1 className="heroBanner__heading fw__bold mb-20">
                                Creative
                                Digital Agency
                            </h1>
                            <p className="heroBanner__text mb-40">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam vel dolor id nulla gravida blandit.
                            </p>
                            <button className="btn__primary">Get Started</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="heroBanner__img">
                            <figure>
                                <img src={HeroImg} alt="Hero Image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
