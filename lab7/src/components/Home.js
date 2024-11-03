import React from "react";
import ShowMore from '../ShowMore/showMore'
import TileCard from '../TileCard/TileCard';
import HeaderSection from '../Header.js/header';

function Home() {
    const tiles = [
        {
            id: 1,
            title: '2023 Tesla Model S',
            description: 'Experience the ultimate in electric performance with the Tesla Model S. Featuring cutting-edge technology, unmatched range, and sleek design.', 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3tawp8KuAuodSiRqa5zWLoos75XIc_y1-L0QU0nNZD-dfQEUUS0MQByyHuPCO18VTECm&s",
        },
        {
            id: 2,
            title: '2023 Tesla Model S',
            description: 'Experience the ultimate in electric performance with the Tesla Model S. Featuring cutting-edge technology, unmatched range, and sleek design.',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-DFYbYQpLthcGpxbgo8Jb_8057Gf7sGqjS9snRAZepylKDeXUubQU5Y&s",
        },
        {
            id: 3,
            title: "Tesla Model S",
            description: "A fully electric sedan with autopilot, fast acceleration, and a luxurious interior.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-oeQCpBAvrAcPlg0_pNTch7ufRQR8rYpYggL5_OAiGnFb-2Biq0bFLM&s",
        },
    ];
    return (
        <div style={{ padding: '20px', maxWidth: '1500px', marginLeft: '200px' }}>
            <HeaderSection />
        <div style={{ display: 'flex', justifyContent: 'space-beetwen' }}>
            {tiles.map(tile => (
                <TileCard key={tile.id} title={tile.title} description={tile.description} image={tile.image} />
            ))}
        </div>
        <ShowMore />
        </div>
    );
}

export default Home;