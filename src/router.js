// src/router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage'; // Importa ContactPage

const RouterConfig = () => (
  <Routes>
    <Route path="/" element={<MainContent />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} /> {/* Nueva ruta para ContactPage */}
  </Routes>
);

export default RouterConfig;
