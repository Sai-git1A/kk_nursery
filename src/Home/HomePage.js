import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, styled } from '@mui/material';
import Navbar from '../Components/Nav/Navbar';
import Carousel from '../Components/Carousel/Carousel';
import Category from '../Components/Category/Category';
import Footer from '../Components/Footer/Footer';
import data from '../Carousel.json';
import data2 from '../Category.json';
import './Home.css';

function Home () {

    const navigate = useNavigate();
    const [carousel, setCarousel] = useState([]);
    const [category, setCategory] = useState([]);
    const [pIndoorPlants, setPIndoorPlants] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const [resPIndoorPlants] = await Promise.all([
            axios.get('https://kk-nursery.onrender.com/popular-indoor-plants')
        ]);
        setPIndoorPlants(resPIndoorPlants.data);
        setLoading(false);
    }

    const StyledCircularProgress = styled(CircularProgress) ({
        color: '#4E944F'
    });

    function handelClick(title, img, price) {
        const obj = {
            imgURL: img,
            price: price
        }
        localStorage.setItem('item', JSON.stringify(obj));
        navigate('/details/' + title)
    }

    function handelATC(key, img, title, price) {
        setCart(preval => [...preval, {key: key, imgURL: img, title: title, price: price}]);
    }

    useEffect(() => {
        fetchData();
        setCarousel(data);
        setCategory(data2);
        localStorage.setItem('category', JSON.stringify(data2));
    }, []);

return (
    <>
    <Navbar data={cart}/>
    <Carousel data={carousel}/>
    <Category data={category} />

    {/* Popular Indoor Plants */}
    <h1 className='pip-title'>POPULAR INDOOR PLANTS</h1>
    <div className='popular-indoor-plants'>
        {pIndoorPlants.length > 0 && pIndoorPlants.map(item => (
            <div className='pip' key={item._id}>
                <img className='pip-img' src={item.imgURL} onClick={() => handelClick(item.title, item.imgURL, item.price)} alt={item.id}/>
                <span className='pip-name'>{item.title}</span>
                <span className='pip-price'>₹{item.price}</span>
                <button className='btn-atc' onClick={() => handelATC(item._id, item.imgURL, item.title, item.price)}>ADD TO CART</button>
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