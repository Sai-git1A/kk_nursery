import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress, styled } from '@mui/material';
import Navbar from "../Components/Nav/Navbar";
import Footer from "../Components/Footer/Footer";
import './Details.css';

export default function() {

    const param = useParams();
    const [loading, setLoading] = useState(false);
    const item = JSON.parse(localStorage.getItem('item'));
    const [details, setDetails] = useState({});

    const StyledCircularProgress = styled(CircularProgress) ({
        color: '#4E944F'
    });

    const fetchData = async (title) => {
        setLoading(true);
        const res = await axios.get('https://kk-nursery.onrender.com/details/'+ title);
        setDetails(res.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchData(param.name);
    }, []);

    return (
        <>
            <Navbar />
            {loading && <div className='circular-progress'>
            <StyledCircularProgress />
            </div>}
            {details && <div className="details" key={details._id}>
                <img className="details-img" src={item.imgURL} alt={details.name}/>
                <div className="details-content">
                    <h1 className="details-name">{details.name}</h1>
                    <span className="details-price">₹{item.price}</span>
                    <button className="btn-details-atc">ADD TO CART</button>
                    <button className="btn-details-bin">BUY IT NOW</button>
                    <div className="description">
                    <h2 className="details-s-name">{details.scientificName}</h2>
                    <div className="details-tags">{details.specifications ? details.specifications.map(item => <span className="details-tag" key={item}>{item}</span>) : ''}</div>
                    </div>
                </div>
            </div>}
            <Footer />
        </>
    )
}