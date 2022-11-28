import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Title from '../Shared/Title';
import ServiceItem from './ServiceItem';

const Services = () => {
    const [services,setServices] = useState([])
    const [search,setSearch] = useState('')
    const [isAsn,setIsAsn] = useState("Ascending")
    const searchRef = useRef()

    useEffect(()=>{
        fetch(`http://localhost:5000/services?search=${search}&order=${isAsn==="Ascending"? 1 : -1}`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[isAsn,search])

    const searchService=()=>{
        setSearch(searchRef.current.value)
    }

    const content = {
        head:"service",
        title:'Our Service Area',
        des:"the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
    }

    return (
        <div className='my-16'>
            <Title content={content} ></Title>
            <div className='flex justify-between'>
                <select onChange={(e)=>setIsAsn(e.target.value)} className="select border-main outline-none focus:outline-none px-10 mb-5">
                <option className='py-2 border-main text-main'>Ascending</option>
                <option className='py-2 border-main text-main'>Descending</option>
                </select>
                <div className='flex w-full justify-end'>
                <input ref={searchRef} type="text" placeholder="search...." className="focus:outline-none input input-bordered input-main w-6/12 " />
                <button onClick={searchService} className="btn bg-main border-none">Search</button>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                {
                    services.map(service=><ServiceItem key={service._id} service={service}></ServiceItem>)
                }
            </div>
            <div className='text-center'>
                <button className="mt-10 px-7 ml-2 rounded-lg py-3 border border-main hover:text-white text-main hover:bg-main hover:border-main font-semibold">More Services</button>
            </div>
        </div>
    );
};

export default Services;