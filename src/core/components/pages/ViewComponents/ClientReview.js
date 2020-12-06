import React, { useState, useRef , useEffect } from 'react';
import Swiper from 'react-id-swiper';
import sideBg from '../../../../assets/img/testbgright.png';



const ClientReview = () => {

    const  [swiper, setSwiper] = useState(null);

    let goNext = () => swiper.slideNext();
    let goPrev = () => swiper.slidePrev();
    
    useEffect( () => {
        var mySwiper = document.querySelector(".swiper-container").swiper;
        setSwiper(mySwiper);
    }, [])

    return (
        <div className="review mb-200">
            <div className="review__sideBg">
                <img src={sideBg} alt="Side image"/>
            </div>
            <div className="container review__container">
                <div className="reviewSlide t__center">
                    <h6 className="semiHeading mb-10">Testimonials</h6>
                    <h4 className="reviewSlide__heading fw__bold mb-30">
                        What people say?
                    </h4>
                    <Swiper >
                        <div className="singleReview">
                            <p className="singleReview__text">
                                This is due to their excellent service, competitive 
                                pricing and customer support. It’s throughly refresing to 
                                get such a personal touch. 
                            </p>
                            <h6 className="singleReview__clientName">
                                John Nemeth
                            </h6>
                            <p className="singleReview__clientDasg">
                                CEO , Beximco
                            </p>
                        </div>
                        <div className="singleReview">
                            <p className="singleReview__text">
                                This is due to their excellent service, competitive 
                                pricing and customer support. It’s throughly refresing to 
                                get such a personal touch. 
                            </p>
                            <h6 className="singleReview__clientName">
                                John Nemeth
                            </h6>
                            <p className="singleReview__clientDasg">
                                CEO , Beximco
                            </p>
                        </div>
                        <div className="singleReview">
                            <p className="singleReview__text">
                                This is due to their excellent service, competitive 
                                pricing and customer support. It’s throughly refresing to 
                                get such a personal touch. 
                            </p>
                            <h6 className="singleReview__clientName">
                                John Nemeth
                            </h6>
                            <p className="singleReview__clientDasg">
                                CEO , Beximco
                            </p>
                        </div>
                    </Swiper>
                    <button className="slider__arrow prev__arrow" onClick={goPrev}>
                        <i className="fa fa-long-arrow-alt-left"></i>
                    </button>
                    <button className="slider__arrow next__arrow" onClick={goNext}>
                        <i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClientReview
