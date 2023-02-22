import React from 'react';
import './Navbar.css';

const search = () => {
    alert('Search');
}

const profile = () => {
    alert('Profile');
}

const cart = () => {
    alert('Cart');
}

export default function Navbar(props) {
    return (
        <div id='Navbar' className='navbar'>
        <h1 id='Title' className='title'>Krishna Kumari Nursery</h1>
        <div className='nav-items'>
            <input className='search' type='name' name='search-text' placeholder='Search' />
            <button className='btn btn-search' onClick={() => search()}><i className="fa-solid fa-magnifying-glass nav-icons"></i></button>
            <button className='btn btn-profile' onClick={() => profile()}><i className="fa-solid fa-user nav-icons"></i></button>
            <button className='btn btn-cart' onClick={() => cart()}><i className="fa-solid fa-basket-shopping nav-icons"></i><span className='cart-count'>0</span></button>
        </div>
        </div>
    )
}