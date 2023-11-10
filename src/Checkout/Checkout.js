import React, {useState} from "react";
import { Link } from "react-router-dom";
import { CircularProgress, styled } from '@mui/material';
import Navbar from "../Components/Nav/Navbar";
import Footer from "../Components/Footer/Footer";
import './Checkout.css';

export default function Checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((a, b) => a + b.price * b.count, 0) + 80
    const date = new Date();
    const orderID = 'KK' + date.getDate() + Number(date.getMonth() + 1) + date.getFullYear() + date.getHours() + date.getMinutes() + date.getSeconds();
    const [check, setCheck] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        price: 0,
        orderId: orderID
    });
    const [payData, setPayData] = useState();

    const StyledCircularProgress = styled(CircularProgress) ({
        color: '#4E944F'
    });

    // function handelOrder() {
    //     if (check) {
    //         setLoading(!loading);
    //         fetch('https://kknurseries-phonepe.vercel.app/place-order', {
    //             method: 'POST',
    //             mode: 'cors',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json',
    //             },
    //             body: JSON.stringify(user)
    //         })
    //         .then(res => res.json())
    //         .then(data => setPayData(data))
    //     } else {
    //         alert('Please check the terms and conditions')
    //     }
    // }

    const handelOrder = async () => {
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
                <span className='quantity'>{item.count}</span>
                </div>
            </div>
            </div>
            </div>)}
            </div>}
            <div className="checkout-total">
                <p>Total: ₹{cart.reduce((a, b) => a + b.price * b.count, 0)}</p>
                <p>Delivery Charge: ₹80</p>
                <p>Total Payable: ₹{total}</p>
            </div>
        </div>
        <div className="checkout-user-details">
            <h1 className="checkout-title">User Details</h1>
            <div className="user-box"><input className="user-details" type="text" value={user.name} name="name" onChange={(e) => setUser(preval => ({...preval, [e.target.name]: e.target.value, price: total * 100}))} placeholder="Name" /></div>
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
                <Link className="pay-now" to={payData.result.data.instrumentResponse.redirectInfo.url}>Pay Now</Link>
            </>}
        </div>
        </div>}
        <Footer />
        </>
    )
}