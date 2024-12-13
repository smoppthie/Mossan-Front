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
        position: 'fixed', // Fijar la barra superior
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1300,
        bgcolor: '#333',
        color: '#fff',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: { xs: 'center', sm: 'space-between' },
        padding: { xs: '10px', sm: '5px 20px' },
        fontSize: '0.875rem',
        textAlign: { xs: 'center', sm: 'left' },
      }}
      
    >
      {/* Información de contacto */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap', // Ajusta las filas si es necesario
          justifyContent: { xs: 'center', sm: 'flex-start' },
          marginBottom: { xs: '10px', sm: '0' }, // Margen inferior en móviles
        }}
      >
        <PhoneIcon sx={{ fontSize: 18, mr: 1 }} />
        <Typography variant="body2">+56 9 2543 5647</Typography>
        <EmailIcon sx={{ fontSize: 18, ml: { xs: 1, sm: 2 }, mr: 1 }} />
        <Typography variant="body2">mossan.ventas@gmail.com</Typography>
      </Box>

      {/* Redes sociales y horario */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'flex-end' },
          flexWrap: 'wrap', // Ajusta las filas si es necesario
          textAlign: { xs: 'center', sm: 'right' },
        }}
      >
        <Typography variant="body2" sx={{ mr: { xs: 0, sm: 2 }, mb: { xs: 1, sm: 0 } }}>
          Atención soporte disponible todos los días de 9h a 18h.
        </Typography>
        <IconButton size="small" sx={{ color: '#fff', mx: 0.5 }}>
          <FacebookIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: '#fff', mx: 0.5 }}>
          <TwitterIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ color: '#fff', mx: 0.5 }}>
          <InstagramIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default TopBar;
