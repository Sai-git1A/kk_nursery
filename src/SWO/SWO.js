import React from 'react';
import Navbar from '../Components/Nav/Navbar';
import Footer from '../Components/Footer/Footer';
import './SWO.css';

export default function SWO() {
    const cart = [];
    return (
        <>
           <Navbar data={cart}/>
        <div className='swo-list'>
        <div className='swo-item landscaping' onClick={() => alert('Landscaping')}>
        <div className='swo-blank-item'>
        <h1 className='swo-item-title'>Landscaping</h1>
        </div>
        </div>
        <div className='swo-item gardening' onClick={() => alert('Gardening')}>
        <div className='swo-blank-item'>
        <h1 className='swo-item-title'>Gardening</h1>
        </div>
        </div>
        <div className='swo-item planting' onClick={() => alert('Planting')}>
        <div className='swo-blank-item'>
        <h1 className='swo-item-title'>Planting</h1>
        </div>
        </div>
        <div className='swo-item contract-farming' onClick={() => alert('Contract Farming')}>
        <div className='swo-blank-item'>
        <h1 className='swo-item-title'>Contract Farming</h1>
        </div>
        </div>
        <div className='swo-item horticulture' onClick={() => alert('Horticulture')}>
        <div className='swo-blank-item'>
        <h1 className='swo-item-title'>Horticulture</h1>
        </div>
        </div>
        </div>
           <Footer/>
        </>
    )
}