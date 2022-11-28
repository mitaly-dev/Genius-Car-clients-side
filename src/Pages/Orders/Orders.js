import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import checkout from '../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../Context/AuthProvider';
import OrderItem from './OrderItem';

const Orders = () => {
    const {orders,setOrders,refresh,user,userLogOUt} = useContext(AuthContext)

    useEffect(()=>{
        fetch(`https://genius-car-server-nu-opal.vercel.app/orders?email=${user?.email}`,{
            headers:{
                authorization : `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
        .then(res=> {
            if(res.status === 401 ||res.status === 403){
            userLogOUt()
            toast.error("unauthentication user",{autoClose:1000})
            }
           return res.json()
        })
        .then(data=>setOrders(data))
    },[refresh,user?.email,userLogOUt,setOrders])
 
    return (
        <>
        {
            orders.length>0?
          <div>
            <div className="relative">
                <img
                className="object-cover w-full h-48 sm:h-96"
                src={checkout}
                alt=""
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
            </div>
             <div className="overflow-x-auto w-11/12 m-auto my-16">
                <div>
                    {
                        orders?.map(order=><OrderItem key={order._id} order={order}></OrderItem>)
                    }
                </div>
            </div>
          </div> : 
          <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 dark:text-gray-600">
                  <path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                  <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
                  <polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
                  <polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
              </svg>
              <p className="text-3xl">{orders.message? orders.message : "Not found any Orders"}</p>
              <p className='text-lg font-semibold'>Please<Link to="/services" className='underline text-main ml-3'>Order now</Link></p>
          </div>
        </section>
        }   
        </>
    );
};

export default Orders;