import React from 'react';
import LatestPatientOpinion from '../LatestpatientOpinion/LatestPatientOpinion';
import Header from '../Sheard/Header';
import AboutUs from './About Us/AboutUs';
import Emergency from './Emergency/Emergency';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import MeetOurDoctors from './MeetOurDoctors/MeetOurDoctors';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Emergency></Emergency>
            <AboutUs></AboutUs>
            <MeetOurDoctors></MeetOurDoctors>
            <LatestPatientOpinion></LatestPatientOpinion>
            <MakeAppointment></MakeAppointment>
           
        </div>
    );
};

export default Home;