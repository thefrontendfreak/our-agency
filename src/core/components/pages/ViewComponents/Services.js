import React from 'react'
import Uxicon from '../../../../assets/img/computer.png'
import BrandingIcon from '../../../../assets/img/plan.png'
import DevIcon from '../../../../assets/img/web-programming.png'
import MarketingIcon from '../../../../assets/img/promotion.png'

const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <div className="row jc__between">
                    <div className="col-lg-5 col-md-5">
                        <div className="services__content pt-50">
                            <h6 className="semiHeading mb-10">Our services</h6>
                            <h3 className="services__heading fw__bold mb-20">
                                We can take your
                                business to the
                                next level
                            </h3>
                            <p className="services__text mb-30">
                                Our Products work Togather seamlassly to form
                                talent science. start with one or more.
                            </p>
                            <button className="btn__primary">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="services__cards">
                            <div className="row ">
                                <div className="col-md-6">
                                    <div className="services__singleCard bg__green">
                                        <div className="service__icon">
                                            <img src={Uxicon} alt="Service icon" />
                                        </div>
                                        <h5 className="service__title">
                                            UI/UX design
                                        </h5>
                                        <p className="service__text">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit,
                                            sed do eiusmod
                                        </p>
                                    </div>
                                    <div className="services__singleCard">
                                        <div className="service__icon">
                                            <img src={DevIcon} alt="Service icon" />
                                        </div>
                                        <h5 className="service__title">
                                            Development
                                        </h5>
                                        <p className="service__text">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit,
                                            sed do eiusmod
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-70">
                                    <div className="services__singleCard">
                                        <div className="service__icon">
                                            <img src={BrandingIcon} alt="Service icon" />
                                        </div>
                                        <h5 className="service__title">
                                            Branding
                                        </h5>
                                        <p className="service__text">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit,
                                            sed do eiusmod
                                        </p>
                                    </div>
                                    <div className="services__singleCard bg__orange">
                                        <div className="service__icon">
                                            <img src={MarketingIcon} alt="Service icon" />
                                        </div>
                                        <h5 className="service__title">
                                            Marketing
                                        </h5>
                                        <p className="service__text">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit,
                                            sed do eiusmod
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
