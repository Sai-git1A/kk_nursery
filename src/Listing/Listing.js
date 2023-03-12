import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Nav/Navbar";
import Footer from "../Components/Footer/Footer";
import './Listing.css';

export default function Listing() {

    const navigate = useNavigate();
    const param = useParams();
    const btnSort = useRef(null);
    const [status, setStatus] = useState(false);
    const category = JSON.parse(localStorage.getItem('category'));
    const [list, setList] = useState([]);

    const fetchData = async (title) => {
        const res = await axios.get('https://kk-nursery.onrender.com/'+ title.replace(/\s+/g, '-'));
        setList(res.data[0].body);
    }

    function handelClick(title) {
        navigate('/listing/' + title.toLowerCase());
        fetchData(title.toLowerCase());
    }

    function handelSort() {
        if (btnSort.current.innerHTML === 'SORT BY') {
            btnSort.current.innerHTML = 'APPLY';
        } else {
            btnSort.current.innerHTML = 'SORT BY';
        }
        setStatus(!status);
    }

    function handelLH() {
        const filterData = list.sort((a, b) => a.price - b.price);
        setList(filterData);
    }

    function handelHL() {
        const filterData = list.sort((a, b) => b.price - a.price);
        setList(filterData);
    }

    function handelAZ() {
        const filterData = list.sort((a, b) => a.title.localeCompare(b.title));
        setList(filterData);
    }

    function handelZA() {
        const filterData = list.sort((a, b) => b.title.localeCompare(a.title));
        setList(filterData);
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
                <span className="listing-category-name"style={{color: item.title.toLowerCase() === param.name? '#4E944F':'#000000'}}>{item.title}</span>
            </div>
        ))}
        </div>
        <div className="filter">
            <button className="btn-sort" ref={btnSort} onClick={() => handelSort()}>SORT BY</button>
        </div>
        <div className="sort" style={{display:status?"block":"none"}}>
            <div className="sort-item" onClick={() => handelLH()}>Price, Low to High</div>
            <div className="sort-item" onClick={() => handelHL()}>Price, High to Low</div>
            <div className="sort-item" onClick={() => handelAZ()}>Alphabetically, A to Z</div>
            <div className="sort-item" onClick={() => handelZA()}>Alphabetically, Z to A</div>
        </div>
        <div className="listing">
            {list.length > 0 && list.map(item => (
                <div className="list-item" key={item.id}>
                    <img className="list-item-img" src={item.imgURL} alt={item.title}/>
                    <span className="list-item-name">{item.title}</span>
                    <span className="list-item-price">₹{item.price}</span>
                    <button className='btn-atc' onClick={() => alert(item.title)}>ADD TO CART</button>
                </div>
            ))}
        </div>
        <Footer />
        </>
    )
}