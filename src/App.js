import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Footer from './components/Footer'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import Team from './components/pages/Team'
import Signup from './components/pages/Signup'
import SignIn from './components/pages/SignIn'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/team' element={<Team />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/sign-in' element={<SignIn />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
