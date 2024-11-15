// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import HomePage from './components/MainContent'; // Ajusta según tu estructura
import ProductsPage from './components/ProductsPage'; // Ajusta según tu estructura
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
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </CartProvider>
  );
}

export default App;
