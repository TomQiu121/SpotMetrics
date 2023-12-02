// src/components/TopTracks.js
import React from 'react';
import { Artist } from 'react-spotify-api';

const TopTracks = () => {
    const { data } = Artist('tracks', { limit: 5 });

    if (!data) return null;

    return (
        <div>
            <h2>Your Top Tracks</h2>
            <ul>
                {data.items.map((track) => (
                    <li key={track.id}>{track.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TopTracks;
