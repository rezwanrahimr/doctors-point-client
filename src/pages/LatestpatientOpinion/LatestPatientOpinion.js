import React from 'react';
import PartientOpinion from './PartientOpinion.css';
import ImageOne from '../../assets/slider_fara_ov-500x680.jpg';
import ImageTwo from '../../assets/clinica_blog_5-500x680.jpg';
import backgroundImage from '../../assets/bg.png'

const LatestPatientOpinion = () => {
    return (
        <div className='PatientOpinion pt-16 my-16'>
            <div style={{ background: `url(${backgroundImage})` }}>
                <h1 className='text-3xl test-start font-bold ml-12 '>Latest Partient Opinion</h1>
                <div className='grid grid-flow-col'>

                    <div className='grid grid-cols-1 p-12'>
                        <div className="card card-side bg-base-100 w-auto h-auto shadow-xl">
                            <figure ><img src={ImageOne} className='h-full' alt="Movie" /></figure>
                            <div className="card-body w-96">
                                <small className='font-bold text-lime-500'>June 26, 2020</small>
                                <h2 className="card-title">Quality Methods Used Today in Health Care</h2>
                                <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to ...</p>

                                <h1 className='text-1xl font-bold'>Read More <span className='text-lime-500'>»</span><i class="fa-solid fa-arrow-right-from-line"></i></h1>

                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 p-12 w-auto h-auto'>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={ImageTwo} className='h-full' alt="Movie" /></figure>
                            <div className="card-body w-96">
                                <small className='font-bold text-lime-500'>June 26, 2020</small>
                                <h2 className="card-title">Quality Methods Used Today in Health Care</h2>
                                <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to ...</p>

                                <h1 className='text-1xl font-bold'>Read More <span className='text-lime-500'>»</span> <i class="fa-solid fa-arrow-right-from-line"></i></h1>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestPatientOpinion;