import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/Axios';

const ConfirmOrder = ({refetch, confirmOrder , setConfirmOrder}) => {
    const {name, _id} =  confirmOrder
    const handleConfirmOrder =async id=>{

        axiosPrivate.put(`http://localhost:4000/orderShipped/${id}`)
            .then(data=>{
                if(data.data.modifiedCount === 1){
                    toast.success(`Parts Shipped Successfully`)
                    refetch()
                }
            })
        
    }


    return (
        <div>
        <input type="checkbox" id="Confirm-Modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <h3 className="font-bold text-lg text-red-400">Are You Sure You Want to Shipping <span className='text-red-500'>{name}</span> !</h3>
            <div className="modal-action">
            <button onClick={()=> handleConfirmOrder(_id)} className="btn btn-xs bg-red-300 hover:bg-red-500 border-0 text-white">Confirm</button>
            <label htmlFor="Confirm-Modal" className="btn btn-xs">Cancel</label>
            </div>
        </div>
        </div>
    </div>
    );
};

export default ConfirmOrder;