import React from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const Product = ({product}) => {
const {rating,title,price,id,picture} = product

const ratingArray=[]

const getRating=rating=>{
    for(let i=0;i<rating;i++){
        ratingArray.push(<FaStar className='text-[#FF912C] text-[17px]'></FaStar>)
    }
}
getRating(rating)

    return (
        <div className="card w-full bg-base-100 shadow-lg border">
        <figure className=' rounded-xl p-5'><img src={picture} alt="service" className='px-20 py-8 bg-[#F3F3F3] rounded-lg'/></figure>
        <div className="card-body py-0 pb-7 text-center">
            <div className='flex space-x-1 justify-center'>
                {
                    ratingArray.map((star,index)=><span key={index}>{star}</span>)
                }
            </div>
            <h2 className="text-2xl font-bold text-[#444444]">{title}</h2>
            <p className='text-xl text-main font-semibold'>${price}.00</p>
        </div>
    </div>
    );
};

export default Product;