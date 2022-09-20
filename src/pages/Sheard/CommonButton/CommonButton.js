import React from 'react';
import commonButton from './commonButton.css';

const CommonButton = ({children}) => {
    return (
        <div>
            <button className='common-button font-bold'>{children}</button>
        </div>
    );
};

export default CommonButton;