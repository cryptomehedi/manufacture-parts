import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DeleteProduct = ({refetch, deleteProduct , setDeleteProduct}) => {
    const {name, _id} =  deleteProduct
    const handleDeleteTreatments =async id=>{
        await axios.delete(`http://localhost:4000//parts/${id}`)
        .then(data => {
            if(data.data.deletedCount){
                toast.success(<p><span className='text-red-500 font-bold'>{name}</span> Your Parts has Removed Successfully</p>)
                refetch()
                setDeleteProduct(null)
            }else{
                toast.error('PLease try again later')
            }
        })
        
    }


    return (
        <div>
        <input type="checkbox" id="delete-Confirm-Modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <h3 className="font-bold text-lg text-red-400">Are You Sure You Want to Delete <span className='text-red-500'>{name}</span> !</h3>
            <div className="modal-action">
            <button onClick={()=> handleDeleteTreatments(_id)} className="btn btn-xs bg-red-300 hover:bg-red-500 border-0 text-white">Confirm</button>
            <label htmlFor="delete-Confirm-Modal" className="btn btn-xs">Cancel</label>
            </div>
        </div>
        </div>
    </div>
    );
};

export default DeleteProduct;