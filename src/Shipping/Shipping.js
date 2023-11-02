import React from 'react';
import Navbar from '../Components/Nav/Navbar';
import Footer from '../Components/Footer/Footer';
import './Shipping.css';

export default function Shipping() {
    const cart = {}
    return (
        <>
        <Navbar data={cart}/>
        <div className='shipping-main'>
        <div className='shipping-title-div'>
            <h1 className='shipping-title'>Shipping and Delivery</h1>
        </div>
        <div className='shipping-info-div'>
            <h3 className='shipping-subtitle'>Shipping Method</h3>
            <span className='shipping-text'>We use Blue Dart Courier service for the delivery of our products.</span>
        </div>
        <div className='shipping-info-div'>
            <h3 className='shipping-subtitle'>Delivery Time</h3>
            <span className='shipping-text'>Once your order is placed, you can expect delivery within the following time frames:</span>
            <ul>
                <li>Within 5 to 7 days for standard delivery.</li>
            </ul>
        </div>
        <div className='shipping-info-div'>
            <h3 className='shipping-subtitle'>Shipping Fees</h3>
            <ul>
                <li>For standard shipping, there is a flat fee of ₹80.</li>
                <li>Enjoy free shipping on all orders above ₹2,499.</li>
            </ul>
        </div>
        <div className='shipping-info-div'>
            <h3 className='shipping-subtitle'>International Shipping</h3>
            <span className='shipping-text'>Please note that we do not offer international shipping services at this time. Our services are available for customers within India only.</span>
        </div>
        <div className='shipping-info-div'>
            <h3 className='shipping-subtitle'>Damaged Products</h3>
            <span className='shipping-text'>While we take great care in packaging and delivering your products, we understand that accidents can happen. If you receive a damaged product, please contact us within 7 days of receiving it. We will offer you the choice of a replacement or a refund to ensure your satisfaction.</span>
        </div>
        <p className='shipping-note'>Thank you for choosing KK Nurseries!</p>
        </div>
        <Footer />
        </>
    )
}