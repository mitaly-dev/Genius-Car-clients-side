import React from 'react';
import { useContext } from 'react';
import { FaAngleDown, FaArrowDown } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const OrderItem = ({order}) => {
const {title,price,phone,message,img,email,customer,_id,status} = order

const {orders,setOrders,refresh,setRefresh,logOut} = useContext(AuthContext)

    
    const deleteOrder=(id)=>{
        const sure =window.confirm(`Are your sure your want to delete ${title}`)
        if(sure){
            fetch(`https://genius-car-server-nu-opal.vercel.app/orders/${id}`,{
                method:'DELETE',
                headers:{
                    authorization : `Bearer ${localStorage.getItem('genius-token')}`
                },
            })
            .then(res=>{
                if(res.status===401 || res.status===401){
                    logOut()
                }
               return res.json()
            })
            .then(data=>{
                toast.warning(`${title} deleted`,{autoClose:1000})
                setRefresh(!refresh)
            })
            .catch(error=>toast.error(error.message,{autoClose:1000}))
        }
  
    }

    const approveOrderHandle=(id)=>{
        fetch(`https://genius-car-server-nu-opal.vercel.app/orders/${id}`,{
            method:'PATCH',
            headers:{
                "content-type":"application/json",
                authorization : `Bearer ${localStorage.getItem('genius-token')}`
            },
            body:JSON.stringify({status:"Approved"})
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success(`${title} Approved`,{autoClose:1000})
            setRefresh(!refresh)
        })
        .catch(error=>toast.error(error.message,{autoClose:1000}))
    }

    return (
        <>
        <div className='grid grid-cols-5 gap-10 w-full items-center mb-7'>
            <div className="col-span-2 flex items-center space-x-3 justify-left">
                <button
                onClick={()=>deleteOrder(_id)}
                className="w-[35px] h-[35px] rounded-full bg-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white leading-[40px] m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="avatar">
                <div className="rounded w-24 h-24">
                    <img src={img} alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
                <div className='space-y-2'>
                <div className="font-bold">{customer}</div>
                <div className="text-sm opacity-50">{phone}</div>
                <div className="text-sm opacity-50">{email}</div>
                </div>
            </div>
            <div className='text-center font-bold'>
               {title}
            </div>
            <div className='text-center font-bold'>
                ${price}
            </div>
            <div  className='text-center'>
                {
                    status? 
                    <button className='border border-green-500 py-2 font-semibold text-green-500 w-[128px] m-auto rounded-lg flex items-center justify-center'>
                    Approved 
                    <FaAngleDown className='ml-2 text-[16px]'></FaAngleDown>
                    </button> : 
                    <button onClick={()=>approveOrderHandle(_id)} className='border bg-[#f71a1a] py-2 font-semibold text-white w-[128px] m-auto rounded-lg flex items-center justify-center'>
                    Pending 
                    <FaAngleDown className='ml-2 text-[16px]'></FaAngleDown>
                    </button>
                }
            </div>
        </div>
    </>
    );
};

export default OrderItem;