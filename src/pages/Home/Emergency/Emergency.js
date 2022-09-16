import React from 'react';
import emergency from './emergency.css';

const Emergency = () => {
    return (
        <div className='px-16 '>

            <div className='grid grid-flow-col emergency-bg'>
                <div className='grid grid-cols-1 '>
                    <div className='emergency-item flex '>
                        <div className='call'>
                            <button className="btn btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                            </svg>
                            </button>
                            

                        </div>
                        <div className='info text-white  ml-4'>
                            <h1>Emergency Call</h1>
                            <p>+07 5554 3332 322</p>
                            <p>+07 5554 3332 322</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 '>
                    <div className='emergency-item flex '>
                        <div className='call'>
                            <button className="btn btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
</svg>

                            </button>
                            

                        </div>
                        <div className='info text-white ml-4'>
                            <h1>Location</h1>
                            <p>2108-267 Road Quadra, Toronto,</p>
                            <p>Canada Victiria Canada</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 '>
                    <div className='emergency-item flex '>
                        <div className='call'>
                            <button className="btn btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
  <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
</svg>

                            </button>
                            

                        </div>
                        <div className='info text-white  ml-4'>
                            <h1>Ambulance</h1>
                            <p>+07 5554 3332 322</p>
                            <p>+07 5554 3332 322</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emergency;