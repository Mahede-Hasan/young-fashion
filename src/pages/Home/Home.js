import React from 'react';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import CustomerService from './CustomerService/CustomerService';
import HomeProduct from './HomeProduct/HomeProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CustomerService></CustomerService>
            <Categories></Categories>
            <Advertise></Advertise>
            <HomeProduct></HomeProduct>
        </div>
    );
};

export default Home;