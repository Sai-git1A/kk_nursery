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
                <button className='btn-close' onClick={() => handelClick()}><i className="fa-solid fa-xmark"></i></button>
                <div className="contact-us-content">
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
                </div>
            </div>
        </>
    )
}