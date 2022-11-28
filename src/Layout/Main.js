import React from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';

const Main = () => {
    return (
        <>
        <div className='px-28'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Main;