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
  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
  <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
  <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
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