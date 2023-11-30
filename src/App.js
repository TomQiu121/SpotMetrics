// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to <strong>Scorify</strong>, where we will tell you your music taste. Click below to get started.
        </p>
        <a
          className="App-button"
          href="https://accounts.spotify.com/en/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login with Spotify
        </a>
        <img src='./CD.webp' alt="Logo" className="App-logo" />
      </header>
    </div>
  );
}

export default App;
