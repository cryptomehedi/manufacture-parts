import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axiosPrivate from '../../Api/Axios';
import Spinner from '../Shared/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1XmRBzpOyvVWJMUt5sh1mooz3W9JT5ZupXtju6tnFFy8yWInx9j6hNRvThgE7zbSez5nx6qFTSv574OVdMH0nv00iTwHKpVn');

const Payment = () => {
    const {id} = useParams()

    const {data , isLoading} = useQuery(['order',id], () => axiosPrivate.get(`https://manufacture-parts.herokuapp.com/order/${id}`))
    if(isLoading){
        return <Spinner/>
    }
    console.log(data.data)
    const {name,displayName, totalPrice, orderQuantity, img} = data?.data


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card w-screen max-w-md  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p className='text-xl'>Hello, <span className='text-secondary font-semibold' >{displayName}</span></p>
                            <h2 className="card-title">Pay For: <span className='text-2xl text-secondary'>{name}</span></h2>
                            <div className='flex justify-center'><img className="rounded-2xl w-1/2" src={img} alt="" /></div>
                            <p className='text-xl text-center'>Your Total Order Quantity <span className='text-xl text-red-500'>{orderQuantity}</span> Pieces</p>

                            <p className='text-xl text-center'>Please Pay: <span className='text-red-500 text-xl font-semibold'>${totalPrice}</span></p>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-screen max-w-md shadow-2xl bg-base-100">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm orderItem={data?.data} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Payment;