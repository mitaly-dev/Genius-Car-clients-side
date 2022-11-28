import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceItem = ({service}) => {
    const {title,img,_id,price} = service


    return (
        <div className="card w-full bg-base-100 shadow-lg border">
            <figure className=' rounded-xl p-5'><img src={img} alt="service" className='h-[244px] rounded-lg'/></figure>
            <div className="card-body py-0 pb-7">
                <h2 className="card-title font-bold text-[#444444]">{title}</h2>
                <div className='flex justify-between items-center'>
                <p className='text-xl text-main font-semibold'>${price}</p>
                <Link to={`/checkout/${_id}`}>
                    <FaArrowRight className='text-main'></FaArrowRight>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;