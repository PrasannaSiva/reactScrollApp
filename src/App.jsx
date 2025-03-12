import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header.jsx';
import Products from './components/Products.jsx';
import ProductDetail from './components/ProductDetails.jsx';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Header />
            <Products />
          </div>
        } />
        <Route path="/product/:id" element={
          <ProductDetail />
          } />
      </Routes>
    </Router>
  );
}

export default App
