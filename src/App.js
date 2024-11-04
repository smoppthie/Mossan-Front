// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import TopBar from './components/TopBar';
import { Box } from '@mui/material';
import './App.css';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TopBar /> {/* Barra superior */}
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <MainContent />
      </Box>
    </Box>
  );
}

export default App;
