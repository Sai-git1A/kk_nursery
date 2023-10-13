import React from 'react';
import Navbar from '../Components/Nav/Navbar';
import Footer from '../Components/Footer/Footer';
import './Cancellation.css';

export default function cancellation() {
    const cart = {}
    return (
        <>
        <Navbar data={cart}/>
        <div className='cancellation-main'>
        <div className='cancellation-title-div'>
            <h1 className='cancellation-title'>Cancellation and Refund</h1>
        </div>
        <div className='cancellation-info-div'>
            <h3 className='cancellation-subtitle'>Cancellation Policy</h3>
            <ul>
                <li>Customers have the option to cancel their order at any time before the product is shipped.</li>
                <li>Once the product has been shipped, cancellations will not be possible.</li>
            </ul>
        </div>
        <div className='cancellation-info-div'>
            <h3 className='cancellation-subtitle'>Refund Policy</h3>
            <span className='cancellation-text'>We strive to provide high-quality products, but in the rare event that you receive a damaged product, we offer the following solutions:</span>
            <ol>
                <li>Replacement: If you receive a damaged product, please contact us within 7 days of delivery. We will provide a replacement for the damaged item.</li>
                <li>Refund: Alternatively, if you prefer a refund, please provide us with an unboxing video of the damaged product within 7 days of delivery. This video helps us understand the issue and ensures a seamless refund process.</li>
            </ol>
        </div>
        <div className='cancellation-info-div'>
            <h3 className='cancellation-subtitle'>Refund Processing</h3>
            <span className='cancellation-text'>Refunds will be processed instantly and will be reflected in your account shortly after the return is approved.</span>
        </div>
        <div className='cancellation-info-div'>
            <h3 className='cancellation-subtitle'>International cancellation</h3>
            <span className='cancellation-text'>Please note that we do not offer international cancellation services at this time. Our services are available for customers within India only.</span>
        </div>
        <div className='cancellation-info-div'>
            <h3 className='cancellation-subtitle'>Damaged Products</h3>
            <span className='cancellation-text'>While we take great care in packaging and delivering your products, we understand that accidents can happen. If you receive a damaged product, please contact us within 7 days of receiving it. We will offer you the choice of a replacement or a refund to ensure your satisfaction.</span>
        </div>
        <p className='cancellation-note'>Thank you for choosing KK Nurseries!</p>
        </div>
        <Footer />
        </>
    )
}