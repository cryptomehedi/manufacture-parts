import axios from 'axios';
import React, { useRef, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import usePartDetails from '../../hooks/usePartsDetails';
import Spinner from '../Shared/Spinner';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/solid';

const PartsDetails = () => {
    const [user] = useAuthState(auth)

    const {partsId} = useParams()
    const stockInput = useRef(0)
    const [availables, setAvailable] = useState(false)

    const [productDetails, setProductDetails] = usePartDetails(partsId)
    const {img,name,price, available ,description} = productDetails


    const handlePdUpdate = e => {
        let name = productDetails.name
        let img = productDetails.img
        let price = productDetails.price
        let quantity = productDetails.stock
        let description = productDetails.description
        let available 
        if(e){
            if(quantity > 0 ){
                available = productDetails.available - 1
            }else{
                available = 0
            }
        }else{
            const updateStock = parseInt(stockInput?.current?.value)
            if(!isNaN(updateStock)){
                if(updateStock > 0){
                    available = productDetails.available + updateStock
                    setAvailable(false)
                }else{
                    return  toast.error("Update Stock Can't Be Negative")
                }
            }else{
                available = productDetails.available + 1
                setAvailable(false)
            }
        }

        // const userInfo = user.email ? user.email : user.displayName
        const delivery = {img,name,price,available, description}
        console.log(delivery);
        // axios.put(`https://manufacture-parts.herokuapp.cominventory/${partsId}`, {delivery, userInfo} )
        // if(e){
        //     if(quantity > 0){
        //         toast.success('Product Delivery Successful')
        //     }
        //     else{
        //         toast.error('Product Not Available for Delivery')
        //     }
        // }else{
        //     toast.success(stock < 2 ? `${stock} Product Added Successfully` : `${stock} Products Added Successfully`)
        // }
        // delivery.stock === 0 && setAvailable(true)
        // setProductDetails(delivery)
    }


    return (
        <div>
            {
                productDetails.name ? <div className='grid grid-cols-1 lg:grid-cols-2 mt-11'>
                
                <div className=''>
                    <div className='flex justify-center mb-8'>
                        <img className='rounded-lg w-52 md:w-80' src={img} alt="" />
                    </div>
                    <p className='break-all md:w-full'>{description && <><span className='font-semibold'>Description:</span> {description}</>}</p>
                </div>
                
                <div>
                    <div className='flex justify-center items-center ml-8 md:ml-0'>
                        <div>
                            <p> <span className='font-medium text-xl'> Name:</span> <span className='font-medium'> {name}</span></p>
                            <p> <span className='font-medium text-xl'> Available:</span> <span className='font-medium'> {available === 0 ? 'Sold Out' : <>{available ===1 ?  <>{available} Piece</> : <>{available} Pieces</>}</>}</span></p>
                            <p> <span className='font-medium text-xl'> Price:</span> <span className='font-medium'> ${price} Per Unit</span></p>
                            <p> <span className='font-medium text-xl'> Minimum Order:</span> <span className='font-medium'> 1000 Pieces</span></p>
                            {
                                1000 <= available && <form className='flex'>
                                                        <div className='mr-3 flex items-center'><PlusCircleIcon className="w-8 text-green-400 bg-blue-100 rounded-full cursor-pointer hover:bg-blue-200 p-1" /></div>
                                                        <input className="mt-1 focus:ring-indigo-500 hover:border-slate-500 border py-2 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md" required ref={stockInput} name='stock' type="number" id="stock" placeholder='Purchase quantity'/>
                                                        <div className='ml-3 flex items-center'><MinusCircleIcon className="w-8 text-red-400 bg-blue-100 rounded-full cursor-pointer hover:bg-blue-200 p-1" /></div>
                                                    </form>
                            }
                            {/* <button onClick={()=>handlePdUpdate(false)} className='p-2 mr-5 bg-gray-400  font-semibold rounded-lg hover:bg-green-400 hover:text-white duration-300 mt-3'>Update stock</button> */}
                            <button onClick={()=>handlePdUpdate(true)} disabled={availables} className={availables? ' disabled:opacity-50 p-2 bg-gray-400 cursor-not-allowed font-semibold rounded-lg mt-3' : 'p-2 bg-gray-400  font-semibold rounded-lg hover:bg-green-400 w-full hover:text-white duration-300 mt-3'}>Purchase</button>
                        </div>
                    </div>
                
                </div>
            </div>
            : <div className="text-center mt-9"><Spinner text='Please wait! Your product is Loading......'/></div>
            }
        </div>
    );
};

export default PartsDetails;