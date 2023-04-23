import React from 'react';
import Navbar from '../Components/Nav/Navbar';
import './SWO.css';

export default function SWO() {
    const cart = [];
    return (
        <>
           <Navbar data={cart}/>
           <div className='list'>
            <ul typeof='circle'>
                <li>Landscape designing</li>
                <li>Gardening Services</li>
                <li>Contract Growing</li>
                <li>Planting Services</li>
                <li>Horticultural Services</li>
            </ul>
           </div> 
        </>
    )
}