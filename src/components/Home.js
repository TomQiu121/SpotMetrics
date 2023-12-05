// Home.js
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import './Home.css';

function Home() {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="Home">
      <header className="Home-header">
        <p>
          Welcome to <strong>Scorify</strong>, where we will tell you your music taste. Click below to get started.
        </p>
        <Button className="Home-button" variant="info" type="submit" onClick={handleLogin}>
          Login to spotify
        </Button>
        <img src='./CD.webp' alt="Logo" className="Home-logo" />
      </header>
    </div>
  );
}

export default Home;
