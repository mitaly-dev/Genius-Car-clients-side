import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import google from '../../assets/images/social-icon/google.png'
import github from '../../assets/images/social-icon/github.png'
import twitter from '../../assets/images/social-icon/twitter.png'
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
import SocialLogin from './SocialLogin';

const Register = () => {
    const {
        user,
        createUser,
        userSignIn,
        emailVarification,
        updateUserProfile,
        userLogOUt,
        signInWithGoogle,
        singInWithGithub,
        setLoading
    } = useContext(AuthContext)
    const [formData,setFormData] = useState({})
    const {username,email,password,photoURL} = formData
    const [formDataError,setFormDataError] = useState({})
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.pathname || "/"

    const handleInputData=(event)=>{
        const name = event.target.name
        const value = event.target.value
        if(name==="username"){
            setFormData({...formData,[name]:value})
            return;
        }
        if(name==="photoURL"){
            setFormData({...formData,[name]:value})
            return;
        }
        if(name==="email"){
            if(!/\S+@\S+\.\S+$/.test(value)){
                setFormDataError({...formDataError,"emailError":"Email not find"})
                return
            }
            setFormDataError({...formDataError,"emailError":""})
            setFormData({...formData,[name]:value})
            return
        }
        if(name==="password"){
            if(value.length<6){
                setFormDataError({...formDataError,"passwordError":"Password should be minimum 6 digit"})
                return
            }
            setFormDataError({...formDataError,"passwordError":""})
            setFormData({...formData,[name]:value})
            return
        }
    }

    const createUserHandle=(event)=>{
        event.preventDefault()
        if(username && email && password && photoURL){
            createUser(email,password)
            .then((result)=>{
                emailVarification()
                updateProfileHandle()
                userLogOUt()
                .then(()=>{})
                navigate('/genius-car/login')
            })
            .catch(error=>toast.error(error.message,{autoClose:1500}))
        }
    }

    const updateProfileHandle=()=>{
        const profile={
            displayName:username,
            photoURL:photoURL
        }
        updateUserProfile(profile)
        .then(()=>{})
    }


    return (
        <div className="py-16">
        <div className="grid grid-cols-2 gap-10">
            <div><img src={login} alt="" className='w-3/4 m-auto' /></div>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-gray-800 border">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={createUserHandle} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-600 font-semibold">Username</label>
                        <input onBlur={handleInputData} type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-200 outline-none border focus:border-main" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photoURL" className="block text-gray-600 font-semibold">photoURL</label>
                        <input onBlur={handleInputData} type="text" name="photoURL" id="photoURL" placeholder="photoURL" className="w-full px-4 py-3 rounded-md border-gray-200 outline-none border focus:border-main" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-600 font-semibold">Email</label>
                        <input onBlur={handleInputData} type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-200 outline-none border focus:border-main" />
                        {
                            formDataError.emailError?
                             <div className='flex items-center font-semibold text-red-500'>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-4 h-6 mr-2">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                             </svg>
                             {formDataError.emailError}
                             </div> : undefined
                           } 
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-600 font-semibold">Password</label>
                        <input  onBlur={handleInputData} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-200 outline-none border focus:border-main" />
                           {
                            formDataError.passwordError?
                             <div className='flex items-center font-semibold text-red-500'>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="w-4 h-6 mr-2">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                             </svg>
                             {formDataError.passwordError}
                             </div> : undefined
                           }
                        <div className="flex justify-end text-xs text-gray-600 font-semibold mt-2">
                            <Link rel="noopener noreferrer" to="#">Forgot Password?</Link>
                        </div>
                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-lg bg-main text-white">Sign in</button>
                </form>
                <SocialLogin></SocialLogin>
                <p className="text-xs text-center sm:px-6 text-gray-500">Already have an account?
                    <Link rel="noopener noreferrer" to="/genius-car/login" className="underline text-main font-semibold">Login</Link>
                </p>
            </div>
        </div>
      </div>
    );
};

export default Register;