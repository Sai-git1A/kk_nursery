import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    const navigate = useNavigate();

    return (
        <>
        <div className="footer">
        <div className="footer-about-us">
            <h1 className="footer-about-us-title" onClick={() => navigate('/about')}>Hear Our Story</h1>
        </div>
        <div className="footer-contact-us">
            <h1 className='contact-us-title'>Get In Touch</h1>
            <div className="contact-us-link-1">
            <span className='contact-us-info'>+91-7386-7220-20</span>
            </div>
            <div className="contact-us-link-div-2">
            <span className='contact-us-info'>kknurseries.official@gmail.com</span>
            </div>
            <div className="contact-us-link-3">
            <span className="contact-us-info"> kknurseries.com</span>
            </div>
        </div>
        <div className="footer-follow-us">
            <Link className="follow-us-icons" to="https://www.youtube.com/channel/UC3FvjGj2LVNb5sg9MUHMfYw" target="_blank"><i class="fa-brands fa-youtube"></i></Link>
            <Link className="follow-us-icons" to="https://api.whatsapp.com/send/?phone=%2B917386722020&text&type=phone_number&app_absent=0" target="_blank"><i class="fa-brands fa-whatsapp"></i></Link>
            <Link className="follow-us-icons" to="https://www.youtube.com/channel/UC3FvjGj2LVNb5sg9MUHMfYw" target="_blank"><i class="fa-brands fa-instagram"></i></Link>
            <Link className="follow-us-icons" to="https://www.youtube.com/channel/UC3FvjGj2LVNb5sg9MUHMfYw" target="_blank"><i class="fa-brands fa-twitter"></i></Link>
        </div>
        </div>
        <div className="copyright">&#169; KK Nurseries. All rights received 2023.</div>
        </>
    )
}