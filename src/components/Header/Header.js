import React from 'react';
import './Header.css'
import favicoin from '../../images/favicon.ico'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" srcset="" />
            <div className='anchor'>
                <a href="order">Order</a>
                <a href="orderReview">Order Review</a>
                <a href="manageInventory">Manage Inventory</a>
                <a href="login">Login</a>
            </div>

        </div>
    );
};

export default Header;