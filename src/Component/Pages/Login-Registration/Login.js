import React, { useEffect, useState, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Spinner from '../Shared/Spinner';
import SocialLogin from './SocialLogin';


const Login = () => {
    const [ signInWithEmailAndPassword, user, loading,error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail( auth );
    const emailRef = useRef('')
    const passwordRef = useRef('')
    // const location = useLocation()
    // let from = location.state?.from?.pathname || "/";
    // const navigate = useNavigate()
    // const [token] = useToken(user)
    const [error2, setError2] = useState('')

    // useEffect(() => {
    //     if(token){
    //         toast.success(`Welcome Back 😉 ... ${ user?.user?.displayName || user?.user?.email }`)
    //         navigate(from, { replace: true })
    //     }
    // },[user,token, navigate, from])


    const handleSubmit = async e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        await signInWithEmailAndPassword(email, password)
    }
    const handelRestPass = async e =>{
        const email = emailRef.current.value
        if(email){
            await sendPasswordResetEmail(email);

            const resolveAfter4Sec =  new Promise(resolve => setTimeout(() => resolve("Email Send Successfully"), 4000));
            toast.promise(
                resolveAfter4Sec,
                {
                    pending: 'Reset Password Email is pending',
                    success: {
                        render({data}){
                        return `${data}`
                        },
                        // icon: "🟢",
                        icon: <svg viewBox="0 0 24 24" width="100%" height="100%" fill="var(--toastify-icon-color-success)"><path d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"></path></svg>,
                    }
                }
            )
        }else{
            setError2('Your Email Field is Empty')
        }
        
            
        
    }

    return (
        <div className='flex justify-center items-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title flex justify-center">Login</h2>
                    <form onSubmit={e=> e.preventDefault()}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" placeholder="email" className="input input-bordered" />
                            {error2 && <p className='text-red-500 ml-5 duration-1000 delay-700 font-semibold' >{error2}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input ref={passwordRef} type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <button onClick={handelRestPass} className="label-text-alt link link-hover">Forgot password?</button>
                            </label>
                            <p className='text-red-500 ml-5 duration-1000 delay-700 font-semibold'>{error?.message.length > 6 ? error?.message : error1?.message}</p>
                        </div>
                        <div className="form-control mt-6">
                            <input onClick={handleSubmit} type="submit" value="Login" className="btn btn-accent text-white uppercase font-bold"/>
                        </div>
                        <div className='text-center mt-2 font-semibold'>
                                        {
                                            loading && <Spinner text='Your Login Is Processing...' />
                                        }
                                        {
                                            sending && <Spinner text='Your Forget Password Email Is Sending...' />
                                        }
                                    </div>
                    </form>
                    <p className="text-center">New Here ? <Link to='/register' className='text-secondary cursor-pointer'>Create New Account</Link> </p>
                    <SocialLogin/>
                </div>
            </div>
        </div>
    );
};

export default Login;