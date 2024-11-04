// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Box } from '@mui/material';
import './App.css';

function App() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <MainContent />
    </Box>
  );
}
export default App;
