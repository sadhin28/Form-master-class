import React from 'react';
import SpecialPerson from '../SpecialPerson/SpecialPerson';

const Myself = () => {
    return (
        <div>
            <h1>Me</h1>
            <div className="border border-green-500 rounded-2xl p-2">
                 <SpecialPerson></SpecialPerson>
            </div>
        </div>
    );
};

export default Myself;