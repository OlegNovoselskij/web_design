import React from 'react';
import './TileCArd.css'

const TileCard = ({ title, description, image }) => {
    return (
        <div style={{ textAlign: 'center', width: '900px', padding: '50px', borderRadius: '5px', marginLeft: '70px' }}>
            <img src={image} alt={title} style={{ width: '350px', height: '250px', objectFit: 'cover', borderRadius: '5px' }} />
            <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default TileCard;
