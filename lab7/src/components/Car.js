// Car.js
import React from 'react';
import './Car.css';

const Car = ({ name, description, price, imageUrl }) => {
    return (
        <div className="car-card">
            <img src={imageUrl} alt={name} className="car-image" />
            <div className="car-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <span>price: ${price}</span>
            </div>
            <button>Show More</button>
        </div>
    );
};

export default Car;
