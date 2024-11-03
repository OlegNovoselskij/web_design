import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/Cart">Cart</Link>  
        </nav>
    );
};

export default Navigation;
