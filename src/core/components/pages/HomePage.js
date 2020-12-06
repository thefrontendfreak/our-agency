import React , {Component} from 'react'
import HeroBanner from './ViewComponents/HeroBanner';
import About from './ViewComponents/About';
import Services from './ViewComponents/Services';
import ClinetReview from './ViewComponents/ClientReview';
import ProjectShowcase from './ViewComponents/ProjectShowcase';

const HomePage = () => {
    return (
        <div className="homePage">
            {/* Hero banner starts */}
            <HeroBanner/>

            {/* About us starts */}
            <About/>

            {/* Services starts */}
            <Services/>

            {/* Client review starts */}
            <ClinetReview/>

            {/* Project showcase start */}
            <ProjectShowcase/>
        </div>
    )
}

export default HomePage
