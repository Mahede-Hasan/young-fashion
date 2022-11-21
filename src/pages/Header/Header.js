import React from 'react';
import Nav1 from './Nav1/Nav1';
import NavBottom from './Nav1/NavBottom';
import Nav2 from './Nav2/Nav2';

const Header = ({setSearch}) => {
    return (
        <div className='sticky z-10 top-0 w-full '>
            <Nav1 setSearch={setSearch}></Nav1>
            <Nav2></Nav2>
            <NavBottom></NavBottom>
        </div>
    );
};

export default Header;