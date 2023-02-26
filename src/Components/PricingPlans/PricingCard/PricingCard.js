import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { FcCheckmark } from 'react-icons/fc';
import { AuthContext } from '../../../Context/UserContext';


const PricingCard = ( { price } ) => {
    const {theme} = useContext(AuthContext);

    const { _id, priceDetails, pricing,button, title, subtitle, featureTitle, feature01, feature02, feature03, feature04, feature05, feature06, feature07 } = price;
    
    return (
        <div className={theme?.pricingCard}>
            
            <div className="ml-2 p-2">
                <div className='h-72'>
                <h2 className="card-title"><strong>{title}</strong></h2>
                <h1 className='text-2xl text-red-500 font-semibold'>Price: {pricing} USD</h1>
                <p className=' mb-11'>{priceDetails}</p>
                <h2>{subtitle}</h2>
                </div>
                <Link to={`/pricingOptions/${_id}`}>
                        <button className="bg-indigo-400  rounded font-bold text-lg  px-14 py-4 mt-2 mb-6 text-center text-stone-100">{button}</button>
                </Link>
                <hr></hr>
                <h5 className='mt-5 mb-11 pb-11'>{featureTitle}</h5>
                <div className='mt-11 pb-2 mb-2'>
                <p className='mt-3'><FcCheckmark/>{feature01}</p>
                <p><FcCheckmark/>{feature02}</p>
                <p><FcCheckmark/>{feature03}</p>
                <p><FcCheckmark/>{feature04}</p>
                <p><FcCheckmark/>{feature05}</p>
                <p><FcCheckmark/>{feature06}</p>
                <p><FcCheckmark/>{feature07}</p>
                </div>

            </div>
            
        </div>
    );
};

export default PricingCard;