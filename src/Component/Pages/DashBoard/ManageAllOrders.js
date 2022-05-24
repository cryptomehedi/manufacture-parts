import { TrashIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import axiosPrivate from '../../Api/Axios';
import Spinner from '../Shared/Spinner';
import DeleteOrder from './DeleteOrder';

const ManageAllOrders = () => {

    const [deleteOrder, setDeleteOrder] =useState(null)
    // const [user] = useAuthState(auth)


    const {data: myOrder, isLoading, refetch} = useQuery('MyOrder', ()=> axiosPrivate.get(`http://localhost:4000/allOrder`))
    if(isLoading){
        return <div className="text-center"><Spinner text='Your Total Appointments are Loading...' /></div>
    }

    return (
        <div>
            <h2 className='text-xl text-primary text-center my-2'>Total Order: {myOrder?.data?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th>SN.</th>
                        <th className='text-center md:text-left'>Email</th>
                        <th>Parts Name</th>
                        <th className='text-center md:text-left'>Order Quality</th>
                        <th className='text-center md:text-left'>Status</th>
                        <th>Cancel</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            myOrder?.data?.map((o,i)=>  <tr key={i} className="hover">
                            <th>{i+1}</th>
                            <td>{o.email}</td>
                            <td>{o.name}</td>
                            <td>{o.orderQuantity}</td>
                            <td>
                                {(!o.shipped && o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-sm bg-gradient-to-r from-secondary to-primary text-white border-0 '>Shipped Now</button></Link>}
                                {(o.paid && o.shipped) && <><span className='text-green-400 font-bold'>Shipped</span></>}
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

export default ManageAllOrders;