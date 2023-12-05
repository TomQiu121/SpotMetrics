import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RedirectPage = () => {
    const [topArtists, setTopArtists] = useState([]);
    const [topAlbums, setTopAlbums] = useState([]);
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        // Fetch user's top artists, albums, and tracks from the Spotify API
        // You'll need to implement the Spotify API integration here

        // Example of fetching data (replace with actual API calls):
        // const fetchTopArtists = async () => {
        //   const response = await fetch('Spotify-API-Endpoint-For-Top-Artists');
        //   const data = await response.json();
        //   setTopArtists(data.items);
        // };

        // const fetchTopAlbums = async () => {
        //   const response = await fetch('Spotify-API-Endpoint-For-Top-Albums');
        //   const data = await response.json();
        //   setTopAlbums(data.items);
        // };

        // const fetchTopTracks = async () => {
        //   const response = await fetch('Spotify-API-Endpoint-For-Top-Tracks');
        //   const data = await response.json();
        //   setTopTracks(data.items);
        // };

        // fetchTopArtists();
        // fetchTopAlbums();
        // fetchTopTracks();

        // This is just a placeholder for demonstration purposes.
        // You'll need to replace it with actual API calls based on the Spotify API documentation.
        // Make sure to handle authentication and API calls securely.

    }, []); // The empty dependency array ensures that this effect runs once after the initial render

    return (
        <div>
            <h2>Your Top 5 Artists</h2>
            <ul>
                {topArtists.map((artist) => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>

            <h2>Your Top 5 Albums</h2>
            <ul>
                {topAlbums.map((album) => (
                    <li key={album.id}>{album.name}</li>
                ))}
            </ul>

            <h2>Your Top 5 Tracks</h2>
            <ul>
                {topTracks.map((track) => (
                    <li key={track.id}>{track.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RedirectPage;
