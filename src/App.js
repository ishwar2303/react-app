import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Footer from './components/Footer'
import Services from './components/pages/Services';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
