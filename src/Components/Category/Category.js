import React from 'react';
import './Category.css';
import { useNavigate } from 'react-router-dom';

export default function Category(data) {
    const navigate = useNavigate();
    
    function handelClick(title) {
        navigate('/listing/'+(title.toLowerCase()));
    }
    
    return (
        <>
            <h1 className='category-title'>YOU CAN FIND</h1>
            <div className='you-can-find'>
            {data.data.length > 0 && data.data.map(item => (
                <div key={item.id} className='category-item' style={{backgroundImage:`url(${item.imgURL})`}} onClick={() => handelClick(item.title)}>
                    <div className='category-blank'>
                    <h1 className='category-name'>{item.title}</h1>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}