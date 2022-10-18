import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Plan from './pages/Plan';
import Gracias from './pages/Gracias';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/plan" element={<Plan/>}/>
      <Route path="/gracias" element={<Gracias/>}/>
    </Routes>
  </Router>
);
