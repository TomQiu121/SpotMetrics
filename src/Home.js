import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <header className="Home-header">
                <p>
                    Welcome to <strong>SpotMetrics</strong>, where we will tell you your music taste.
                </p>
                <a
                    className="Home-button"
                    href="https://accounts.spotify.com/en/login"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Login with Spotify
                </a>
                <img src='./CD.webp' alt="Logo" className="Home-logo" />
            </header>
        </div>
    );
}

export default Home