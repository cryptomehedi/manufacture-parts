import React , { useEffect, useState } from 'react';
import { CardElement , useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import Spinner from '../Shared/Spinner';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/Axios';

const CheckoutForm = ({orderItem}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [cardSuccess, setCardSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const {totalPrice,_id, displayName,email} = orderItem


    useEffect(()=>{
        axios.post('http://localhost:4000/create-payment-intent', {totalPrice})
        .then(data=>{
            if(data?.data?.clientSecret){
                setClientSecret(data.data.clientSecret)
            }
        })
    },[totalPrice])

    const handleSubmit= async e => {
        e.preventDefault();
        setCardError('')
        setProcessing(true)
        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if(error){
            setProcessing(false)
            setCardError(error?.message)
        }else{
            setCardError('')
        }

        setCardError(error?.message || '')
        // confirm card payment   
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                    name: displayName,
                    email: email
                    },
                },
            },
        );
        if(intentError){
            setCardError(intentError?.message);
            setProcessing(false)
        }else{
            setCardError('')
            setTransactionId(paymentIntent?.id)
            setCardSuccess(`Your ${paymentMethod.card.brand} card Payment Is Completed`)
            setProcessing(false)

            const payment = {
                order: _id,
                transactionId: paymentIntent.id

            }

            axiosPrivate.put(`http://localhost:4000/order/${_id}`, payment)
            .then(data=>{
                if(data.status === 200){
                    toast.success(`Your Transaction Is Completed`)

                }
            })
            
        }
    }
    

    return (
        <>
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm border-0 my-5 bg-gradient-to-r from-secondary to-primary text-white" type="submit" disabled={!stripe || !clientSecret || cardSuccess}>
                Pay
            </button>
            {
            processing && <Spinner text='Your Transaction Is Processing......'/>
            }
            {
                cardError ? <p className="text-red-500  font-semibold">{cardError}</p> : <p className="text-green-500 mt-3 font-semibold">{cardSuccess}</p>
            }
            {
            transactionId && <p className='text-green-400'>Your Transaction Id: <span className="text-orange-400">{transactionId}</span></p>
            }
        </form>
        
        
        </>
    );
};

export default CheckoutForm;