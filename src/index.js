import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Gracias from './components/Gracias';
import Plan from './components/Plan';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/plan" element={<Plan/>}/>
      <Route path="/gracias" element={<Gracias/>}/>
    </Routes>
  </Router>
);
