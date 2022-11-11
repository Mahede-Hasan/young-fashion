import React from 'react';
import Nav1 from './Nav1/Nav1';
import Search from './Nav1/Search';
import Nav2 from './Nav2/Nav2';

const Header = ({setSearch}) => {
    return (
        <div>
            <Nav1 setSearch={setSearch}></Nav1>
            <Nav2></Nav2>
        </div>
    );
};

export default Header;