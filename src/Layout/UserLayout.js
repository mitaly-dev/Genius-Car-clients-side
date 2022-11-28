import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header';

const UserLayout = () => {
    return (
        <div className='px-28'>
        <Header></Header>
        <Outlet></Outlet>
        </div>
    );
};

export default UserLayout;