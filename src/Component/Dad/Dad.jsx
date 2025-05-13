import React from 'react';
import Myself from '../Myself/Myself';

const Dad = () => {
    return (
        <div className='border border-amber-500 rounded-2xl p-2'>
            <h1>Father</h1>
            <div  className="border border-blue-500 rounded-2xl p-2">
                <Myself></Myself>
            </div>
        </div>
    );
};

export default Dad;