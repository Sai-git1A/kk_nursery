import React, { useState } from 'react';
import Navbar from '../Components/Nav/Navbar';
import Footer from '../Components/Footer/Footer';
import SWODetails from '../Components/SWO_Details/SWO_Details';
import './SWO.css';

export default function SWO() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const [swo, setSwo] = useState(false);
    const [swoTitle, setSwoTitle] = useState();
    const [swoImg, setSwoImg] = useState();

    function handelSWO(title, img) {
        setSwoTitle(title);
        setSwoImg(img)
        setSwo(!swo);
    }

    return (
        <>
           <Navbar data={cart}/>
           <div className='swo-list'>
        <div className='swo-item landscaping' onClick={() => handelSWO("Landscaping", "https://res.cloudinary.com/kknurseries/image/upload/v1696083759/Services%20We%20Offer/Landscape.jpg")}>
        <div className='swo-blank-item'>
        <h1 className='swo-item-title'>Landscaping</h1>
        </div>
        </div>
        <div className='swo-item gardening' onClick={() => handelSWO("Gardening", "https://res.cloudinary.com/kknurseries/image/upload/v1696083756/Services%20We%20Offer/Gardening.jpg")}>
        <div className='swo-blank-item'>
        <h1 className='swo-item-title'>Gardening</h1>
        </div>
        </div>
        <div className='swo-item planting' onClick={() => handelSWO("Planting", "https://res.cloudinary.com/kknurseries/image/upload/v1696083757/Services%20We%20Offer/Planting.jpg")}>
        <div className='swo-blank-item'>
        <h1 className='swo-item-title'>Planting</h1>
        </div>
        </div>
        <div className='swo-item contract-farming' onClick={() => handelSWO("Contract Farming", "https://res.cloudinary.com/kknurseries/image/upload/v1696083755/Services%20We%20Offer/Contract_Farming.jpg")}>
        <div className='swo-blank-item'>
        <h1 className='swo-item-title'>Contract Farming</h1>
        </div>
        </div>
        <div className='swo-item horticulture' onClick={() => handelSWO("Horticulture", "https://res.cloudinary.com/kknurseries/image/upload/v1696083758/Services%20We%20Offer/Horticulture.jpg")}>
        <div className='swo-blank-item'>
        <h1 className='swo-item-title'>Horticulture</h1>
        </div>
        </div>
        </div>

        {/* SWO Details */}
        {swo && <SWODetails onClick={() => handelSWO()} title={swoTitle} imgURL={swoImg}/>}

        <Footer/>
        </>
    )
}