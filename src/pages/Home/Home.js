import React from 'react';
import Header from '../Sheard/Header';
import AboutUs from './About Us/AboutUs';
import Emergency from './Emergency/Emergency';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Emergency></Emergency>
            <AboutUs></AboutUs>
           
        </div>
    );
};

export default Home;