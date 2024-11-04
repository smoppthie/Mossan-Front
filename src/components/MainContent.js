// src/components/MainContent.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function MainContent() {
  return (
    <Box sx={{ display: 'flex', flex: 1, padding: 3 }}>
      <Box
        component="img"
        src="https://via.placeholder.com/600x400"
        alt="Muebles acogedores"
        sx={{ width: '50%', borderRadius: 2, marginRight: 3 }}
      />
      <Box sx={{ flex: 1 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Muebles acogedores para tu hogar acogedor.
        </Typography>
        <Typography variant="body1" paragraph>
          Encuentra la pieza perfecta para cada rincón de tu hogar.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Comprar ahora
        </Button>
      </Box>
    </Box>
  );
}

export default MainContent;
