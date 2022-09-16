import React from 'react';
import Logo from '../../assets/Logo1.png'
import nabvar from './nabvar.css';

const Navbar = () => {
   
    return (
        <div className="navbar navbarr bg-inherit text-black ">
            <div className="navbar-start">
                
                <div className='flex items-center'>
                    <a className="btn btn-ghost normal-case text-xl"><img src={Logo} alt="" /></a>
                    <span className='font-bold text-lg text-slate-600'></span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-slate-600">


                    <div className='Header-details-box'>
                        <div className='Header-details-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                        </div>
                        <div className='Header-details-info text-black'>
                            <strong>One Canada Square,</strong><br></br>
                            <span>Canary Wharf, United Kingdom.
                            </span>
                        </div>
                    </div>
                    <div className='Header-details-box'>
                        <div className='Header-details-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>


                        </div>
                        <div className='Header-details-info text-black'>
                            <strong>Monday-Friday: 9am to 5pm</strong><br></br>
                            <span>Saturday / Sunday: Closed
                            </span>
                        </div>
                    </div>
                    <div className='Header-details-box'>
                        <div className='Header-details-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                            </svg>


                        </div>
                        <div className='Header-details-info text-black'>
                            <strong>+12 123 456 789
                            </strong><br></br>
                            <span>info@yoursite.com
                            </span>
                        </div>
                    </div>

                </ul>
            </div>
           
        </div>
    );
};

export default Navbar;