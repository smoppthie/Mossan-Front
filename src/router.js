// src/router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function RouterConfig({ searchText }) {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />           {/* Ruta de Inicio */}
      <Route path="/products" element={<ProductsPage searchText={searchText} />} /> {/* Ruta de Productos */}
      <Route path="/about" element={<AboutPage />} />        {/* Ruta de Sobre Nosotros */}
      <Route path="/contact" element={<ContactPage />} />    {/* Ruta de Contáctanos */}
    </Routes>
  );
}

export default RouterConfig;
