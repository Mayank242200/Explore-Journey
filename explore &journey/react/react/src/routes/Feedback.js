
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import travelImg from '../assets/service.jpg';
import Footer from '../components/Footer';
import FeedbackForm from '../components/FeedbackForm'; 

function Feedback() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"s
                heroImg={travelImg}
                title="Feedback"
                btnClass="hide"
            />
            <FeedbackForm /> 
            <Footer />
        </>
    );
}

export default Feedback;
