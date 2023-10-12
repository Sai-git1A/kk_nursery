import React from 'react';
import './SWO_Details.css';

export default function SWODetails({onClick, title, imgURL}) {

    function handelClick() {
        onClick();
    }

    return (
        <div className='swo-details-main'>
            <div className='swo-details-info'>
                <h2 className='swo-details-title'>{title}</h2>
                <img className='swo-details-img' src={imgURL} alt='swo-details-img'/>
                <div className='swo-details-description'>
                {title === "Landscaping" && <p className='swo-details-description-text'>
                If you're looking to enhance the beauty and functionality of your outdoor space, our landscaping services are perfect for you. Our team of experts will work with you to create a customized plan that not only meets your needs but also suits your style and budget. From designing and installing new features to maintaining and upgrading existing ones, we can handle it all. Let us transform your yard into a stunning oasis that you can enjoy all year round.
                </p>}
                {title === "Gardening" && <p className='swo-details-description-text'>
                Want to add some greenery to your outdoor space? Our gardening services are just what you need. We can help you create a beautiful and sustainable garden that will thrive in your local climate. Whether you want to plant flowers, vegetables, or herbs, we can advise you on the best species and techniques to use. Our team can also provide regular maintenance services to keep your garden looking its best.
                </p>}
                {title === "Planting" && <p className='swo-details-description-text'>
                Looking to add some trees, shrubs, or other plants to your property? Our planting services can help you create a beautiful and healthy landscape that will enhance your property's aesthetic appeal and value. We can advise you on the best species and planting techniques for your location and soil type. Our team will also provide regular maintenance services to ensure your plants thrive.
                </p>}
                {title === "Contract Farming" && <p className='swo-details-description-text'>
                If you're looking for a reliable and experienced partner for your agricultural or horticultural project, our contract farming services are perfect for you. We can provide turnkey solutions that cover everything from land preparation and cultivation to harvesting and marketing. Our team has extensive experience working with a wide range of crops and can help you optimize your yields and profits.
                </p>}
                {title === "Horticulture" && <p className='swo-details-description-text'>
                Our horticulture services can help you create and maintain a healthy and diverse garden or landscape. We can advise you on the best species to use, based on your local climate and soil type. Our team can also provide regular maintenance services to ensure your plants thrive. Whether you're looking to create a decorative garden or grow your own produce, we can help you achieve your goals.
                </p>}
                </div>
            </div>
            <div className='swo-details-button' onClick={() => handelClick()}>
                <h3 className='swo-details-button-title'>Close</h3>
            </div>
        </div>
    )
}