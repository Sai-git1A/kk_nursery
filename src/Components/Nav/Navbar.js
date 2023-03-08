import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const profile = () => {
    alert('Profile');
}

const cart = () => {
    alert('Cart');
}

export default function Navbar(props) {
    return (
        <>
        <div id='Navbar' className='navbar'>
        <div className='title-box'>
        <Link className='nav-title' to="/"><h1 id='Title' className='title'>KK Nurseries</h1></Link>
        </div>
        <div className='nav-items'>
        <div className='search-box'>
        <input className='search' type='text' name='search-text' placeholder='Search for all kinds of plants' />
        <button className='btn btn-search' type='submit'><i className="fa-solid fa-magnifying-glass nav-icons"></i></button>
        </div>
            <button className='btn btn-profile' onClick={() => profile()}><i className="fa-solid fa-user nav-icons"></i></button>
            <button className='btn btn-cart' onClick={() => cart()}><i className="fa-solid fa-basket-shopping nav-icons"></i><span className='cart-count'>0</span></button>
        </div>
        </div>
        <div className='hidden'></div>
        </>
    )
}