import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useState } from 'react';
import { toast } from 'react-toastify';
import SocialLogin from './SocialLogin';
import { accessToken } from '../../api/JwtToken';

const Login = () => {
    const {
        userSignIn
    } = useContext(AuthContext)

    const [formData,setFormData] = useState({})
    const {email,password} = formData
    const [emailError,setEmailError] = useState()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    

    const handleInputData=(event)=>{
        const name = event.target.name
        const value = event.target.value
        
        if(name==="email"){
            if(!/\S+@\S+\.\S+$/.test(value)){
                setEmailError("Email not valid")
                return
            }
            setEmailError()
            setFormData({...formData,[name]:value})
            return
        }
        if(name==="password"){
            setFormData({...formData,[name]:value})
            return
        }
    }

    const navigation = ()=>{
        navigate(from,{replace:true})
    }
    const userSignInHandle=(event)=>{
        event.preventDefault()
        if( email && password){
            userSignIn(email,password)
            .then((result)=>{
                accessToken(email,navigation)
            })              
            .catch(error=>toast.error(error.message,{autoClose:1500}))
        }
    }



    return (
        <div className="py-16">
        <div className="grid grid-cols-2 gap-10">
            <div><img src={login} alt="" className='w-3/4 m-auto' /></div>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-gray-800 border">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={userSignInHandle} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-600 font-semibold">Email</label>
                        <input onBlur={handleInputData} type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-200 outline-none border focus:border-main" />
                        {
                            emailError?
                             <div className='flex items-center font-semibold text-red-500'>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-4 h-6 mr-2">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                             </svg>
                             {emailError}
                             </div> : undefined
                           }
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-600 font-semibold">Password</label>
                        <input onBlur={handleInputData} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-200 outline-none border focus:border-main" />
                        <div className="flex justify-end text-xs text-gray-600 font-semibold mt-2">
                            <Link rel="noopener noreferrer" to="#">Forgot Password?</Link>
                        </div>
                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-lg bg-main text-white">Sign in</button>
                </form>
                <SocialLogin navigation={navigation}></SocialLogin>
                <p className="text-xs text-center sm:px-6 text-gray-500">Have an account? 
                    <Link rel="noopener noreferrer" to="/genius-car/register" className="underline text-main font-semibold">Sign Up</Link>
                </p>
            </div>
        </div>
      </div>
    );
};

export default Login;