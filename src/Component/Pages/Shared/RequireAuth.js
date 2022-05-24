import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Spinner from './Spinner';

const RequireAuth = ({children}) => {
    const [user , loading] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);


    let location = useLocation();
    if(loading){
        return <div className='my-48'><div className="flex justify-center "><Spinner/></div></div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if(user.providerData[0]?.providerId ==='password' && !user.emailVerified){
        return <div className=' text-center my-40'>
                    <h3 className='text-3xl font-semibold'>Your Email is not verified</h3>
                    <button className='p-1 mt-12 w-1/4 rounded btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold duration-300'
                        onClick={ async ()=>{
                            await sendEmailVerification()
                            const resolveAfter4Sec =  new Promise(resolve => setTimeout(() => resolve("Email Send Successfully 😉"), 4000));
                            toast.promise(
                                
                                resolveAfter4Sec,
                                {
                                    pending: 'Email Verification Is Sending...',
                                    success: {
                                        render({data}){
                                        return `${data}`
                                        },
                                        // icon: "🟢",
                                        icon: <svg viewBox="0 0 24 24" width="100%" height="100%" fill="var(--toastify-icon-color-success)"><path d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"></path></svg>,
                                    }
                                }
                            )
                        }
                    }> Verify Email</button>
                </div>
    }
    return children
};

export default RequireAuth;