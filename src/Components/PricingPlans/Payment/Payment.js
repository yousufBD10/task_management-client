import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
//import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
//import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm/CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    //const navigation = useNavigation();
    const { name, price, } = booking;
    // if(navigation.state === "loading"){
    //     return <Loading></Loading>
    // }
    return (
        <div className='my-11 mx-40 p-11  rounded-lg text-lg font-bold'>
            <h3 className="text-3xl">Payment {name}</h3>
            <p className="text-xl">Please pay for your subscription plan.</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;