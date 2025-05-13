import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Dad = () => {
    return (
        <div className=' text-center border border-amber-500 rounded-2xl p-5'>
            <h1 className='font-black'>Father</h1>
           <div className='grid grid-cols-2 gap-2'>
              <div  className="border border-blue-500 rounded-2xl p-2">
                <Myself></Myself>
            </div>
            <div  className="border border-green-500 rounded-2xl p-2">
                <Brother></Brother>
            </div>
            <div className="border border-red-500 rounded-2xl p-2">
                <Sister></Sister>
            </div>
           </div>
        </div>
    );
};

export default Dad;