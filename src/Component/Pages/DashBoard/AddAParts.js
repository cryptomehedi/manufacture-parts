import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/Axios';

const AddAParts = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imgStorageKey =  '525c9a324190eefb662d7ef83c111fcd'

    const onSubmit = async data => {
        const image = data.partsPicture[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result=> {
            if(result.success) {
                const img = result.data.url
                const parts = {
                    name: data.name,
                    price: data.price,
                    available: data.available,
                    description: data.description,
                    img: img,
                }
                axiosPrivate.post('http://localhost:4000/parts', parts)
                .then(data=> {
                    if(data.data.insertedId){
                        toast.success('Successfully Added A Parts')
                        reset()
                    }
                    else{
                        toast.error('Failed to add a Parts')
                    }
                })
                
            }
        })
    };


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <h2 className='text-3xl'>Add new parts</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Parts Name</span>
                    </label>
                    <input {...register("name", { required: "Part's Name is required"  })} type="text" placeholder="Part's Name" className="input input-bordered" />
                    <p className='text-red-500'>{errors.name && errors.name.message}</p>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input {...register("price", { required: "Part's Price is required"  })} type="text" placeholder="Part's Price" className="input input-bordered" />
                    <p className='text-red-500'>{errors.name && errors.name.message}</p>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Parts Available</span>
                    </label>
                    <input {...register("available", { required: "Part's Available is required"  })} type="text" placeholder="Part's Available" className="input input-bordered" />
                    <p className='text-red-500'>{errors.name && errors.name.message}</p>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Parts Description</span>
                    </label>
                    <input {...register("description", { required: "Part's Description is required"  })} type="text" placeholder="Part's Description" className="input input-bordered" />
                    <p className='text-red-500'>{errors.name && errors.name.message}</p>
                </div>

                

                

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Part's Picture</span>
                    </label>
                    <input {...register("partsPicture", { required: "Part's Picture is required"  })} type="file"  className="input input-bordered" />
                    <p className='text-red-500'>{errors.name && errors.name.message}</p>
                </div>

                <div className="form-control mt-6">
                    <button className='btn text-white font-bold btn-accent'>Add A Parts</button>
                </div>

            </form>
        </div>
    );
};

export default AddAParts;