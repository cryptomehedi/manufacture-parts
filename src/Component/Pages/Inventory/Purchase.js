import React  from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/Axios';


const Purchase = () => {
    const [user] = useAuthState(auth)
    const {partsId} = useParams()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const restAvailable = JSON.parse(localStorage.getItem('restAvailable'))
    // let {price} = restAvailable
    const userInfo = user?.email
    const order = JSON.parse(localStorage.getItem('order'))
    
    let { name, orderQuantity, totalPrice, img} = order
    // console.log(itemName);
    
    // 

        const onSubmit = async data => {
            const displayName= data.name
            const email = data.email
            const phone = data.phone
            const address = data.address
            console.log(displayName, email, phone, address)
            await axiosPrivate.put(`http://localhost:4000/inventory/${partsId}`, {restAvailable, userInfo} )
            .then(data=> {
                console.log(data.data);
                if (data.data.modifiedCount === 1){
                    const orderItem = {img,name,totalPrice, email: userInfo, orderQuantity,phone,displayName, address }
                    console.log(order);
                    axiosPrivate.post(`http://localhost:4000/inventory`, {orderItem, userInfo} )
                    .then(data => {
                        if(data.status === 200){
                            console.log("object");
                            toast.success('Your order has been Placed')
                            localStorage.removeItem('order')
                            localStorage.removeItem('restAvailable')
                            navigate('/dashboard')
                        }
                    })
                }
            })
        };
    return (
        <div className='flex justify-center items-center'>
            
            <div className=" card w-96 bg-base-100 shadow-xl">

            <div className="card-body ">
            <h2 className='card-title'>Purchase Details</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Order Item Name</span>
                            </label>
                            <input {...register("item")} type="text" value={name} placeholder="Your Name" className="input input-bordered" />
                            <p className='text-red-500'>{errors.item && errors.name.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Order Item Price</span>
                            </label>
                            <input {...register("price")} type="text" value={totalPrice} placeholder="Your Total Price" className="input input-bordered" />
                            <p className='text-red-500'>{errors.price && errors.price.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input {...register("name")} type="text" value={user?.displayName} placeholder="Your Name" className="input input-bordered" />
                            <p className='text-red-500'>{errors.name && errors.name.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input {...register("email")} value={user?.email} type="email" placeholder="Your Email" className="input input-bordered"  />
                            <p className='text-red-500'>{errors.email && errors.email.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input {...register("phone", { required: "Your Phone number is required"  })} type="text" placeholder="Your Phone Number" className="input input-bordered" />
                            <p className='text-red-500'>{errors.phone && errors.phone.message}</p>
                        </div><div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Address</span>
                            </label>
                            <input {...register("address", { required: "Your Address is required"  })} type="text" placeholder="Your Address" className="input input-bordered" />
                            <p className='text-red-500'>{errors.address && errors.address.message}</p>
                        </div>
                        
                        
                        <div className="form-control mt-6">
                            <button className='btn  text-white uppercase font-bold btn-secondary' >Submit</button>
                        </div>
                        
                </form>
            </div>
        </div>
        </div>
    );
};

export default Purchase;