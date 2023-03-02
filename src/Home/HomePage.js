import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Nav/Navbar';
import Carousel from '../Components/Carousel/Carousel';
import Category from '../Components/Category/Category';
import './Home.css';

function Home () {
    const [carousel, setCarousel] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetchCarouselData();
        fetchCategoryData();
    }, []);

    const fetchCarouselData = async () => {
        const response = await fetch('https://kk-nursery.onrender.com/carousel', {
            mode: 'cors'
        });
        const data = await response.json();
        setCarousel(data);
      };

    const fetchCategoryData = async () => {
        const response = await fetch('https://kk-nursery.onrender.com/category', {
            mode: 'cors'
        });
        const data = await response.json();
        setCategory(data);
    }
    

return (
    <>
    <Navbar />
    <Carousel data={carousel}/>
    <Category data={category} />
    </>
);
}

export default Home;