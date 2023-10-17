import React from 'react';
import Navbar from '../Components/Nav/Navbar';
import Footer from '../Components/Footer/Footer';
import './Privacy.css';

export default function Privacy() {
    const cart = {}
    return (
        <>
        <Navbar data={cart}/>
        <div className='privacy-main'>
        <div className='privacy-title-div'>
            <h1 className='privacy-title'>Privacy Policy</h1>
            <span className='privacy-date'>Last updated: 13/10/2023</span>
        </div>
        <div className='privacy-info-div'>
            <h3 className='privacy-subtitle'>Introduction</h3>
            <span className='privacy-text'>KK Nurseries values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services or website.</span>
        </div>
        <div className='privacy-info-div'>
            <h3 className='privacy-subtitle'>Information We Collect</h3>
            <span className='privacy-text'>We collect the following personal information from users:</span>
            <ul>
                <li>Name</li>
                <li>Email</li>
                <li>Address</li>
                <li>Mobile Number</li>
            </ul>
        </div>
        <div className='privacy-info-div'>
            <h3 className='privacy-subtitle'>How We Collect Information</h3>
            <span className='privacy-text'>We collect this information through registration and contact forms on our website.</span>
        </div>
        <div className='privacy-info-div'>
            <h3 className='privacy-subtitle'>Why We Collect Information</h3>
            <span className='privacy-text'>We collect your data for the sole purpose of contacting you and delivering the products you order.</span>
        </div>
        <div className='privacy-info-div'>
            <h3 className='privacy-subtitle'>Data Storage and Protection</h3>
            <span className='privacy-text'>We do not store your data beyond the fulfillment of your order. Once the order is complete, we delete your data to ensure your privacy.</span>
        </div>
        <div className='privacy-info-div'>
            <h3 className='privacy-subtitle'>Third-Party Sharing</h3>
            <span className='privacy-text'>KK Nurseries does not share your personal information with any third parties. Your data is kept strictly confidential.</span>
        </div>
        <div className='privacy-info-div'>
            <h3 className='privacy-subtitle'>Access and Modification</h3>
            <span className='privacy-text'>You can access, modify, or delete your personal information by visiting the user info section on our website.</span>
        </div>
        <div className='privacy-info-div'>
            <h3 className='privacy-subtitle'>Cookies and Tracking Technologies</h3>
            <span className='privacy-text'>We do not use cookies or any tracking technologies on our website.</span>
        </div>
        <div className='privacy-info-div'>
            <h3 className='privacy-subtitle'>Minors</h3>
            <span className='privacy-text'>We do not request or collect information from minors.</span>
        </div>
        <div className='privacy-info-div'>
            <h3 className='privacy-subtitle'>Newsletter</h3>
            <span className='privacy-text'>If you choose to sign up for our newsletter, we will send you updates and promotions via email. You can unsubscribe from these emails at any time.</span>
        </div>
        <p className='privacy-note'>By using our services or website, you agree to the terms of this Privacy Policy. Any future changes to this policy will be updated here. Please check this page periodically for updates. Thank you for choosing KK Nurseries.</p>
        </div>
        <Footer />
        </>
    )
}