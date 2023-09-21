import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const root = document.getElementById('root');
const appRoot = ReactDOM.createRoot(root);

appRoot.render(
  <Router>
    <App />
    <ToastContainer/>
  </Router>
);
