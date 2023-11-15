import React, {useState} from 'react';
import axios from 'axios';
import { CircularProgress, styled } from '@mui/material';
import './User.css';

export default function User() {
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
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
                    <div className='order' key={item._id}>
                        <h3 className='order_id'>{item.order_id}</h3>
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