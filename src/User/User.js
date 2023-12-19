import React, {useState} from 'react';
import axios from 'axios';
import { CircularProgress, styled } from '@mui/material';
import './User.css';

export default function User() {
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [orderList, setOrderList] = useState([]);

    const StyledCircularProgress = styled(CircularProgress) ({
        color: '#4E944F'
    });

    const getOrderHistory = async () => {
        setLoading(true);
        const resPIndoorPlants = await axios.get(`https://kknurseries-api.vercel.app/orders/${phone}`)
        setOrderList(resPIndoorPlants.data);
        setLoading(false);
    }

    return (
        <>
            <div className='user-main'>
                <div className='user-body'>
                <h1 className='user-title'>Order Details</h1>
                {(orderList && orderList.length > 0 && orderList.map(item => (
                    item.pay_type === 'Null' ? '' :
                    <div className='order' key={item.order_id}>
                    <div className='order-head' onClick={() => setToggle(!toggle)}>
                        <h3 className='order_id'>{item.order_id}</h3>
                        <span>{item.date}</span>
                        {toggle ? <i className="fa-solid fa-caret-down"></i> :
                        <i className="fa-solid fa-caret-right"></i>}
                    </div>
                    {toggle && <div className='order-body'>
                        <div className='plants-details-div details-div'>
                        <h4>Plants Details</h4>
                        {item.cartData.map(item => (
                        <div className='basket-item' key={item.key}>
                            <img className='cart-item-img' src={item.imgURL} loading='lazy' alt='cart-img'/>
                            <div className='cart-item-content'>
                            <div className='cart-item-box-1'>
                                <h5 className='basket-item-title'>{item.title}</h5>
                            </div>
                            <div className='cart-item-box-2'>
                                <span className='basket-item-price'>₹{item.price}</span>
                                <div className='quantity-box'>
                                <span className='basket-quantity'>Q{item.count}</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        ))}
                        </div>
                        <div className='details-div'>
                        <div className='user-details-div'>
                        <h4>User Details</h4>
                        <div className='user-details'>
                            <span className='user-name'>Name: {item.name}</span>
                            <span className='user-tel'>Phone: {item.phone}</span>
                            <span className='user-email'>Email: {item.email}</span>
                            <span className='user-address'>Address: {item.address}</span>
                        </div>
                        </div>
                        <div className='payments-details-div'>
                        <h4>Payment Details</h4>
                        <div className='payment-details'>
                            <span className='type'>Method: {item.pay_type}</span>
                            <span className='status'>Status: {item.pay_status}</span>
                        </div>
                        </div>
                        </div>
                    </div>}
                    </div>
                ))) || 
                <div className='user-note'>
                <i className="fa-solid fa-clipboard-list order-list"></i>
                <h3 className='order-list-text'>To access your order history, we require your phone number.</h3>
                </div>}
                {loading && <div className='circular-progress'>
                    <StyledCircularProgress />
                </div>}
                <div className='user-phone-div'>
                <div className='user-phone-box'>
                    <input className='user-phone' type='tel' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone'/>
                    <button className='get-orders-history' onClick={() => getOrderHistory()}><i className="fa-solid fa-magnifying-glass find"></i></button>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}