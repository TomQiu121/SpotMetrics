// src/App.js
import React from 'react';
import SpotifyAuth from './components/SpotifyAuth';
import TopTracks from './components/TopTracks';

function App() {
  return (
    <div>
      <h1>Spotify Statistics</h1>
      <SpotifyAuth>
        {/* Components that require authentication */}
        <TopTracks />
      </SpotifyAuth>
    </div>
  );
}

export default App;
