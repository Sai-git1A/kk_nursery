import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Nav/Navbar';
import Carousel from '../Components/Carousel/Carousel';
import './Home.css';

function Home () {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('https://kk-nursery.onrender.com/carousel', {
            mode: 'cors'
        });
        const data = await response.json();
        setData(data);
      };
    

return (
    <>
    <Navbar />
    <Carousel data={data}/>
    </>
);
}

export default Home;