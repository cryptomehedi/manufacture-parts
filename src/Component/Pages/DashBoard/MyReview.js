import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import axiosPrivate from '../../Api/Axios';

const MyReview = () => {
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const onSubmit = async data => {
        const displayName= user.displayName
        const email = user.email
        const rating = data.rating / 10
        const review = data.review
        const reviews = {displayName,email,rating,review}
        axiosPrivate.post('http://localhost:4000/reviews', reviews)
        .then(data=>{
            console.log(data.data);
            if(data.data.insertedId){
                toast.success('Your Review was Added successfully')
                navigate('/')
            }
        })

    };

    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title flex justify-center">Your Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Rating</span>
                            </label>
                            <input {...register("rating", { required: "Your Rating is required"  })} type="range" min="10" max="50" defaultValue={50} class="range range-primary" />
                                <div class="w-full flex justify-between text-xs px-2">
                                <span>1</span>
                                <span>1.5</span>
                                <span>2</span>
                                <span>2.5</span>
                                <span>3</span>
                                <span>3.5</span>
                                <span>4</span>
                                <span>4.5</span>
                                <span>5</span>
                                </div>
                            {/* <input {...register("rating", { required: "Your Rating is required"  })} type="range" min="0" max="5" defaultValue={4} class="range range-primary" /> */}
                            {/* <input  type="number" placeholder="Your Rating" className="input input-bordered" /> */}
                            <p className='text-red-500'>{errors.rating && errors.rating.message}</p>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Review description</span>
                            </label>
                            <textarea {...register("review", { required: "Your Review is required"  })}  type="text" placeholder="Your Review" className="input h-40 input-bordered" />
                            <p className='text-red-500'>{errors.review && errors.review.message}</p>
                        </div>
                        
                        
                        
                        <div className="form-control mt-6">
                            <button className={`btn  text-white uppercase font-bold btn-secondary`}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyReview;