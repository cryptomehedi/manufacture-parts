import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import axiosPrivate from '../../Api/Axios';
import Spinner from '../Shared/Spinner';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth)
    const {data: userProfile, isLoading, refetch} = useQuery('userProfile', ()=> axiosPrivate.get(`http://localhost:4000/user/${user.email}`))
    // console.log(userProfile);
    if(isLoading){return <Spinner/>}
    const onSubmit = async data => {
        const displayName= data.displayName || userProfile?.data?.displayName
        const education = data.education
        const phone = data.phone
        const address = data.address
        const updateProfile = {displayName, education, phone, address}
        console.log(updateProfile);
        await axios.put(`http://localhost:4000/users/${user.email}`, updateProfile )
        .then(data => {
            console.log(data)
            if(data.data.modifiedCount === 1 && data.data.matchedCount){
                toast.success('Profile updated successfully')
            }else if(data.data.matchedCount){
                toast.error('Profile Already updated')
            }
        })
        

        refetch()
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='mt-40'>
                <h2 className='card-title'>Your Profile</h2>
                <div>
                    <h2>Name: {userProfile?.data?.displayName}</h2>
                    <h2>Email: {userProfile?.data?.email}</h2>
                    <h2>Phone: {userProfile?.data?.phone}</h2>
                    <h2>Education: {userProfile?.data?.education}</h2>
                    <h2>Address: {userProfile?.data?.address}</h2>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className=" card w-96 bg-base-100 shadow-xl">
                    <div className="card-body ">
                        <h2 className='card-title'>Update Your Profile</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input {...register("displayName")} type="text" defaultValue={userProfile?.data?.displayName}  placeholder={userProfile?.data?.displayName} className="input input-bordered" />
                                    <p className='text-red-500'>{errors.displayName && errors.displayName.message}</p>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input {...register("email")} value={userProfile?.data?.email} type="email" placeholder="Your Email" disabled className="input input-bordered"  />
                                    <p className='text-red-500'>{errors.email && errors.email.message}</p>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Phone</span>
                                    </label>
                                    <input {...register("phone", { required: "Your Phone number is required"  })} type="text" defaultValue={userProfile?.data?.phone} placeholder="Your Phone Number" className="input input-bordered" />
                                    <p className='text-red-500'>{errors.phone && errors.phone.message}</p>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Education</span>
                                    </label>
                                    <input {...register("education", { required: "Your Education is required"  })} type="text" defaultValue={userProfile?.data?.education} placeholder="Your Education lvl" className="input input-bordered" />
                                    <p className='text-red-500'>{errors.education && errors.education.message}</p>
                                </div>
                                
                                
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Address</span>
                                    </label>
                                    <input {...register("address", { required: "Your Address is required"  })} type="text" defaultValue={userProfile?.data?.address} placeholder="Your Address" className="input input-bordered" />
                                    <p className='text-red-500'>{errors.address && errors.address.message}</p>
                                </div>
                                
                                
                                <div className="form-control mt-6">
                                    <button className='btn  text-white uppercase font-bold btn-secondary' >Submit</button>
                                </div>
                                
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;