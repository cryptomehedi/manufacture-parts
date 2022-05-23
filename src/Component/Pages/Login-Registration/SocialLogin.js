import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Spinner from '../Shared/Spinner';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const location = useLocation()
    // let from = location.state?.from?.pathname || "/";
    // const navigate = useNavigate()
    // const [token] = useToken(user)
    
    // useEffect(() => {
    //     if(token){
    //         toast.success(`Welcome 😉 ... ${ user?.user?.displayName || user?.user?.email }`)
    //         navigate(from, { replace: true })
    //     }
    // },[user, token , navigate, from])

    return (
        <div>
            <div className="divider">OR</div>
            <div className='flex justify-center'>
                <button onClick={async ()=>{ await signInWithGoogle();}} className="btn btn-outline hover:bg-gradient-to-r from-secondary to-primary">Continue With Google</button>
            </div>
            <p className='text-red-500 ml-5 duration-1000 delay-700 font-semibold'>{error?.message && error?.message }</p>
            <div className='text-center mt-2 font-semibold'>
                    {
                        loading && <Spinner text='Your Login Is Processing...' />
                    }
                    
                </div>
        </div>
    );
};

export default SocialLogin;