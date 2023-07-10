import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/modal";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById('root')
);

