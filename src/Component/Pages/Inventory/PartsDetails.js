import React, { useRef, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import usePartDetails from '../../hooks/usePartsDetails';
import Spinner from '../Shared/Spinner';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/solid';

const PartsDetails = () => {
    const [user] = useAuthState(auth)

    const {partsId} = useParams()
    const orderInput = useRef(0)
    const [availables, setAvailable] = useState(true)
    const [orderQuantitys, setOrderQuantity] = useState(false)

    const [productDetails] = usePartDetails(partsId)
    const {img,name,price, available ,description} = productDetails
    const navigate = useNavigate()
    // let input
    const handlePdUpdate = async e => {
        let name = productDetails.name
        let img = productDetails.img
        let price = productDetails.price
        let available ;
        let description = productDetails.description
        const orderQuantity = parseInt(orderInput?.current?.value)
        
        if(orderQuantity > 999){
            available  = productDetails.available - orderQuantity
        }else{
            return toast.error("Minimum Order 1000")
        }
        
        const userInfo = user.email
        const restAvailable = {img,name,price,available, description}
        localStorage.setItem('restAvailable', JSON.stringify(restAvailable))
        
        const totalPrice = price * orderQuantity
        const order = {img,name,totalPrice, email: userInfo, orderQuantity }
        localStorage.setItem('order' , JSON.stringify(order))
        
        navigate(`/inventory/${partsId}/purchase`)
    }
    const handleSubmit = (e) =>{
        const order = parseInt(orderInput?.current?.value)
        // const order = parseInt(e.target.stock.value)
        // console.log(order);
        if(order > 999 && order < available+1){
            console.log("object");
            setAvailable(false)
        // }else if() {
        //     setAvailable(true)
        }
        else{
            setAvailable(true)
        }
    }
    const handleQuantity =(e)=>{
        const order=  parseInt(orderInput?.current?.value)
        if(available > order){
            setOrderQuantity(false)
            let plus = order + 1000
            orderInput.current.value = plus
            handleSubmit()
        }else{
            setOrderQuantity(true)
        }         
        
    }
    const handleQuantityMinus =()=>{
        let minus =  parseInt(orderInput?.current?.value) - 1000
         orderInput.current.value = minus
         handleSubmit()
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
                    <div className='flex justify-center items-center  ml-8 md:ml-0'>
                        <div>
                            <p> <span className='font-medium text-xl'> Name:</span> <span className='font-medium'> {name}</span></p>
                            <p> <span className='font-medium text-xl'> Available:</span> <span className='font-medium'> {available === 0 ? 'Sold Out' : <>{available ===1 ?  <>{available} Piece</> : <>{available} Pieces</>}</>}</span></p>
                            <p> <span className='font-medium text-xl'> Price:</span> <span className='font-medium'> ${price} Per Unit</span></p>
                            <p> <span className='font-medium text-xl'> Minimum Order:</span> <span className='font-medium'> 1000 Pieces</span></p>
                            {
                                1000 <= available && <form  onSubmit={e=> e.preventDefault()} className='flex'>
                                                        <div disabled={orderQuantitys} onClick={()=>{handleQuantity()}} className='mr-3 flex items-center'><PlusCircleIcon className="w-8 text-green-400 bg-blue-100 rounded-full cursor-pointer hover:bg-blue-200 p-1" /></div>
                                                        <input onChange={()=>handleSubmit()} required ref={orderInput} className="mt-1 focus:ring-indigo-500 hover:border-slate-500 border py-2 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"  name='stock' type="number" id="stock" placeholder='Purchase quantity'/>
                                                        <button disabled={availables} onClick={()=>{handleQuantityMinus()}} className='ml-3 flex items-center'><MinusCircleIcon className="w-8 text-red-400 bg-blue-100 rounded-full cursor-pointer hover:bg-blue-200 p-1" /></button>
                                                    </form>
                            }
                            {/* <button onClick={()=>handlePdUpdate(false)} className='p-2 mr-5 bg-gray-400  font-semibold rounded-lg hover:bg-green-400 hover:text-white duration-300 mt-3'>Update stock</button> */}
                            <button onClick={()=>handlePdUpdate(false)} disabled={availables} className={availables? ' disabled:opacity-50 p-2 bg-gray-400 cursor-not-allowed font-semibold w-full rounded-lg mt-3' : 'p-2 bg-gray-400  font-semibold rounded-lg hover:bg-green-400 w-full hover:text-white duration-300 mt-3'}>Purchase</button>
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