import React from 'react';
import Navbar from '../Components/Nav/Navbar';
import './SWO.css';

export default function SWO() {
    const cart = [];
    return (
        <>
           <Navbar data={cart}/>
           <div className='swo-list'>
            <div className='swo-item'>
                <img className='swo-item-img' src='https://res.cloudinary.com/safedb/image/upload/v1691481994/KK%20Nursery/Services%20We%20Offer/Landscape-Designing_lid6i6.jpg' alt='Landscape-Designing' loading='eager'/>
                <h1 className='swo-item-title'>Landscape Designing</h1>
            </div>
            <div className='swo-item'>
                <img className='swo-item-img' src='https://res.cloudinary.com/safedb/image/upload/v1691481993/KK%20Nursery/Services%20We%20Offer/Gardening-Services_fuvpwj.jpg' alt='Landscape-Designing' loading='eager'/>
                <h1 className='swo-item-title'>Gardening Services</h1>
            </div>
            <div className='swo-item'>
                <img className='swo-item-img' src='https://res.cloudinary.com/safedb/image/upload/v1691481993/KK%20Nursery/Services%20We%20Offer/Planting-Services_lrpco5.jpg' alt='Landscape-Designing' loading='eager'/>
                <h1 className='swo-item-title'> Planting Services</h1>
            </div>
            <div className='swo-item'>
                <img className='swo-item-img' src='https://res.cloudinary.com/safedb/image/upload/v1691481993/KK%20Nursery/Services%20We%20Offer/Contract-Farming_tzbomr.jpg' alt='Landscape-Designing' loading='eager'/>
                <h1 className='swo-item-title'>Contract Farming</h1>
            </div>
            <div className='swo-item'>
                <img className='swo-item-img' src='https://res.cloudinary.com/safedb/image/upload/v1691481993/KK%20Nursery/Services%20We%20Offer/Horticulture_ry7vup.jpg' alt='Landscape-Designing' loading='eager'/>
                <h1 className='swo-item-title'>Horticulture Services</h1>
            </div>
           </div>
        </>
    )
}