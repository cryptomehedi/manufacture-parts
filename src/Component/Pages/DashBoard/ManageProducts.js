import { TrashIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/Axios';
import Spinner from '../Shared/Spinner';
import DeleteProduct from './DeleteProduct';

const ManageProducts = () => {
    const [count, setCount] = useState(0)

    const [deleteProduct, setDeleteProduct] =useState(null)


    const {data: allParts, isLoading, refetch} = useQuery('MyParts', ()=> axiosPrivate.get(`http://localhost:4000/allParts`))
    if(isLoading){
        return <div className="text-center"><Spinner text='Your Total Appointments are Loading...' /></div>
    }

    const handleSubmit= async part=> {
        // console.log(part)
        let {name, _id}   = part
        
        const available = part.available +  parseInt(count)
        const newAvailable = {available}
        await axios.put(`http://localhost:4000//inventory/${_id}`, {newAvailable} )
        .then(data=>{
            console.log(data.data)
            if (data.data.modifiedCount === 1){
                toast.success(`${name} Updated successfully`)
                refetch()
            }
        })
        
    }

    return (
        <div>
            <h2 className='text-xl text-primary text-center my-2'>My Total Order: {allParts?.data?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th>SN.</th>
                        <th>Parts Name</th>
                        <th className='text-center md:text-left'>Quality</th>
                        <th className='text-center md:text-left'>Update Quantity</th>
                        <th className='text-center md:text-left'>Update</th>
                        <th>delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            allParts?.data?.map((p,i)=>  <tr key={i} className="hover">
                            <th>{i+1}</th>
                            <td>{p.name}</td>
                            <td>{p.available}</td>
                            <td><form onsubmit={e=> e.preventDefault()}><input onChange={e=> setCount(e.target.value)} required  className="mt-1 focus:ring-indigo-500 hover:border-slate-500 border py-2 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"  name='stock' type="number" id="stock" placeholder='Purchase quantity'/></form></td>
                            <td><button onClick={()=>handleSubmit(p)}><span className='btn btn-sm'>Update</span></button> </td>
                            <td><label onClick={()=>setDeleteProduct(p)} htmlFor="delete-Confirm-Modal" className="btn bg-transparent hover:bg-gradient-to-r from-secondary to-primary hover:text-white text-red-400 btn-xs border-0 cursor-pointer w-10 rounded-full">{<TrashIcon/>}</label></td>
                        </tr>)
                        }
                    </tbody>
                </table>
                {
                    deleteProduct && <DeleteProduct deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct} refetch={refetch} />
                }
            </div>
            
        </div>
    );
};

export default ManageProducts;