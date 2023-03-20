import React, { useState, useEffect }from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const profile = () => {
    alert('Profile');
}

export default function Navbar(props) {
    const [cart, setCart] = useState(false);
    const [count, setCount] = useState(0);
    const [cartData, setCartData] = useState([]);

    function cartClick() {
        setCart(true);
    }

    function cartClose() {
        setCart(false);
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(props.data));
        setCartData(JSON.parse(localStorage.getItem('cart')) || props.data);
        setCount(JSON.parse(localStorage.getItem('cart')).length || props.data.length);
    }, [props]);

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
            <button className='btn btn-cart' onClick={() => cartClick()}><i className="fa-solid fa-basket-shopping nav-icons"></i><span className='cart-count'>{count}</span></button>
        </div>
        </div>
        <div className='hidden'></div>
        {cart && <div className='cart'>
            <div className='cart-header'>
                <span className='cart-title'>Your Cart</span>
                <button className='btn-cart-close' onClick={() => cartClose()}><i className="fa-solid fa-xmark cart-icon"></i></button>
            </div>
            {cartData.length > 0 && cartData.map(item => <div className='cart-item' key={item.key}>
            <img className='cart-item-img' src={item.imgURL} alt='cart-img'/>
            <span className='cart-item-title'>{item.title}</span>
            <span className='cart-item-price'>₹{item.price}</span>
            </div>)}
        </div>}
        </>
    )
}