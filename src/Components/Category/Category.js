import React from 'react';
import './Category.css';

export default function Category(data) {
    return (
        <>
            <h1 className='category-title'>YOU CAN FIND</h1>
            <div id='Category' className='category'>
            {data.data.length > 0 && data.data.map(item => (
                <div key={item._id} className='category-item'>
                    <img className='category-img' src={item.imgURL} alt={item.id} />
                    <span className='category-name'>{item.title}</span>
                </div>
            ))}
            </div>
        </>
    )
}