// src/router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage'; // Importa el componente de "Sobre Nosotros"

const RouterConfig = () => (
  <Routes>
    <Route path="/" element={<MainContent />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/about" element={<AboutPage />} /> {/* Ruta para AboutPage */}
  </Routes>
);

export default RouterConfig;
