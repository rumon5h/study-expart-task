import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[90vh]'>
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    );
};

export default Loading;