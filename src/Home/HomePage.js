import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { CircularProgress, styled } from '@mui/material';
import Navbar from '../Components/Nav/Navbar';
import Carousel from '../Components/Carousel/Carousel';
import Category from '../Components/Category/Category';
import Footer from '../Components/Footer/Footer';
import data from '../Carousel.json';
import data2 from '../Category.json';
import data3 from '../pip.json';
import './Home.css';

function Home () {

    const userAgent = window.navigator.userAgent;
    const navigate = useNavigate();
    const [carousel, setCarousel] = useState([]);
    const [category, setCategory] = useState([]);
    const [pIndoorPlants, setPIndoorPlants] = useState([]);
    const [cart, setCart] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [pipScrollPosition, setPipScrollPosition] = useState(0);
    const [branchScrollPosition, setBranchScrollPosition] = useState(0);
    const pipDiv = useRef(null);
    const branchDiv = useRef(null);
    let browserName;

    // const fetchData = async () => {
    //     setLoading(true);
    //     const resPIndoorPlants = await axios.get('https://kk-nursery.onrender.com/popular-indoor-plants')
    //     setPIndoorPlants(resPIndoorPlants.data);
    //     setLoading(false);
    // }

    // const StyledCircularProgress = styled(CircularProgress) ({
    //     color: '#4E944F'
    // });

    function handelClick(title, img, price) {
        const obj = {
            imgURL: img,
            price: price
        }
        localStorage.setItem('item', JSON.stringify(obj));
        navigate('/details/' + title)
    }

    function handelATC(key, img, title, price) {
        setCart(preval => [...preval, {key: key, imgURL: img, title: title, price: price, count:1}]);
    }

    function pipScrollLeft() {
        pipDiv.current.scrollLeft -= 200;
        setPipScrollPosition(pipDiv.current.scrollLeft);
    }
    
    function pipScrollRight() {
        pipDiv.current.scrollLeft += 200;
        setPipScrollPosition(pipDiv.current.scrollLeft);
    }

    function branchScrollLeft() {
        branchDiv.current.scrollLeft -= 200;
        setBranchScrollPosition(branchDiv.current.scrollLeft);
    }
    
    function branchScrollRight() {
        branchDiv.current.scrollLeft += 200;
        setBranchScrollPosition(branchDiv.current.scrollLeft);
    }

    if (userAgent.match(/Chrome/i)) {
        browserName = 'Google Chrome';
      } else if (userAgent.match(/Safari/i)) {
        browserName = 'Safari';
      } else if (userAgent.match(/Firefox/i)) {
        browserName = 'Mozilla Firefox';
      } else if (userAgent.match(/Edge/i)) {
        browserName = 'Microsoft Edge';
      } else if (userAgent.match(/Opera|OPR\//i)) {
        browserName = 'Opera';
      } else if (userAgent.match(/Trident/i) && !userAgent.match(/MSIE/i)) {
        browserName = 'Microsoft Internet Explorer';
      } else {
        browserName = 'Unknown Browser';
      }

    useEffect(() => {
        const handleScroll = () => {
          setPipScrollPosition(pipDiv.current.scrollLeft);
        };
    
        pipDiv.current.addEventListener('scroll', handleScroll);
      }, []);

      useEffect(() => {
        const handleScroll = () => {
          setBranchScrollPosition(branchDiv.current.scrollLeft);
        };
    
        branchDiv.current.addEventListener('scroll', handleScroll);
      }, []);

    useEffect(() => {
        // fetchData();
        setCarousel(data);
        setCategory(data2);
        setPIndoorPlants(data3);
        localStorage.setItem('category', JSON.stringify(data2));
    }, []);

return (
    <>
    <Navbar data={cart}/>
    <Carousel data={carousel}/>
    <Category data={category} />

    <p style={{display: 'none'}}>{browserName}</p>

    {/* Popular Indoor Plants */}
    <h1 className='pip-title'>POPULAR INDOOR PLANTS</h1>
    <div className='popular-indoor-plants' ref={pipDiv}>
    {pipScrollPosition > 0 && <i className="fa-solid fa-circle-arrow-left" onClick={() => pipScrollLeft()}></i>}
        {pIndoorPlants.length > 0 && pIndoorPlants.map(item => (
            <div className='pip' key={item._id}>
                <img className='pip-img' src={item.imgURL} onClick={() => handelClick(item.title, item.imgURL, item.price)} loading='lazy' alt={item.id}/>
                <span className='pip-name'>{item.title}</span>
                <span className='pip-price'>₹{item.price}</span>
                <button className='btn-atc' onClick={() => handelATC(item._id, item.imgURL, item.title, item.price)}>ADD TO CART</button>
            </div>
        ))}
        <i className="fa-solid fa-circle-arrow-right" onClick={() => pipScrollRight()}></i>
    </div>

    {/* Services We Offer */}
    <h1 className='swo-title'>SERVICES WE OFFER</h1>
    <div className='swo'>
        <div className='gardening' onClick={() => alert('Gardening')}><img className='gardening-img' src='https://res.cloudinary.com/safedb/image/upload/v1678078579/KK%20Nursery/Services%20We%20Offer/Gardening_oe3vkw.jpg' alt='Gardening' /></div>
        <div className='landscaping' onClick={() => alert('Landscaping')}><img className='landscaping-img' src='https://res.cloudinary.com/safedb/image/upload/v1678078579/KK%20Nursery/Services%20We%20Offer/Landscaping_yvfj2j.jpg' alt='Landscaping'/></div>
    </div>

    {/* Our Branches */}
    <h1 className='our-branches-title'>OUR BRANCHES</h1>
    <div className='branches' ref={branchDiv}>
    {branchScrollPosition > 0 && <i className="fa-solid fa-circle-arrow-left" onClick={() => branchScrollLeft()}></i>}
        <div className='branch'>
            <span className='branch-title'>Thimmapuram Branch</span>
            <iframe className='branch-location' title='branch-1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.1622817227067!2d77.44455448120083!3d15.158232759709026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6efc6d3de3bc3%3A0x452d751978a157c7!2sKK%20Nurseries%20(THIMMAPURAM%2CGUNTAKAL)!5e0!3m2!1sen!2sin!4v1680771907184!5m2!1sen!2sin"></iframe>
        </div>
        <div className='branch'>
            <span className='branch-title'>RTC Bus Stop, Guntakal Branch</span>
            <iframe className='branch-location' title='branch-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348.8723047071379!2d77.37955354941225!3d15.161544297702294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6ef17edb97a91%3A0x5cd69c67e75c239a!2sSRIKRISHNA%20KUMARI%20PLANT&#39;S%20NURSERY%2CAPSRTC%20Bus%20Stand%2CGUNTAKAL!5e0!3m2!1sen!2sin!4v1680772202434!5m2!1sen!2sin"></iframe>
        </div>
        <div className='branch'>
            <span className='branch-title'>SBI Main, Guntakal Branch</span>
            <iframe className='branch-location' title='branch-3' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.67247689861537!2d77.37229312045716!3d15.171539827583167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6e551a2f6ab2b%3A0x95e321a5baba994a!2sKK%20Nurseries%20(SBI%20MAIN%20BRANCH%2CGUNTAKAL)!5e0!3m2!1sen!2sin!4v1680772649711!5m2!1sen!2sin"></iframe>
        </div>
        <div className='branch'>
            <span className='branch-title'>Gooty Branch</span>
            <iframe className='branch-location' title='branch-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.6393880466635!2d77.63196001393374!3d15.123190668112382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb695fba053f1cf%3A0x4edfa19844efb442!2sKK%20Nurseries%20(GOOTY%20BRANCH)!5e0!3m2!1sen!2sin!4v1680772858963!5m2!1sen!2sin"></iframe>
        </div>
        <i className="fa-solid fa-circle-arrow-right" onClick={() => branchScrollRight()}></i>
    </div>

    {/* Footer */}
    <Footer />

    {/* Circular Progress */}
    {/* {loading && <div className='circular-progress'>
    <StyledCircularProgress />
    </div>} */}
    </>
);
}

export default Home;