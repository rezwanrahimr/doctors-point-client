import React from 'react';
import image from '../../../assets/appointment2.png';
import BackgroundImage from '../../../assets/appointment.png';
import CommonButton from '../../Sheard/CommonButton/CommonButton';

const MakeAppointment = () => {
    return (
        <div className='flex justify-center items-center' style={{background: `url(${BackgroundImage})`}}>
            <div className='flex-1'>
                <img style={{marginTop:'-100px'}} src={image} alt="" />
            </div>
            <div className='flex-1 px-2'>
                <h2 className='text-xl text-primary font-bold'>Appointment</h2>
                <h2 className='text-3xl text-white font-bold'>Make any Appointment today</h2>
                <p className='text-white mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, a nemo perspiciatis sint vel optio, ad autem consequatur dolor tempore quae. Excepturi laudantium dignissimos veniam culpa cupiditate exercitationem quibusdam! Illo ratione tempora autem id voluptate. Magnam, voluptatibus aperiam. Iste, culpa!</p>
                <CommonButton >Appointment </CommonButton>
            </div>
        </div>
    );
};

export default MakeAppointment;