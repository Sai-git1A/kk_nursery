import React from 'react';
import Footer from '../Components/Footer/Footer';
import './Terms.css'

export default function Terms() {
    return (
        <>
        <div className='terms-main'>
        <div className='terms-title-div'>
            <h1 className='terms-title'>Terms and Conditions</h1>
            <span className='terms-date'>Last updated: 13/10/2023</span>
        </div>
        <div className='terms-info-div'>
            <h3 className='terms-subtitle'>1. Introduction</h3>
            <span className='terms-text'>These Terms and Conditions govern your use of the KK Nurseries website. By accessing and using our website, you agree to comply with these terms. Please read this document carefully.</span>
        </div>
        <div className='terms-info-div'>
            <h3 className='terms-subtitle'>2. Purpose of the Website</h3>
            <span className='terms-text'>KK Nurseries aims to provide a wide range of plants and services at affordable prices.</span>
        </div>
        <div className='terms-info-div'>
            <h3 className='terms-subtitle'>3. Copyright and Content</h3>
            <span className='terms-text'>Users are prohibited from copying or downloading website data and images for personal use. All content on our website, including text, images, and other materials, is protected by copyright and may not be used without our explicit permission. We only use our own content and copyright-free assets.</span>
        </div>
        <div className='terms-info-div'>
            <h3 className='terms-subtitle'>4. User Data</h3>
            <span className='terms-text'>We only store user data until the order is fulfilled, after which it is deleted to protect your privacy. Please refer to our Privacy Policy for more details.</span>
        </div>
        <div className='terms-info-div'>
            <h3 className='terms-subtitle'>5. User-Generated Content</h3>
            <span className='terms-text'>We encourage users to share their feedback on social media and other platforms. By doing so, you grant KK Nurseries permission to use and display your content on our website and associated marketing materials.</span>
        </div>
        <div className='terms-info-div'>
            <h3 className='terms-subtitle'>6. Refund and Replacement Policy</h3>
            <span className='terms-text'>We do not offer cancellations. If you receive a damaged product, please contact us within 7 days and provide an unboxing video. We will issue a replacement or refund based on your choice.</span>
        </div>
        <p className='terms-note'>By using our website, you agree to the terms and conditions outlined in this document. Any changes or updates to these terms will be posted on this page. Thank you for choosing KK Nurseries.</p>
        </div>
        <Footer />
        </>
    )
}