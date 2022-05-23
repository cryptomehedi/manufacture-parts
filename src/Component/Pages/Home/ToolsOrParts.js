import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ToolsOrParts = () => {
    const [parts, setParts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/allParts')
        .then(data=> setParts(data.data))
    },[])
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div>
            <h2 className='text-3xl mb-12 mt-20 font-medium text-center'>Our Parts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    parts.slice(0,6).map(part => <div className='bg-blue-50 rounded p-3' key={part._id}>
                        <div className='flex justify-center'><img className="w-32 border-blue-400 border-2 p-px h-32 rounded-full" src={part.img} alt="" /></div>
                        <h3 className='text-xl font-medium'>Name: {part.name}</h3>
                        <h3 className='text-lg font-medium'>Available: {part.available}</h3>
                        <div className='flex justify-between'>
                            <h3>Price: ${part.price} per unit</h3>
                            <h3>Minimum Order : 1000</h3>
                        </div>
                        <p className='text-xs'>Description: {part.description.slice(0,75)} <Link className='font-medium' to=''>...Reed More</Link></p>
                        <div className="text-center">
                                <button onClick={()=> navigateToServiceDetail(part._id)} className="bg-primary mt-4 hover:bg-secondary text-white hover:font-medium w-full p-1 rounded">Order Now</button>
                            </div>
                    </div>)
                }
            </div>
            <div className='flex justify-end mt-5 hover:text-secondary animate-bounce'><Link to='' className='flex items-center'><span className='mr-1'>See All Parts</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" /></svg></Link></div>
        </div>
    );
};

export default ToolsOrParts;