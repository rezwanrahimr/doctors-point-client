import React from 'react';
import Header from '../Sheard/Header';
import AboutUs from './About Us/AboutUs';
import Emergency from './Emergency/Emergency';
import MeetOurDoctors from './MeetOurDoctors/MeetOurDoctors';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Emergency></Emergency>
            <AboutUs></AboutUs>
            <MeetOurDoctors></MeetOurDoctors>
           
        </div>
    );
};

export default Home;