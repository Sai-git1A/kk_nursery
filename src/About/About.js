import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
    return (
        <>
        <div className='about-main'>
        <div className='about-logo-div'>
            <img className='about-logo' src='https://res.cloudinary.com/kknurseries/image/upload/v1696391900/Logo/Logo.png' alt='Logo'/>
        </div>
        <div className='about-info-div'>
            <h1 className='about-info-title'>KK Nurseries</h1>
            <p className='about-info'>
            Welcome to KK Nurseries, your one-stop online destination for exceptional wholesale plants. Our passion for horticulture and the vision to bring nature closer to people has made KK Nurseries a trusted institution in wholesale plant nursery services.
            </p>
            <p className='about-info'>
            Our journey began with a small nursery where we cultivated a diverse range of plants. Over the years, we have grown into a reliable source of high-quality, healthy plants for both individuals and businesses. We are excited to expand even further by offering our beautiful selection of plants online.
            </p>
            <p className='about-info'>
            At KK Nurseries, we believe that everyone should have access to quality plants from the comfort of their own home. Our dedication to superior quality, sustainable practices, and broad variety sets us apart in the green industry. Every plant that leaves our nursery is grown with careful attention, detail, and love, ensuring they arrive at your doorstep in peak condition, ready to thrive.
            </p>
            <p className='about-info'>
            Behind the vibrant green leaves and fragrant blossoms of our plants, a team of skilled horticulturists and nurturing caregivers work tirelessly. Their collective wealth of knowledge and experience ensures that we consistently provide our customers with the very best plants and advice for their care.
            </p>
            <p className='about-info'>
            Beyond plants, we aspire to create a community of plant lovers at KK Nurseries. Whether you're an experienced gardener or just starting your green journey, we're here to assist, inspire, and grow with you every step of the way.
            </p>
            <p className='about-info'>
            Thank you for choosing KK Nurseries. We look forward to nurturing your green thumb and helping you create your perfect indoor or outdoor garden oasis.
            </p>
            <div className='about-nursery-img'></div>
            <div className="footer-contact-us">
            <h1 className='footer-contact-us-title'>Get In Touch</h1>
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
            <Link className="follow-us-icons" to="https://www.youtube.com/channel/UC3FvjGj2LVNb5sg9MUHMfYw" target="_blank"><i className="fa-brands fa-youtube"></i></Link>
            <Link className="follow-us-icons" to="https://api.whatsapp.com/send/?phone=%2B917386722020&text&type=phone_number&app_absent=0" target="_blank"><i className="fa-brands fa-whatsapp"></i></Link>
            <Link className="follow-us-icons" to="https://www.youtube.com/channel/UC3FvjGj2LVNb5sg9MUHMfYw" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
            <Link className="follow-us-icons" to="https://www.youtube.com/channel/UC3FvjGj2LVNb5sg9MUHMfYw" target="_blank"><i className="fa-brands fa-twitter"></i></Link>
            </div>
        </div>
        </div>
        </>
    )
}