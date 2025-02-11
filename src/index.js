import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
