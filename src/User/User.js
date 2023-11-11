import React, {useState} from 'react';
import './User.css';

export default function User() {
    const [user, setUser] = useState({
        phone: null
    });

    const getOrderHistory = () => {
        alert(user.phone)
    }

    return (
        <>
            <div className='user-main'>
                <div className='user-body'>
                <h1 className='user-title'>User Details</h1>
                <div className='user-phone-div'>
                <div className='user-phone-box'>
                    <input className='user-phone' type='tel' name='phone' value={user.phone} onChange={(e) => setUser(preval => ({...preval, [e.target.name]:e.target.value}))} placeholder='Phone'/>
                </div>
                <button className='get-orders-history' onClick={() => getOrderHistory()}>Get Orders History</button>
                </div>
                </div>
            </div>
        </>
    )
}