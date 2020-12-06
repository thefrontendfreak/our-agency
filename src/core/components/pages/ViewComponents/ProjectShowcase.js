import React from 'react';
import ShocaseImage1 from '../..//../../assets/img/pro1.png';
import ShocaseImage2 from '../..//../../assets/img/pro2.png';
import ShocaseImage3 from '../..//../../assets/img/pro3.png';
import ShocaseImage4 from '../..//../../assets/img/pro4.png';
import ShocaseImage5 from '../..//../../assets/img/pro5.png';
import ShocaseImage6 from '../..//../../assets/img/pro6.png';

const ProjectShowcase = () => {
    return (
        <div className="projectShowcase">
            <div className="container">
                <div className="projectShowcase__headingWrapper mb-40">
                    <h6 className="semiHeading mb-10">Our projects</h6>
                    <h3 className="projectShowcase__heading fw__bold mb-10">
                        Our work portfolio  Best Way to Kick off Your Product Idea
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    </p>
                </div>
                <div className="projectShowcase__wrapper d__grid">
                    <div className="projectShowcase__singleProject">
                        <img src={ShocaseImage2} alt="Project thumbnail" className="project__thumb"/>
                    </div>
                    <div className="projectShowcase__singleProject">
                        <img src={ShocaseImage1} alt="Project thumbnail" className="project__thumb"/>
                    </div>
                    <div className="projectShowcase__singleProject">
                        <img src={ShocaseImage3} alt="Project thumbnail" className="project__thumb"/>
                    </div>
                    <div className="projectShowcase__singleProject">
                        <img src={ShocaseImage4} alt="Project thumbnail" className="project__thumb"/>
                    </div>
                    <div className="projectShowcase__singleProject">
                        <img src={ShocaseImage5} alt="Project thumbnail" className="project__thumb"/>
                    </div>
                    <div className="projectShowcase__singleProject">
                        <img src={ShocaseImage6} alt="Project thumbnail" className="project__thumb"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectShowcase
