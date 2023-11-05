import React, { useState, useEffect }from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Dialog from '../Dialog/Dialog';
import './Navbar.css';

const profile = () => {
    alert('Profile');
}

export default function Navbar(props) {
    const navigate = useNavigate();
    const [cart, setCart] = useState(false);
    const [count, setCount] = useState(0);
    const [cartData, setCartData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [contactUs, setContactUs] = useState(false);

    function menu() {
        setIsOpen(!isOpen);
    }

    function cartClick() {
        setCart(true);
    }

    function cartClose() {
        setCart(false);
    }

    function handelContactUs() {
        setContactUs(!contactUs);
    }

    const handelDelete = (title) => {
        const filterCart = cartData.filter(item => item.title !== title);
        setCartData(filterCart);
        setCount(filterCart.length);
        localStorage.setItem('cart', JSON.stringify(filterCart));
    }

    const handelAdd = (key) => {
        const updatedCart = cartData.map(item => {
            if (item.key === key) {
                return {...item, count: item.count+1}
            }
            return item;
        })
        setCartData(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    const handelMinus = (key) => {
        const updatedCart = cartData.map(item => {
            if (item.key === key) {
                return {...item, count: item.count-1}
            }
            return item;
        })
        setCartData(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(props.data));
        const cartData = localStorage.getItem('cart');
        setCartData(JSON.parse(cartData));
        setCount(JSON.parse(cartData).length);
    }, [props]);

    return (
        <>
        <div id='Navbar' className='navbar'>
        <div className='title-box'>
        <button className='menu' onClick={() => menu()}><i className="fa-solid fa-bars nav-icons"></i></button>
        <h1 id='Title' className='title' onClick={() => navigate('/')}>KK Nurseries</h1>
        </div>
        <div className='nav-items'>

        {/* Search */}
        <div className='search-box'>
        <input className='search' type='text' name='search-text' placeholder='Search' />
        <button className='btn btn-search' type='submit'><i className="fa-solid fa-magnifying-glass nav-icons"></i></button>
        </div>
            <button className='btn btn-profile' onClick={() => profile()}><i className="fa-solid fa-user nav-icons"></i></button>
            <button className='btn btn-cart' onClick={() => cartClick()}><i className="fa-solid fa-basket-shopping nav-icons"></i><span className='cart-count'>{count}</span></button>
        </div>
        </div>
        <div className='hidden'></div>

        {/* Nav Links */}
        <div className={isOpen ? 'nav-links nav-links-menu' : 'nav-links nav-links-open'}>
            {isOpen && <button className='btn-menu-close' onClick={() => setIsOpen(!isOpen)}><i className="fa-solid fa-xmark"></i></button>}
            <div className='nav-links-div'>
            <Link className='nav-link home' to='/'><span>Home</span></Link>
            </div>
            <div className='nav-links-div'>
            <div className='nav-link profile-div'>
            <span className='nav-link profile'>Profile</span>
            <div className='profile-items'>
                <Link className='nav-link about-us' to='/about'><span>About Us</span></Link>
                <Link className='nav-link services-we-offer' to='/services-we-offer'><span>Services We Offer</span></Link>
            </div>
            </div>
            </div>
            <div className='nav-links-div'>
            <Link className='nav-link categories' to='/'><span>Categories</span></Link>
            </div>
            <div className='nav-links-div'>
            <Link className='nav-link testimonials' to='/testimonials'><span>Testimonials</span></Link>
            </div>
            <div className='nav-links-div'>
            <Link className='nav-link contact-us' to='/contact-us'><span>Contact Us</span></Link>
            </div>
        </div>

        {/* Dialog */}
        {contactUs && <Dialog onClick={handelContactUs}/>}

        {/* Cart */}
        {cart && <div className='cart'>
            <div className='cart-header'>
                <span className='cart-title'>Your Cart</span>
                <button className='btn-cart-close' onClick={() => cartClose()}><i className="fa-solid fa-xmark cart-icon"></i></button>
            </div>
            <div className='cart-items'>
            {cartData.length > 0 && cartData.map(item => <div className='cart-item' key={item.key}>
            <img className='cart-item-img' src={item.imgURL} loading='lazy' alt='cart-img'/>
            <div className='cart-item-content'>
            <div className='cart-item-box-1'>
                <span className='cart-item-title'>{item.title}</span>
                <button className='cart-btn remove' onClick={() => handelDelete(item.title)}><i className="fa-solid fa-trash cart-icon"></i></button>
            </div>
            <div className='cart-item-box-2'>
                <span className='cart-item-price'>₹{item.price}</span>
                <div className='quantity-box'>
                <button className='cart-btn minus' onClick={() => handelMinus(item.key)}><i className="fa-solid fa-minus cart-icon"></i></button>
                <span className='quantity'>{item.count}</span>
                <button className='cart-btn add' onClick={() => handelAdd(item.key)}><i className="fa-solid fa-plus cart-icon"></i></button>
                </div>
            </div>
            </div>
            </div>)}
            </div>
            <div className='cart-footer'>
                <button className='cart-btn checkout' onClick={() => navigate('/checkout')}>CHECKOUT</button>
            </div>
        </div>}
        </>
    )
}