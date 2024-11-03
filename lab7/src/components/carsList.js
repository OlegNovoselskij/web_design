// CarList.js
import React from 'react';
import Car from '../Car/Car';
import './carsList.css'

const CarList = () => {
  const cars = [
    {
        name: "Tesla Model S",
        description: "A fully electric sedan with autopilot, fast acceleration, and a luxurious interior.",
        price: 79999,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-oeQCpBAvrAcPlg0_pNTch7ufRQR8rYpYggL5_OAiGnFb-2Biq0bFLM&s",
    },
    {
        name: "BMW M3",
        description: "A high-performance sports sedan with a powerful engine and advanced driving dynamics.",
        price: 69999,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-MoAa8MLcuPeBcs-umRuMvW3FTyKTz5yZnrFr_QsGumVZyqggDUimo5ip6YG84PP4XIG&s",
    },
    {
        name: "Audi R8",
        description: "A sleek and stylish sports car with a V10 engine, offering a thrilling driving experience.",
        price: 142000,
        imageUrl: "data:image/jpeg;base64,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",
    },
    {
        name: "BMW M3",
        description: "A high-performance sports sedan with a powerful engine and advanced driving dynamics.",
        price: 69999,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-MoAa8MLcuPeBcs-umRuMvW3FTyKTz5yZnrFr_QsGumVZyqggDUimo5ip6YG84PP4XIG&s",
    },
    {
        name: "Audi R8",
        description: "A sleek and stylish sports car with a V10 engine, offering a thrilling driving experience.",
        price: 142000,
        imageUrl: "data:image/jpeg;base64,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",
    },
];


    return (
        <div className="car-list">
            {cars.map((car, index) => (
                <Car key={index} {...car} />
            ))}
        </div>
    );
};

export default CarList;