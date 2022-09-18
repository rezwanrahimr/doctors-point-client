import React from 'react';
import LatestPatientOpinion from '../LatestpatientOpinion/LatestPatientOpinion';
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
            <LatestPatientOpinion></LatestPatientOpinion>
           
        </div>
    );
};

export default Home;