import React, { useEffect, useState } from 'react';
import useDocumentTitle from '../../../Share/useDocumentTitle';
import PricingCard from '../PricingCard/PricingCard';

const Pricing = () => {
    useDocumentTitle("Pricing || TaskMaster");
    const [prices, setPrices] = useState([]);
    
    useEffect( () =>{
        fetch(process.env.REACT_APP_SERVER_URL+'/pricingOptions')
        .then(res =>res.json())
        .then(data => setPrices(data))
    }, []);

    return (
        <div className='  pt-5 px-5 '>
            <div className='text-center mb-11 mt-11'>
                <h6 className="text-2xl font-bold text-purple-700">One tool for your whole company</h6>
                <h4 className="text-4xl font-semibold ">Available Subscription Plan for you!</h4>
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