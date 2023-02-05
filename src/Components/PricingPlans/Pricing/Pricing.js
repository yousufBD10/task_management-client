import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookPricing from '../BookPricing/BookPricing';
import PricingCard from '../PricingCard/PricingCard';

const Pricing = () => {
    const [prices, setPrices] = useState([]);
    
    useEffect( () =>{
        fetch('pricing.json')
        .then(res =>res.json())
        .then(data => setPrices(data))
    }, []);

    return (
        <div className=' bg-slate-200 pt-5 px-5 bg-indigo-200'>
            <div className='text-center mb-11 mt-11'>
                <h6 className="text-2xl font-bold text-purple-800">One tool for your whole company</h6>
                <h4 className="text-4xl font-semibold text-stone-700">Available Subscription Plan for you!</h4>
                <p></p>
            </div>
            <div className='grid gap-2 mx-11 px-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                {
                    prices.map(price => <PricingCard
                        key={price._id}
                        price={price}
                    ></PricingCard>)
                }
            </div>
             </div>
    );
};

export default Pricing;