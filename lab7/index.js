import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; 

import reportWebVitals from './reportWebVitals';
import Navigation from './components1/Navigation/Navigation';
import Home from './components1/pages/Home/Home/Home'
import Catalog from './components1/pages/Catalog/Catalog/Catalog'; // Створіть цей компонент для сторінки каталогу
import Footer from './components1/footer/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
