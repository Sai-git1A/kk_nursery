import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, styled } from '@mui/material';
import Navbar from '../Components/Nav/Navbar';
import Carousel from '../Components/Carousel/Carousel';
import Category from '../Components/Category/Category';
import Footer from '../Components/Footer/Footer';
import './Home.css';

function Home () {

    const navigate = useNavigate();
    const [carousel, setCarousel] = useState([]);
    const [category, setCategory] = useState([]);
    const [pIndoorPlants, setPIndoorPlants] = useState([]);
    const [loading, setLoading] = useState(false);

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
        localStorage.setItem('category', JSON.stringify(resCategory.data));
    }

    const StyledCircularProgress = styled(CircularProgress) ({
        color: '#4E944F'
    });

    function handelClick(title) {
        navigate('/details/' + title)
    }

    useEffect(() => {
        fetchData();
    }, []);

return (
    <>
    <Navbar />
    <Carousel data={carousel}/>
    <Category data={category} />

    {/* Popular Indoor Plants */}
    <h1 className='pip-title'>POPULAR INDOOR PLANTS</h1>
    <div className='popular-indoor-plants'>
        {pIndoorPlants.length > 0 && pIndoorPlants.map(item => (
            <div className='pip' key={item._id} onClick={() => handelClick(item.title)}>
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
        <div className='gardening' onClick={() => alert('Gardening')}><img className='gardening-img' src='https://res.cloudinary.com/safedb/image/upload/v1678078579/KK%20Nursery/Services%20We%20Offer/Gardening_oe3vkw.jpg' alt='Gardening' /></div>
        <div className='landscaping' onClick={() => alert('Landscaping')}><img className='landscaping-img' src='https://res.cloudinary.com/safedb/image/upload/v1678078579/KK%20Nursery/Services%20We%20Offer/Landscaping_yvfj2j.jpg' alt='Landscaping'/></div>
    </div>

    {/* Footer */}
    <Footer />

    {/* Circular Progress */}
    {loading && <div className='circular-progress'>
    <StyledCircularProgress />
    </div>}
    </>
);
}

export default Home;