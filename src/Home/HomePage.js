import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { CircularProgress, styled } from '@mui/material';
import Navbar from '../Components/Nav/Navbar';
import Carousel from '../Components/Carousel/Carousel';
import Category from '../Components/Category/Category';
import './Home.css';

function Home () {
    const [carousel, setCarousel] = useState([]);
    const [category, setCategory] = useState([]);
    const [pIndoorPlants, setPIndoorPlants] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const StyledCircularProgress = styled(CircularProgress) ({
        color: '#4E944F'
    })

    const fetchData = async () => {
        setLoading(true);
        const [resCarousel, resCategory, resPIndoorPlants] = await Promise.all([
            axios.get('https://kk-nursery.onrender.com/carousel'),
            axios.get('https://kk-nursery.onrender.com/category'),
            axios.get('https://kk-nursery.onrender.com/popular-indoor-plants')
        ]);
        setCarousel(resCarousel.data);
        setCategory(resCategory.data);
        setPIndoorPlants(resPIndoorPlants.data);
        setLoading(false);
    }
    

return (
    <>
    <Navbar />
    <Carousel data={carousel}/>
    <Category data={category} />

    {/* Popular Indoor Plants */}
    <h1 className='pip-title'>POPULAR INDOOR PLANTS</h1>
    <div className='popular-indoor-plants'>
        {pIndoorPlants.length > 0 && pIndoorPlants.map(item => (
            <div className='pip' key={item._id}>
                <img className='pip-img' src={item.imgURL} alt={item.id}/>
                <span className='pip-name'>{item.title}</span>
                <span className='pip-price'>₹{item.price}</span>
                <button className='btn-atc' onClick={() => alert(item.title)}>ADD TO CART</button>
            </div>
        ))}
    </div>

    {/* Services We Offer */}
    <h1 className='swo-title'>SERVICES WE OFFER</h1>
    <div className='swo'>
        <div className='gardening'><img className='gardening-img' src='https://res.cloudinary.com/safedb/image/upload/v1678078579/KK%20Nursery/Services%20We%20Offer/Gardening_oe3vkw.jpg' alt='Gardening' /></div>
        <div className='landscaping'><img className='landscaping-img' src='https://res.cloudinary.com/safedb/image/upload/v1678078579/KK%20Nursery/Services%20We%20Offer/Landscaping_yvfj2j.jpg' alt='Landscaping'/></div>
    </div>

    {/* Footer */}
    <div className='footer'>
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
            <span className='follow-us-link'><i class="fa-brands fa-youtube"></i></span>
            </Link>
            <Link to='www.facebook.com'>
            <span className='follow-us-link'><i class="fa-brands fa-facebook"></i></span>
            </Link>
            <Link to='www.twitter.com'>
            <span className='follow-us-link'><i class="fa-brands fa-twitter"></i></span>
            </Link>
            <Link to='www.instagram.com'>
            <span className='follow-us-link'><i class="fa-brands fa-instagram"></i></span>
            </Link>
        </div>
    </div>

    {/* Circular Progress */}
    {loading && <div className='circular-progress'>
    <StyledCircularProgress />
    </div>}
    </>
);
}

export default Home;