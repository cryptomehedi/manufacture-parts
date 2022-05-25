import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Reviews = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/reviews')
        .then(data => setReview((data.data).reverse()))
    },[])
    return (
        <div className='mb-12 mt-20'>
            <h2 className='text-3xl mb-12 font-medium text-center'>Customers Reviews</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.slice(0,6).map(r=> <div className='bg-blue-50 p-3 rounded-lg mb-5' key={r._id}>
                        
                        <p className='text-sm'>Description: {r.review}</p>
                        <div className='flex justify-start items-center mt-4'>
                        
                            <div>
                                <h2>Name: {r.displayName}</h2>
                                <h4>Rating: {r.rating}</h4>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='flex justify-end hover:text-secondary mt-5 animate-bounce'><Link to='/dashboard/my-review' className='flex items-center'><span className='mr-1'>Add Your Review</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" /></svg></Link></div>
        </div>
    );
};

export default Reviews;