import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='my-20'>
            <h2 className='text-3xl mb-12 font-medium text-center'>Ready to Order Your Parts Online?</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-7'>
                <div className='text-center'>
                    <p className='text-xl font-medium'>Customers</p>
                    <div className='flex justify-center my-2'><img className='w-24 hover:scale-125 hover:animate-spin' src="https://cdn-icons-png.flaticon.com/512/2651/2651001.png" alt="" /></div>
                    <p className='text-xl font-medium'>300 +</p>
                </div>
                <div className='text-center'>
                    <p className='text-xl font-medium'>Countries</p>
                    <div className='flex justify-center my-2'><img className='w-24 hover:scale-105 hover:animate-spin' src="https://cdn-icons-png.flaticon.com/512/2947/2947656.png" alt="" /></div>
                    <p className='text-xl font-medium'>40 +</p>
                </div>
                <div className='text-center'>
                    <p className='text-xl font-medium'>Feedback</p>
                    <div className='flex justify-center my-2'><img className='w-24 hover:scale-125 hover:animate-spin' src="https://cdn-icons-png.flaticon.com/512/1484/1484584.png" alt="" /></div>
                    <p className='text-xl font-medium'>300 +</p>
                </div>
                <div className='text-center'>
                    <p className='text-xl font-medium'>Parts Quoted</p>
                    <div className='flex justify-center my-2'><img className='w-24 hover:scale-125 hover:animate-spin' src="https://cdn-icons.flaticon.com/png/512/4879/premium/4879886.png?token=exp=1653251806~hmac=081b984892d3ab89efbc449f28c863eb" alt="" /></div>
                    <p className='text-xl font-medium'>100 +</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;