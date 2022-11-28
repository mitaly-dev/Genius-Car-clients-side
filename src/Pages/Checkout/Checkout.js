import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import checkout from '../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../Context/AuthProvider';

const Checkout = () => {
    const service = useLoaderData()
    const {user, refresh, setRefresh} = useContext(AuthContext)

    const {facility,img,price,service_id,title,description,_id} = service
    console.log(service)
  
    const orderConfirmHandle=(event)=>{
        event.preventDefault()
        const form = event.target
        const firstName=form.firstName.value
        const lastName=form.lastName.value
        const phone = form.phone.value
        const  message=form.message.value

        const order={
            customer:`${firstName} ${lastName}`,
            email:user?.email || "unregister",
            phone,
            message,
            img,
            price,
            title,
            service_id:_id
        }
        console.log(order)
       if(firstName && lastName && phone && message){
        fetch('https://genius-car-server-mitaly-dev.vercel.app/orders',{
        method:'POST',
        headers:{
            "content-type":"application/json",
            authorization : `Bearer ${localStorage.getItem('genius-token')}`
        },
        body:JSON.stringify(order)
       })
       .then(res=>res.json())
       .then(data=>{
            if(data.acknowledged){
                toast.success("Checkout successfull",{autoClose:1000})
                form.reset()
                setRefresh(!refresh)
            }
            else{
                console.log(data)
                toast.error(data.message,{autoClose:1500})
            }
       })
       .catch(error=>toast.error(error.message,{autoClose:1500}))
       }
       else{
        toast.warning("Please provide us all valid information",{autoClose:1000})
       }
    }
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
   
    return (
        <div>
             <div className="relative">
                <img
                className="object-cover w-full h-48 sm:h-96"
                src={checkout}
                alt=""
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
            </div>
            <div className='bg-[#F3F3F3] p-24 my-20'>
                <form onSubmit={orderConfirmHandle}>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <input id="firstName" name="firstName" type="text" placeholder="First Name" className="outline-none border p-3 w-full rounded-md " />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <input id="lastName" name="lastName" type="text" placeholder="Last Name" className="outline-none border p-3 w-full rounded-md " />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                                <input id="phone" name="phone" type="text" placeholder="Your Phone" className="outline-none border p-3 w-full rounded-md " />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <input id="email" type="email" readOnly defaultValue={user?.email} placeholder="Your Email" className="outline-none border p-3 w-full rounded-md" />
                            </div>
                        <div className="col-span-full">
                            <textarea id="message" name="message" placeholder="Your Message" className="py-5 px-5 outline-none w-full rounded-md "></textarea>
                        </div>
                        <div className="col-span-full">
                            <button type="submit" className='bg-main py-4 w-full text-white text-center font-semibold rounded-lg'>Order Confirm
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;