import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import React, { useEffect, useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useToken from '../../hooks/useToken';
import Spinner from '../Shared/Spinner';
import SocialLogin from './SocialLogin';

const Registration = () => {
    const [ createUserWithEmailAndPassword, user, loading, error1 ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit, watch } = useForm();
    const [show, setShow] = useState(false)
    const [checked, setChecked] = useState(false)
    const [token] = useToken(user)

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(token){
            toast.success(`Congratulations ! "${user?.user?.displayName || user?.user?.email}" Please Confirm Your Email Address`)
            navigate(from, { replace: true })
        }
    },[token, navigate, user, from])

    const pass = useRef({});
    pass.current = watch("password", "");

    const onSubmit = async data => {
        const displayName= data.name
        const email = data.email
        const password = data.password
        await  createUserWithEmailAndPassword(email , password)
        await updateProfile({ displayName });
    };
    
    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title flex justify-center">Registration</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input {...register("name", { required: "Your Name is required"  })} type="text" placeholder="Your Name" className="input input-bordered" />
                            <p className='text-red-500'>{errors.name && errors.name.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9.]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })} type="email" placeholder="Your Email" className="input input-bordered"  />
                            <p className='text-red-500'>{errors.email && errors.email.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <div className="relative w-full">
                                <div className="absolute inset-y-0 right-0 flex items-center px-2">
                                    <input className="hidden js-password-toggle" id="toggle" type="checkbox" />
                                    <label onClick={() => setShow(!show)} className=" rounded px-2 py-1 text-sm text-gray-400 hover:text-blue-500 font-mono cursor-pointer js-password-label">{show ? <EyeOffIcon className='w-5' /> : <EyeIcon className='w-5'/>}</label>
                                </div>
                                <input {...register("password", { required: "You must specify a password", pattern: {value: /^(?=.*\d)(?=.*[!@#$%^&*()-_=?<>.,])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, message: 'Minimum 8 characters password, upper and lower case and number required' }})} className="appearance-none  input input-bordered w-full py-3 px-3 leading-tight pr-16 font-mono js-password" placeholder='Password' type={show ? 'text' : "password"}
                                />
                            </div>
                            <p className='text-red-500'>{errors.password && errors.password.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input {...register("password_repeat", { required: "You must confirm password", validate: value => value === pass.current || "The passwords do not match" })} type="password" placeholder="Confirm Password" className="input input-bordered" />
                            <p className='text-red-500'>{errors.password_repeat && errors.password_repeat.message}</p>
                        </div>
                        <p className='text-red-500 mt-2 ml-1 md:ml-10 font-semibold'>{error1?.message.length > 6 ? error1?.message : error2?.message}</p>
                        <label onClick={() =>setChecked(!checked)} className="cursor-pointer label">
                            <input type="checkbox" className="checkbox checkbox-secondary" />
                            <span className="label-text">Accept <span className='text-secondary'> Our</span> All Terms & Conditions</span>
                        </label>
                        <div className="form-control mt-6">
                            <button disabled={!checked} className={`btn  text-white uppercase font-bold ${checked ? 'btn-secondary' : 'cursor-not-allowed' }`}>Register</button>
                        </div>
                        <div className='text-center mt-2 font-semibold'>
                                        {
                                            loading && <Spinner text='Your Registration Is Processing...' />
                                        }
                                        {
                                            updating && <Spinner text='Your Registration Is Processing...' />
                                        }
                                    </div>
                    </form>
                    <p>Already Registered. Please <Link to='/login' className='text-secondary'>Login Here</Link> </p>
                    <SocialLogin/>
                </div>
            </div>
        </div>
    );
};

export default Registration;