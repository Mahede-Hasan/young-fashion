import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/products',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            toast('Add New Product')
        })
    };
    return (
        <div>
            <h1 className='text-teal-400 pl-4 py-3 text-xl font-semibold text-center'>Add Prudcts</h1>
            <form onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col w-[50%] mx-auto'
            >
                <input {...register("name")}
                    placeholder="Product Name"
                    className='border border-teal-400 mb-4'
                    type='text'
                />
                <input {...register("img")}
                    placeholder="Photo url"
                    className='border border-teal-400 mb-4'
                    type='text'
                />

                <input {...register("prePrice")}
                    placeholder="Pre Price"
                    className='border border-teal-400 mb-4'
                    type='text'
                />

                <input {...register("price")}
                    placeholder="Price"
                    className='border border-teal-400 mb-4'
                    type='text'
                />

                <input {...register("category")}
                    placeholder="Category"
                    className='border border-teal-400 mb-4'
                    type='text'
                />
                <input {...register("sku")}
                    placeholder="SKU"
                    className='border border-teal-400 mb-4'
                    type='text'
                />
                <input {...register("available")}
                    placeholder="Available"
                    className='border border-teal-400 mb-4'
                    type='text'
                />
                <input {...register("quantity")}
                    placeholder="Quantity"
                    className='border border-teal-400 mb-4'
                    type='number'
                />
                <textarea {...register("description")}
                    placeholder="Description"
                    className='border border-teal-400 mb-4'
                    type='text'
                />

                <input type="submit" value="Add Service"
                    className='bg-teal-400 hover:bg-teal-500 text-white cursor-pointer py-2'
                />
            </form>
        </div>
    );
};

export default AddProducts;