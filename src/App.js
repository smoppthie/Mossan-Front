// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import RouterConfig from './router';
import { Box } from '@mui/material';
import './App.css';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <TopBar />
        <Box sx={{ display: 'flex', flex: 1 }}>
          <Sidebar />
          <Box sx={{ flex: 1 }}>
            <RouterConfig />
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;


