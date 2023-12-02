// src/components/SpotifyAuth.js
import React, { useState } from 'react';
import { SpotifyApiContext } from 'react-spotify-api';
import { clientId, redirectUri } from '../config';

const SpotifyAuthComponent = ({ children }) => {
    const [token, setToken] = useState(null);

    // Function to handle successful Spotify authentication
    const handleAuthentication = (newToken) => {
        setToken(newToken);
    };

    return (
        <SpotifyApiContext.Provider value={token}>
            {!token ? (
                <div>
                    <p>Please authenticate with Spotify:</p>
                    <a
                        href={`https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user-read-private%20user-read-email&response_type=token&state=123`}
                    >
                        Authenticate with Spotify
                    </a>
                </div>
            ) : (
                <div>
                    <p>Authenticated with Spotify!</p>
                    {/* Render your authenticated content here */}
                    {children}
                </div>
            )}
        </SpotifyApiContext.Provider>
    );
};

export default SpotifyAuthComponent;
