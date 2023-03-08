import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Nav/Navbar";
import './Listing.css';

export default function Listing() {

    const param = useParams();
    const category = JSON.parse(localStorage.getItem('category'));
    const [list, setList] = useState([]);

    const fetchData = async (title) => {
        const res = await axios.get('https://kk-nursery.onrender.com/'+ title.replace(/\s+/g, '-'));
        setList((items) => [...items.concat(res.data)] );
    }

    function handelClick(title) {
        alert(title);
    }

    useEffect(() => {
        fetchData(param.name);
    }, []);

    return (
        <>
        <Navbar />
        <div className="category">
        {category.length > 0 && category.map(item => (
            <div className="category-item" key={item._id} onClick={() => handelClick(item.title)} style={{backgroundColor: item.title.toLowerCase() === param.name? '#fff':'#E9EFC0'}}>
                <span className="category-name"style={{color: item.title.toLowerCase() === param.name? '#4E944F':'#000000'}}>{item.title}</span>
            </div>
        ))}
        </div>
        <div className="listing">
            {list.length > 0 && list[0].body.map(item => (
                <div className="list-item">
                    <img className="list-item-img" src={item.imgURL} alt={item.title}/>
                    <span className="list-item-name">{item.title}</span>
                    <span className="list-item-price">₹{item.price}</span>
                    <button className='btn-atc' onClick={() => alert(item.title)}>ADD TO CART</button>
                </div>
            ))}
        </div>
        </>
    )
}