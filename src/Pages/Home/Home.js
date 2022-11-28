import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Banner from './Banner';
import Infodetails from './Infodetails';
import Products from './Products/Products';
import Team from './Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Infodetails></Infodetails>
            <Products></Products>
            <Team></Team>
        </div>
    );
};

export default Home;