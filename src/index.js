import React from 'react';
import { createRoot } from 'react-dom';
import AppRouter from './router/AppRouter.js'

import './styles.css';

const jsx = (
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

const root = document.getElementById('root');
const rootContainer = createRoot(root);
rootContainer.render(jsx);
