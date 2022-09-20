import React from 'react';
import doctor1 from '../../../assets/doctor1.jpg';
import doctor2 from '../../../assets/doctor2.jpg';
import doctor3 from '../../../assets/doctor3.jpg';
import doctor4 from '../../../assets/doctor8.jpg';
import doctor5 from '../../../assets/doctor5.jpg';
import Slider from "react-slick";
import meetOurDoctor from './meetOurDoctor.css';

const MeetOurDoctors = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 5

  };

  return (
    <div className='px-12 pt-8'>
      <h1 className='text-center font-medium text-3xl my-12'>Meet our Doctors</h1>
      <div>
        <Slider {...settings}>

          <div className='p-5 card-data'>
            <img src={doctor2} alt="" />
            <div className='text-center font-medium mt-2'>
              <h1 className='text-2xl'>
                Adam Johnson</h1>
              <p className='text-1xl text-yellow-600'>Orthodontist</p>
            </div>
          </div>
          <div className='p-5 card-data'>
            <img src={doctor1} alt="" />
            <div className='text-center font-medium mt-2'>
              <h1 className='text-2xl'>
                Jennifer Doe</h1>
              <p className='text-1xl text-yellow-600'>Surgeon</p>
            </div>
          </div>
          <div className='p-5 card-data'>
            <img src={doctor3} alt="" />
            <div className='text-center font-medium mt-2'>
              <h1 className='text-2xl'>
                Adam Johnson</h1>
              <p className='text-1xl text-yellow-600'>Orthodontist</p>
            </div>
          </div>
          <div className='p-5 card-data'>
            <img src={doctor4} alt="" />
            <div className='text-center font-medium mt-2'>
              <h1 className='text-2xl'>
                Paula Andrews</h1>
              <p className='text-1xl text-yellow-600'>Pediatrist</p>
            </div>
          </div>
          <div className='p-5 card-data'>
            <img src={doctor5} alt="" />
            <div className='text-center font-medium mt-2'>
              <h1 className='text-2xl'>
                Daniel Kim</h1>
              <p className='text-1xl text-yellow-600'>Pediatrist</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>

  );
};

export default MeetOurDoctors;