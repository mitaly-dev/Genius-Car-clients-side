import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
    const {user,userLogOUt} = useContext(AuthContext)

    const logOutHandle=()=>{
        userLogOUt()
        .then(()=>toast.warning(`Log Out ${user.displayName}`,{autoClose:1500}))
    }
    
    const menu = <>
    <li className='font-semibold'><Link to="/home">Home</Link></li>
    <li className='font-semibold'><Link to="/about">About</Link></li>
    <li className='font-semibold'><Link to="/services">Services</Link></li>
    <li className='font-semibold'><Link to="/blog">Blog</Link></li>
    <li className='font-semibold'><Link to="/contact">Contact</Link></li>
    <li className='font-semibold'><Link to="/orders">Orders</Link></li> 
    {
        user?.uid ? 
        <>
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="user"/>
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li className='capitalize font-semibold my-2 px-4'>{user?.displayName}</li>
                <li>
                <Link className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </Link>
                </li>
                <li><Link>Settings</Link></li>
                <li onClick={logOutHandle}><Link>Logout</Link></li>
            </ul>
        </div>
        </>
         : 
        <li className='font-semibold'><Link to="/genius-car/login">login</Link></li> 
    }
    </>
    return (
        <div className="navbar h-[100px] flex items-center">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {menu}
                </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="logo" className='w-3/4' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/" className="btn btn-outline text-main">Appointment</Link>
            </div>
        </div>
    );
};

export default Header;