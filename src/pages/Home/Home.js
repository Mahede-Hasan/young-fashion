import React from 'react';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import CustomerService from './CustomerService/CustomerService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CustomerService></CustomerService>
            <Categories></Categories>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;