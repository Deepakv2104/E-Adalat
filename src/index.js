import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';




import { BrowserRouter as Router } from 'react-router-dom'; // Import the appropriate router
import { ToastContainer } from 'react-toastify';


ReactDOM.render(
  <Router>
    <App />
    <ToastContainer/>
  </Router>,
  
  document.getElementById('root')
);

