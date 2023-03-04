import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
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
    {loading && <div className='circular-progress'>
    <div className='progress'>
    <CircularProgress />
    </div>
    </div>}
    </>
);
}

export default Home;