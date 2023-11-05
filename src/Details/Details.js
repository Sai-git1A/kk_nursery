/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress, styled } from '@mui/material';
import Navbar from "../Components/Nav/Navbar";
import Footer from "../Components/Footer/Footer";
import data from '../Details.json';
import './Details.css';

export default function() {

    const param = useParams();
    const [loading, setLoading] = useState(false);
    const item = JSON.parse(localStorage.getItem('item'));
    const [cart, setCart] = useState(() => {
        const cart = localStorage.getItem('cart');
        if (cart) {
            return JSON.parse(cart);
        }
        return [];
    });
    const [details, setDetails] = useState({});

    const StyledCircularProgress = styled(CircularProgress) ({
        color: '#4E944F'
    });

    const fetchData = async (title) => {
        setLoading(true);
        const res = await axios.get('https://kk-nursery-api.vercel.app/details/'+ title);
        setDetails(res.data);
        setLoading(false);
    }

    function handelATC(key, img, title, price) {
        if (cart.some(item => item.title === title)) {
            alert('Item already in cart');
            return;
        }
        setCart(preval => [...preval, {key: key, imgURL: img, title: title, price: price, count:1}]);
    }

    useEffect(() => {
        fetchData(param.name);
    }, [param.name]);

    return (
        <>
            <Navbar data={cart} />
            {loading && <div className='circular-progress'>
            <StyledCircularProgress />
            </div>}
            {details && <div className="details" key={details._id}>
                <img className="details-img" src={item.imgURL} loading="eager" alt={details.name}/>
                <div className="details-content">
                    <h1 className="details-name">{details.name}</h1>
                    <span className="details-price">₹{item.price}</span>
                    <button className="btn-details-atc" onClick={() => handelATC(details._id, item.imgURL, details.name, item.price)}>ADD TO CART</button>
                    <button className="btn-details-bin">BUY IT NOW</button>
                    <div className="description">
                    <h2 className="details-s-name">{details.scientificName}</h2>
                    <div className="details-tags">{details.specifications ? details.specifications.map(item => <span className="details-tag" key={item}>{item}</span>) : ''}</div>
                    <div className="des-item">
                        <img className="des-item-img" src={data.watering} alt="img"/>
                        <span className="des-item-text">Watering, {details.watering}</span>
                    </div>
                    <div className="des-item">
                        <img className="des-item-img" src={data.temperature} alt="img"/>
                        <span className="des-item-text">{details.temperature}</span>
                    </div>
                    <div className="des-item">
                        <img className="des-item-img" src={data.sunlight} alt="img"/>
                        <span className="des-item-text">{details.sunlight}</span>
                    </div>
                    <div className="des-item">
                        <img className="des-item-img" src={data.soil} alt="img"/>
                        <span className="des-item-text">{details.soil}</span>
                    </div>
                    <div className="des-item">
                        <img className="des-item-img" src={data.diseases} alt="img"/>
                        <div className="des-item-diseases">{details.diseases ? details.diseases.map(item => <span className="des-item-text" key={item}>{item}</span>) : ''}</div>
                    </div>
                    <div className="des-item">
                        <img className="des-item-img" src={data.humidity} alt="img"/>
                        <span className="des-item-text">Humidity, {details.humidity}</span>
                    </div>
                    <div className="des-item">
                        <img className="des-item-img" src={data.repoting} alt="img"/>
                        <span className="des-item-text">Repoting, {details.repoting}</span>
                    </div>
                    </div>
                </div>
            </div>}
            <Footer />
        </>
    )
}