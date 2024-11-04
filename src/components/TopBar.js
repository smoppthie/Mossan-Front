// src/components/TopBar.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function TopBar() {
  return (
    <Box
      sx={{
        bgcolor: '#333',  // Color de fondo oscuro
        color: '#fff',     // Color del texto blanco
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5px 20px',
        fontSize: '0.875rem',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <PhoneIcon sx={{ fontSize: 18, mr: 1 }} />
        <Typography variant="body2">+56 9 2543 5647</Typography>
        <EmailIcon sx={{ fontSize: 18, ml: 2, mr: 1 }} />
        <Typography variant="body2">mossan.ventas@gmail.com</Typography>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ mr: 2 }}>
          Atención soporte disponible todos los días de 9h a 18h.
        </Typography>
        <IconButton size="small" sx={{ color: '#fff' }}>
          <FacebookIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: '#fff' }}>
          <TwitterIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: '#fff' }}>
          <InstagramIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default TopBar;
