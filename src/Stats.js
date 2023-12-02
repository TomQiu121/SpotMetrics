import React, { useState, useEffect } from 'react';
import './Stats.css';

const Stats = () => {
    const [topArtists, setTopArtists] = useState([]);

    // Simulated data fetching (replace with actual Spotify API data)
    useEffect(() => {
        // Simulated data (replace with actual Spotify API data)
        const simulatedData = [
            {
                name: 'Artist 1',
                image: 'https://placekitten.com/200/200', // Replace with actual image URL
            },
            // Add more artist objects for the top 10
        ];

        setTopArtists(simulatedData);
    }, []);

    return (
        <div className="container">
            <h1>Top 10 Spotify Artists</h1>
            {topArtists.map(artist => (
                <div className="artist-card" key={artist.name}>
                    <h2 className="artist-name">{artist.name}</h2>
                    <img className="artist-image" src={artist.image} alt={artist.name} />
                </div>
            ))}
        </div>
    );
};

export default Stats;
