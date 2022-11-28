import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/firebase.config';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)
    const [orders,setOrders] = useState([])
    const [refresh,setRefresh] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userSignIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const emailVarification =(email)=>{
        setLoading(true)
        sendEmailVerification(auth.currentUser)
        .then(()=>toast.success('Please verify your email',{autoClose:1000}))
        .catch(error=>toast.error(error.message,{autoClose:1500}))
    }

    const updateUserProfile=(profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,profile)
    }

    const userLogOUt= () =>{
        localStorage.removeItem('genius-token')
       return signOut(auth)
    }

    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const singInWithGithub=()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }


    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])


    const value = {
        user,
        setUser,
        createUser,
        userSignIn,
        emailVarification,
        updateUserProfile,
        userLogOUt,
        loading,
        orders,
        setOrders,
        refresh,
        setRefresh,
        signInWithGoogle,
        singInWithGithub
    }
    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;