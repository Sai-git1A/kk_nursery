import React, { useState, useRef, useEffect } from 'react';
import './Category.css';
import { useNavigate } from 'react-router-dom';

export default function Category(data) {

    const navigate = useNavigate();
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollDiv = useRef(null);

    function handleScrollLeft() {
        scrollDiv.current.scrollLeft -= 200;
        setScrollPosition(scrollDiv.current.scrollLeft);
    }
    
    function handleScrollRight() {
        scrollDiv.current.scrollLeft += 200;
        setScrollPosition(scrollDiv.current.scrollLeft);
    }

    function handelClick(title) {
        navigate('/listing/'+(title.toLowerCase()));
    }

    useEffect(() => {
        const handleScroll = () => {
          setScrollPosition(scrollDiv.current.scrollLeft);
        };
    
        scrollDiv.current.addEventListener('scroll', handleScroll);
        // return () => {
        //   scrollDiv.current.removeEventListener('scroll', handleScroll);
        // };
      }, []);
    

    return (
        <>
            <h1 className='category-title'>YOU CAN FIND</h1>
            <div id='Category' className='category' ref={scrollDiv}>
            {scrollPosition > 0 && <i className="fa-solid fa-circle-arrow-left" onClick={() => handleScrollLeft()}></i>}
            {data.data.length > 0 && data.data.map(item => (
                <div key={item.id} className='category-item' onClick={() => handelClick(item.title)}>
                    <img className='category-img' src={item.imgURL} loading='eager' alt={item.id} />
                    <span className='category-name'>{item.title}</span>
                </div>
            ))}
            <i className="fa-solid fa-circle-arrow-right" onClick={() => handleScrollRight()}></i>
            </div>
        </>
    )
}