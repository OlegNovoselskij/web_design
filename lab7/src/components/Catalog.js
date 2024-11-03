import React from 'react';
import CarsList from '../carsList/carsList'
import './Catalog.css'
import Filters from '../Filters/Filters'



const Catalog = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
            <Filters />
            <CarsList />
        </div>
    );
};

export default Catalog;
