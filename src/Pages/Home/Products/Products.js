import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Title from '../../Shared/Title';
import Product from './Product';

const Products = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('https://genius-car-server-nu-opal.vercel.app/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const content = {
        head:"Popular Products",
        title:'Browse Our Products',
        des:"the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
    }

    return (
        <div className='py-16'>
            <Title content={content}></Title>
            <div className='grid grid-cols-3 gap-10'>
                {
                    products.map(product=><Product key={product._id} product={product}></Product>)
                }
            </div>
            <div className='text-center'>
            <button className="mt-10 px-7 ml-2 rounded-lg py-3 border border-main hover:text-white text-main hover:bg-main hover:border-main font-semibold">More Products</button>
            </div>
        </div>
    );
};

export default Products;