import React from 'react';
import HeaderImage from '../../assets/Hearder.jpg';
import header from './header.css';

const Header = () => {
    return (
        <div>
            
            <div className="hero min-h-screen " style={{backgroundImage:`url(${HeaderImage})`,width:"100%"}}>
                <div className="hero-overlay bg-inherit "></div>
                <div className="hero-content  text-neutral-content all-content ">
                    <div className="max-w-none  text-content ">
                        <h1 className="mb-5 text-5xl font-bold font-mono  ">YOUR HEALTH IS</h1>
                        <h1 className="mb-5 text-5xl font-bold text-6xl font-serif">OUR TOP PRIORITY</h1>
                        <p className="mb-5 text-black ">25 Years of experience in Medical Services</p>
                       <div>
                       <button class="btn  px-7 btn-success rounded-full text-white">Doctor  | + </button>
                       <button class="btn px-7 mx-3 btn-error rounded-full text-white">Learn More | + </button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;