
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Acceuil = React.lazy(() => import('./pages/Acceuil'));
const Apropos = React.lazy(() => import('./pages/Apropos'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Inscription = React.lazy(() => import('./pages/inscri_patient'));
function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Inscription" element={<Inscription />} />
        </Routes>
      </Router>

   
  );
}

export default App;
