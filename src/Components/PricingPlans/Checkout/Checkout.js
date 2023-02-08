import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { FcCheckmark } from 'react-icons/fc';

const Checkout = () => {
    
    const { _id, priceDetails, pricing, title, subtitle, featureTitle, feature01, feature02, feature03, feature04, feature05, feature06, feature07 } = useLoaderData()
    
    return (
        <div>
                    <div className="my-9 mx-11 py-3 px-11 h-auto bg-base-100 shadow-2xl rounded-xl">
            
            <div className="mx-11 my-11 px-11 flex flex-row">
                <div className='h-72 pt-11 mr-11'>
                <h2 className="card-title"><strong>{title}</strong></h2>
                <h1 className='text-3xl text-red-500 font-semibold'>Price: {pricing} USD</h1>
                <p className='text-stone-500 mb-5'>{priceDetails}</p>
                <h1 className='text-lg'>{subtitle}</h1>
                <Link to={`/pricingOptions/${_id}`}>
                        <button className="bg-indigo-400 p-4 text-xl font-bold rounded mt-7 text-white text-center">Order Now!</button>
                </Link>
                </div>                
                <div className='mt-1 pb-2 mb-2 font-bold text-lg'>
                <h5 className='mt-1 mb-1 pb-1'>{featureTitle}</h5>
                <p className='mt-1'><FcCheckmark/>{feature01}</p>
                <p><FcCheckmark/>{feature02}</p>
                <p><FcCheckmark/>{feature03}</p>
                <p><FcCheckmark/>{feature04}</p>
                <p><FcCheckmark/>{feature05}</p>
                <p><FcCheckmark/>{feature06}</p>
                <p><FcCheckmark/>{feature07}</p>
                </div>
            </div>
            </div>
        </div>
    );
};
export default Checkout;