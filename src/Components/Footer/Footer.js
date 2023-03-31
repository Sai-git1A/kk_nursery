import React from "react";
import {Link} from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <>
        <section className='footer' id="Footer">
        <div className='about-us'>
            <h1 className='about-us-title'>About Us</h1>
            <Link to='/about'><span className='about-us-link'>Hear Our Story</span></Link>
        </div>
        <div className='contact-us'>
            <h1 className='contact-us-title'>Contact Us</h1>
            <span className='contact-us-link'>Call: +91-7386-7220-20</span>
        </div>
        <div className='follow-us'>
            <h1 className='follow-us-title'>Follow Us</h1>
            <Link to='https://www.youtube.com/@srikrishnakumarinursery' target='_blank'>
            <span className='follow-us-link'><i className="fa-brands fa-youtube"></i></span>
            </Link>
            <Link to='www.facebook.com' target='_blank'>
            <span className='follow-us-link'><i className="fa-brands fa-facebook"></i></span>
            </Link>
            <Link to='www.twitter.com' target='_blank'>
            <span className='follow-us-link'><i className="fa-brands fa-twitter"></i></span>
            </Link>
            <Link to='www.instagram.com' target='_blank'>
            <span className='follow-us-link'><i className="fa-brands fa-instagram"></i></span>
            </Link>
        </div>
        </section>
        </>
    )
}