import React from 'react';
import logo from '../../images/Logo.svg'
import header from './Header.css'

const Header = () => {
    return (
        <div className='header mb-10'>
            <img src={logo}></img>
            <div className=''>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;