import React, {useState} from "react";
import { Link } from "react-router-dom";
import { CircularProgress, styled } from '@mui/material';
import Navbar from "../Components/Nav/Navbar";
import Footer from "../Components/Footer/Footer";
import './Checkout.css';

export default function Checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((a, b) => a + b.price * b.count, 0);
    const date = new Date();
    const orderID = 'KK-' + date.getDate() + Number(date.getMonth() + 1) + date.getFullYear() + '-' + ((date.getHours() + 24) % 12 || 12 )+ date.getMinutes() + date.getSeconds();
    const [check, setCheck] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        price: 0,
        orderId: orderID,
        date: date.getDate() + '-' + Number(date.getMonth() + 1) + '-' + date.getFullYear(),
        cartData: cart
    });
    const [payData, setPayData] = useState();

    const StyledCircularProgress = styled(CircularProgress) ({
        color: '#4E944F'
    });

    const handelOrder = async () => {
        if (user.name !== '' || user.email !== '' || user.phone !== '' || user.address !== '') {
            if (/@gmail\.com$/.test(user.email)) {
                if (user.phone.length !== 10) {
                    alert('We found the phone number you entered is invalid.');
                } else {
                    if (check) {
                        setLoading(true);
                    try {
                      const response = await fetch('https://kknurseries-phonepe.vercel.app/place-order', {
                                    method: 'POST',
                                    mode: 'cors',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Accept': 'application/json',
                                    },
                                    body: JSON.stringify(user)
                                });
                      setPayData(await response.json());
                    } catch (error) {
                      alert(error);
                    }
                    setLoading(false);
                    } else {
                        alert('Please check the terms and conditions');
                    }
                }
            } else {
                alert('We found the email you entered is invalid.');
            }
            } else {
            alert('We required your details to place order, please enter your details.');
        }
    };


    return (
        <>
        <Navbar data={cart} />
        <div className="checkout-main">
        <div className="checkout-order-details">
            <h1 className="checkout-title">Order Details</h1>
            <p>Order ID: {orderID}</p>
            {cart && <div className="checkout-cart">
            {cart.length > 0 && cart.map(item => <div className='cart-item' key={item.key}>
            <img className='cart-item-img' src={item.imgURL} loading='lazy' alt='cart-img'/>
            <div className='cart-item-content'>
            <div className='cart-item-box-1'>
                <span className='cart-item-title'>{item.title}</span>
            </div>
            <div className='cart-item-box-2'>
                <span className='cart-item-price'>₹{item.price}</span>
                <div className='quantity-box'>
                <span className='quantity'>Q{item.count}</span>
                </div>
            </div>
            </div>
            </div>)}
            </div>}
            <div className="checkout-total">
                <p>Total: ₹{total}</p>
                <p>Delivery Charge: ₹80</p>
                <p>Total Payable: ₹{total + 80}</p>
            </div>
        </div>
        <div className="checkout-user-details">
            <h1 className="checkout-title">User Details</h1>
            <div className="user-box"><input className="user-details" type="text" value={user.name} name="name" onChange={(e) => setUser(preval => ({...preval, [e.target.name]: e.target.value, price: (total + 80) * 100}))} placeholder="Name" /></div>
            <div className="user-box"><input className="user-details" type="email" value={user.email} name="email" onChange={(e) => setUser(preval => ({...preval, [e.target.name]: e.target.value}))} placeholder="Email" /></div>
            <div className="user-box"><input className="user-details" type="tel" value={user.phone} name="phone" onChange={(e) => setUser(preval => ({...preval, [e.target.name]: e.target.value}))} placeholder="Phone" /></div>
            <div className="user-box"><textarea className="user-details" type="text" value={user.address} name="address" onChange={(e) => setUser(preval => ({...preval, [e.target.name]: e.target.value}))} placeholder="Address" rows="10" cols="50" /></div>
            <div className="policy-check-div"><input className="policy-check" checked={check} onChange={() => setCheck(!check)} type="checkbox" name="policy" /> By ticking this you agreed to our<Link className="privacy-policy" to='/privacy-policy'>Privacy Policy</Link> and<Link className="terms-conditions" to='terms-conditions'>Terms and Conditions</Link></div>
            <button className="btn-place-order" onClick={() => handelOrder()}>Place Order</button>
        </div>
        </div>
        {(loading || payData) && <div className="pay-div-main">
        <div className="pay-div">
            {loading && <StyledCircularProgress />}
            {payData && <>
                <h3 className="pay-now-title">{payData.result.message}</h3>
                <p>Order ID: {orderID}</p>
                <div className="pay-user-details-div">
                    <h4 className="pay-now-title">Conform your details</h4>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>+91 {user.phone}</p>
                    <p>{user.address}</p>
                    <p>Total: ₹{total + 80}</p>
                </div>
                <div className="pay-now-cancel-div">
                <Link className="cancel-now" onClick={() => window.location.reload()}>Cancel</Link>
                <Link className="pay-now" to={payData.result.data.instrumentResponse.redirectInfo.url}>Pay Now</Link>
                </div>
            </>}
        </div>
        </div>}
        <Footer />
        </>
    )
}