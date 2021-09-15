import React from 'react';
import ReactDOM from 'react-dom';
import * as atatus from 'atatus-spa';
import './index.css';
import App from './App';

atatus.config('2328982937db4a178c5c9e1d6e2affbc').install();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
