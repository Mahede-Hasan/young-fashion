import React from 'react';
import { NavLink } from "react-router-dom";

const Nav2 = () => {
    return (
        <div className='menu-container flex justify-between px-10 bg-slate-200 py-4 shadow-md'>
            <div className="categories font-semibold flex">
                <h1 className='pr-12'><NavLink>ALL CATEGORIES</NavLink></h1>
                <h1><NavLink>HOT DEALS</NavLink></h1>
            </div>
            <div className="menus">
                <ul className='flex font-semibold'>
                    <li><NavLink to='/home' className='menu pl-12'>HOME</NavLink></li>
                    <li><NavLink to='/shops' className='menu pl-12'>SHOP</NavLink></li>
                    <li><NavLink className='menu pl-12'>MEN</NavLink></li>
                    <li><NavLink className='menu pl-12'>WOMEN</NavLink></li>
                    <li><NavLink className='menu pl-12'>BLOG</NavLink></li>
                    <li><NavLink className='menu pl-12'>CONTACT</NavLink></li>
                    <li><NavLink className='menu pl-12 pr-2'>LOGIN</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Nav2;