import React, { useEffect, useState, useRef } from 'react';
import './Carousel.css';

export default function Carousel(data) {

    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => 
        setIndex((prevIndex) => 
        prevIndex === data.data.length ? 0 : prevIndex + 1)
        , 2500);
        return () => {
            resetTimeout();
        }
    }, [index, data]);

    return (
        <>
        <div id='Carousel' className='carousel'>
            <div className='carousel-slider' 
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {data.data.length > 0 && data.data.map((item) => (
                <div key={item._id} className='carousel-slide' style={{backgroundImage:`url(${item.imgURL})`, backgroundSize: 'cover'}}></div>
            ))}
            </div>
            <div className='carousel-dots'>
            {data.data.length > 0 && data.data.map((item, idx) => (
                <div key={item._id} className={`carousel-dot ${idx === index ? '.carousel-dot-active' : ''}`} onClick={() => setIndex(idx)}></div>
            ))}
            </div>
        </div>
        </>
    )
} 