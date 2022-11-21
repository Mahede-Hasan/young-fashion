import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const ManageProducts = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(result=>setProducts(result))
    },[])
   
    const handleDelete= id=>{
        const proceed = window.confirm('are sure to delete?')
        if(proceed){
            fetch(`http://localhost:5000/products/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                const rest = products.filter(product=> product._id !== id)
                setProducts(rest)
                toast.error('delete one product')
            })
        }
    }
    return (
        <div>
            <h1 className='text-teal-400 pl-4 py-3 text-xl font-semibold text-center'>Manage Products</h1>

           <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
           {
                products.map(product => <div className='h-[250px] w-[180px] border relative border-gray-200 mx-4 my-4' key={product._id}>
                    <img src={product.img} className='w-[100px]  mx-auto' alt="" />
                    <p className='text-center'>{product.name}</p>
                    <button className='w-full bg-red-500 hover:bg-red-700 absolute bottom-0 text-white font-bold ' onClick={()=>handleDelete(product._id)}>DELETE</button>
                </div>)
            }
           </div>

        </div>
    );
};

export default ManageProducts;