import React from 'react';
import HeaderImage from '../../assets/header.PNG';
import header from './header.css';

const Header = () => {
    return (
        <div>
            
            <div className="hero min-h-screen " style={{backgroundImage:`url(${HeaderImage})`,width:"100%"}}>
                <div className="hero-overlay bg-inherit "></div>
                <div className="hero-content  text-neutral-content all-content ">
                    <div className="max-w-none  text-content ">
                        <h1 className="mb-5 text-5xl font-bold   ">YOUR HEALTH IS</h1>
                        <h1 className="mb-5 text-5xl font-bold text-6xl ">OUR TOP PRIORITY</h1>
                        <p className="mb-5 text-black ">25 Years of experience in Medical Services</p>
                       <div className='button-group'>
                       
                       <button className='common-button font-bold'>Doctor | +</button>
                      
                       
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;