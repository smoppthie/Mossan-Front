// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import ContactPage from './components/ContactPage'; // Página de contacto
import HomePage from './components/MainContent'; // Página principal
import ProductsPage from './components/ProductsPage'; // Página de productos
import AboutPage from './components/AboutPage'; // Página acerca de nosotros

import { CartProvider } from './components/CartContext';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState(''); // Estado para la barra de búsqueda

  return (
    <CartProvider>
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <TopBar />
          <Box sx={{ display: 'flex', flex: 1 }}>
            <Sidebar searchText={searchText} setSearchText={setSearchText} /> {/* Pasar el estado de búsqueda */}
            <Box sx={{ flex: 1 }}>
              {/* Definición de las rutas */}
              <Routes>
                <Route path="/" element={<HomePage searchText={searchText} />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/contact" element={<ContactPage />} /> {/* Ruta para ContactPage */}
                <Route path="/about" element={<AboutPage />} /> {/* Ruta para AboutPage */}
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </CartProvider>
  );
}

export default App;
