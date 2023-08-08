import React from 'react';
import './Dialog.css';

export default function Dialog({onClick}) {
    function handelClick() {
        onClick();
    }
    return (
        <>
            <div className='main'>
                <div className='content'>
                <div className='contact-us-title-div'>
                <h1 className='contact-us-title'>Contact Us</h1>
                <button className='btn' onClick={() => handelClick()}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="contact-us-links">
                <div className="contact-us-link-1">
                <i className="fa-solid fa-phone"></i>
                <a className='contact-us-link' href='tel:+917386722020'> +91-7386-7220-20</a>
                </div>
                <div className="contact-us-link-2">
                <i className="fa-solid fa-envelope"></i>
                <a className="contact-us-link" href='mailto:kknurseries.official@gmail.com'> kknurseries.official@gmail.com</a>
                </div>
                <div className="contact-us-link-3">
                <i className="fa-solid fa-globe"></i>
                <span className="contact-us-link"> kknurseries.com</span>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}