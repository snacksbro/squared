import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

//website theme css


import "../src/styletheme/theme/web/assets/css/animate.min.css"

import "../src/styletheme/theme/web/assets/css/fontawesome.min.css"
import "../src/styletheme/theme/web/assets/css/odometer.css"
import "../src/styletheme/theme/web/assets/css/magnific-popup.min.css"
import "../src/styletheme/theme/web/assets/css/slick.min.css"
import "../src/styletheme/theme/web/assets/css/style.css"
import "../src/styletheme/theme/web/assets/css/responsive.css"



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
