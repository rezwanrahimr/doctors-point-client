import React from 'react';
import s1 from '../../../assets/s1.png';
import s2 from '../../../assets/s2.png';
import s3 from '../../../assets/s3.png';
import s4 from '../../../assets/s4.png';

const OurServices = () => {
    return (
        <div className='mt-12'>
            <h4 className='text-center text-5xl font-medium'>Our Services</h4>
            <div className='flex justify-center my-3'>
            <progress class="progress  progress-error w-36 "></progress>
            </div>
            
            
            <div className='flex mt-12 p-6'>
                <div class="card w-96 ">
                    <figure class="px-10 pt-10">
                        <img src={s1} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Diagnostics</h2>
                        <p>An ius quas reprehendunt, graecis adversarium mei cu. Dolorem dissentiunt eos et.</p>
                        
                    </div>
                </div>
                <div class="card w-96 ">
                    <figure class="px-10 pt-10">
                        <img src={s2} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Lung Recording</h2>
                        <p>An ius quas reprehendunt, graecis adversarium mei cu. Dolorem dissentiunt eos et.</p>
                        
                    </div>
                </div>
                <div class="card w-96 ">
                    <figure class="px-10 pt-10">
                        <img src={s3} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Diagnosis of Heart</h2>
                        <p>An ius quas reprehendunt, graecis adversarium mei cu. Dolorem dissentiunt eos et.</p>
                        
                    </div>
                </div>
                <div class="card w-96 ">
                    <figure class="px-10 pt-10">
                        <img src={s4} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Timely Treatment</h2>
                        <p>An ius quas reprehendunt, graecis adversarium mei cu. Dolorem dissentiunt eos et.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;