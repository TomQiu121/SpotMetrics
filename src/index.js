import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter.js'

import './styles.css';

const jsx = (
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

ReactDOM.render(jsx, document.getElementById('root'));
