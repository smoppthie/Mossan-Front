// src/router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import ProductsPage from './components/ProductsPage';

const RouterConfig = () => (
  <Routes>
    <Route path="/" element={<MainContent />} />
    <Route path="/products" element={<ProductsPage />} />
  </Routes>
);

export default RouterConfig;
