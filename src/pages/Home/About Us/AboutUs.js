import React from 'react';
import Image from '../../../assets/aboutImage.jpg';
import aboutUs from './aboutUs.css';

const AboutUs = () => {
    return (
        <div className='grid grid-flow-col mt-16'>
            <div className='grid grid-cols-1'>
                <img src={Image} width="70%" alt="" />
            </div>
            <div className='grid grid-cols-1'>
                <div className='grid grid-flow-row'>
                    <span className='font-bold text-primary'>About Us</span>
                    <strong className='text-5xl'>Welcome to Disin <br></br> Hospital We have...</strong>
                    <div className='mt-12'>
                    <div className='grid grid-rows-1'>
                        <div className='flex items-center'>
                            <div className='icons'>
                            <h1><i class="fa-solid fa-notes-medical"></i></h1>

                            </div>
                            <div className='information'>
                                <h1 className='text-3xl font-bold'>Certified Doctors</h1>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.</h6>
                            </div>
                        </div>

                    </div>
                    <div className='grid grid-rows-1 my-8'>
                        <div className='flex items-center'>
                            <div className='icons'>
                            <h1><i class="fa-solid fa-truck-medical"></i></h1>

                            </div>
                            <div className='information'>
                                <h1 className='text-3xl font-bold'>Emergency 24 hours</h1>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.</h6>
                            </div>
                        </div>

                    </div>
                    <div className='grid grid-rows-1 '>
                        <div className='flex items-center'>
                            <div className='icons'>
                            <h1><i class="fa-solid fa-network-wired"></i></h1>

                            </div>
                            <div className='information'>
                                <h1 className='text-3xl font-bold'>Modern Technologey</h1>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.</h6>
                            </div>
                        </div>

                    </div>
                   
                    <div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;