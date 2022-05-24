import { TrashIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import axiosPrivate from '../../Api/Axios';
import Spinner from '../Shared/Spinner';
import DeleteOrder from './DeleteOrder';

const MyOrder = () => {
    const [deleteOrder, setDeleteOrder] =useState(null)
    const [user] = useAuthState(auth)


    const {data: myOrder, isLoading, refetch} = useQuery('MyOrder', ()=> axiosPrivate.get(`http://localhost:4000/order?customer=${user.email}`))
    if(isLoading){
        return <div className="text-center"><Spinner text='Your Total Appointments are Loading...' /></div>
    }
    // console.log(myOrder.data)
    return (
        <div>
            <h2 className='text-xl text-primary text-center my-2'>My Total Order: {myOrder?.data?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th>SN.</th>
                        <th>Parts Name</th>
                        <th className='text-center md:text-left'>Order Quality</th>
                        <th className='text-center md:text-left'>Price</th>
                        <th className='text-center md:text-left'>Payment Status</th>
                        <th>Cancel</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            myOrder?.data?.map((o,i)=>  <tr key={i} className="hover">
                            <th>{i+1}</th>
                            <td>{o.name}</td>
                            <td>{o.orderQuantity}</td>
                            <td>$ {o.totalPrice}</td>
                            <td>
                                {(o.totalPrice && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-sm bg-gradient-to-r from-secondary to-primary text-white border-0 '>Pay Now</button></Link>}
                                {(o.totalPrice && o.paid) && <><span className='text-green-400 font-bold'>Paid</span></>}
                            </td>
                            <td><label onClick={()=>setDeleteOrder(o)} htmlFor="delete-Confirm-Modal" className="btn bg-transparent hover:bg-gradient-to-r from-secondary to-primary hover:text-white text-red-400 btn-xs border-0 cursor-pointer w-10 rounded-full">{<TrashIcon/>}</label></td>
                        </tr>)
                        }
                    </tbody>
                </table>
                {
                    deleteOrder && <DeleteOrder deleteOrder={deleteOrder} setDeleteOrder={setDeleteOrder} refetch={refetch} />
                }
            </div>
            
        </div>
    );
};

export default MyOrder;