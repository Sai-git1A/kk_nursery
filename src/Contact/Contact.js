import React from 'react';
import Navbar from '../Components/Nav/Navbar';
import Footer from '../Components/Footer/Footer';
import './Contact.css';

export default function Contact() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    return (
        <>
        <Navbar data={cart}/>
        <div className='contact-main'>
        <div className='contact-title-div'>
            <h1 className='contact-title'>Contact Us</h1>
        </div>
        <div className='contact-info-div'>
            <h3 className='contact-subtitle'>Contact Information</h3>
            <ul>
                <li>Phone: +91 7386722020</li>
                <li>Email: kknurseries.official@gmail.com</li>
            </ul>
        </div>
        <div className='contact-info-div'>
            <h3 className='contact-subtitle'>Operating Hours</h3>
            <span className='contact-text'>We're available to assist you from 8:00 AM to 8:00 PM every day of the week.</span>
        </div>
        <div className='contact-info-div'>
            <h3 className='contact-subtitle'>Visit Us</h3>
            <span className='contact-text'>If you'd like to visit us in person, you can find us at the following location: KK Nurseries on Google Maps. </span>
            <iframe className='contact-branch' title='contact-branch' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.0206778430943!2d77.44261647365501!3d15.157209063210159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6efc6d3de3bc3%3A0x452d751978a157c7!2sKK%20Nurseries%20(THIMMAPURAM%2CGUNTAKAL)!5e0!3m2!1sen!2sin!4v1697204318252!5m2!1sen!2sin"></iframe>
        </div>
        <div className='contact-info-div'>
            <h3 className='contact-subtitle'>Have Questions?</h3>
            <span className='contact-text'>If you have any questions or need assistance, please don't hesitate to reach out. We're here to help.</span>
        </div>
        <div className='contact-info-div'>
            <h3 className='contact-subtitle'>Feedback</h3>
            <span className='contact-text'>We value your feedback and encourage you to share your experiences with us on social media or via email. Your comments and suggestions help us serve you better.</span>
        </div>
        <p className='contact-note'>Thank you for choosing KK Nurseries!</p>
        </div>
        <Footer />
        </>
    )
}