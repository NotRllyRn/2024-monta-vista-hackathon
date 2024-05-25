import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  App,
  Navigation,
  Menu,
  Psychology,
  Footer
} from "./components";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/psychology" element={<Psychology />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);