import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CircularProgress, styled } from '@mui/material';
import Navbar from "../Components/Nav/Navbar";
import Footer from "../Components/Footer/Footer";
import './Listing.css';

export default function Listing() {

    const navigate = useNavigate();
    const param = useParams();
    const btnSort = useRef(null);
    const radioLH = useRef(null);
    const radioHL = useRef(null);
    const radioAZ = useRef(null);
    const radioZA = useRef(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(false);
    const category = JSON.parse(localStorage.getItem('category'));
    const [cart, setCart] = useState([]);
    const [list, setList] = useState([]);

    const StyledCircularProgress = styled(CircularProgress) ({
        color: '#4E944F'
    });

    const fetchData = async (title) => {
        setLoading(true);
        const res = await axios.get('https://kk-nursery-api.vercel.app/'+ title.replace(/\s+/g, '-'));
        setList(res.data[0].body);
        setLoading(false);
    }

    function handelClick(title) {
        setList([]);
        navigate('/listing/' + title.toLowerCase());
        fetchData(title.toLowerCase());
    }

    function handelItemClick(title, img, price) {
        const obj = {
            imgURL: img,
            price: price
        }
        localStorage.setItem('item', JSON.stringify(obj));
        navigate('/details/' + title);
    }

    function handelSort() {
        if (btnSort.current.innerHTML === 'SORT BY') {
            btnSort.current.innerHTML = 'APPLY';
        } else {
            radioLH.current.checked = false;
            radioHL.current.checked = false;
            radioAZ.current.checked = false;
            radioZA.current.checked = false;
            btnSort.current.innerHTML = 'SORT BY';
        }
        setStatus(!status);
    }

    function handelLH() {
        radioLH.current.checked = true;
        const filterData = list.sort((a, b) => a.price - b.price);
        setList(filterData);
    }

    function handelHL() {
        radioHL.current.checked = true;
        const filterData = list.sort((a, b) => b.price - a.price);
        setList(filterData);
    }

    function handelAZ() {
        radioAZ.current.checked = true;
        const filterData = list.sort((a, b) => a.title.localeCompare(b.title));
        setList(filterData);
    }

    function handelZA() {
        radioZA.current.checked = true;
        const filterData = list.sort((a, b) => b.title.localeCompare(a.title));
        setList(filterData);
    }

    function handelATC(key, img, title, price) {
        setCart(preval => [...preval, {key: key, imgURL: img, title: title, price: price, count:1}]);
    }

    useEffect(() => {
        fetchData(param.name);
    }, [param.name]);

    return (
        <>
        <Navbar data={cart} />
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
            <div className="sort-item" onClick={() => handelLH()}><input type='radio' name="sort" ref={radioLH} />Price, Low to High</div>
            <div className="sort-item" onClick={() => handelHL()}><input type='radio' name="sort" ref={radioHL} />Price, High to Low</div>
            <div className="sort-item" onClick={() => handelAZ()}><input type='radio' name="sort" ref={radioAZ} />Alphabetically, A to Z</div>
            <div className="sort-item" onClick={() => handelZA()}><input type='radio' name="sort" ref={radioZA} />Alphabetically, Z to A</div>
        </div>
        <div className="listing">
            {loading && <div className='circular-progress'>
            <StyledCircularProgress />
            </div>}
            {list.length > 0 && list.map(item => (
                <div className="list-item" key={item.id}>
                    <img className="list-item-img" src={item.imgURL} onClick={() => handelItemClick(item.title, item.imgURL, item.price)} loading="eager" alt={item.title}/>
                    <span className="list-item-name">{item.title}</span>
                    <span className="list-item-price">₹{item.price}</span>
                    <button className='btn-atc' onClick={() => handelATC(item.id, item.imgURL, item.title, item.price)}>ADD TO CART</button>
                </div>
            ))}
        </div>
        <Footer />
        </>
    )
}