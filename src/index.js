import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import MyCounter from './mycounter';
import { Otsikko } from './sivu';
import { Page } from './page';
import { PowerBI } from './visualisoinnit';
import { Visual } from './visualisoinnit2';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/sivu" element={<Otsikko />} />
        <Route path='visualisoinnit' element={<PowerBI />} />
        <Route path='visualisoinnit2' element={<Visual />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
