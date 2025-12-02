import { useState,useEffect } from 'react';

import axios from 'axios';
import Cars from './components';
import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';


import React from 'react'

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}


export default App
