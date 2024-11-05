// src/components/Sidebar.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton, Divider, InputBase, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HouseIcon from '@mui/icons-material/House'; // Icono de casa
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <Box
      sx={{
        width: 250,
        bgcolor: '#f0f4e3', // Fondo claro y cálido
        padding: 2,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Encabezado con icono de casa y texto */}
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mb: 2 }}>
        <HouseIcon sx={{ fontSize: 40, color: '#666', mb: 1 }} /> {/* Icono de casa */}
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: '#333',  // Color del texto
            textAlign: 'center',
            fontSize: '1.5rem',
          }}
        >
          MOSSAN
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: '#666',
            textAlign: 'center',
            fontSize: '0.875rem',
          }}
        >
          Tienda de muebles
        </Typography>
        <Divider sx={{ width: '60%', mt: 1, mb: 2, bgcolor: '#666' }} /> {/* Línea decorativa */}
      </Box>

      {/* Botón de Cesta */}
      <Button
        variant="contained"
        startIcon={<ShoppingCartIcon />}
        sx={{
          backgroundColor: '#ffffff', // Blanco para fondo
          color: '#666', // Gris para el texto
          borderRadius: 20, // Borde redondeado
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Sombra suave
          padding: '5px 15px',
          textTransform: 'none', // Texto sin mayúsculas
          fontWeight: 'bold',
          mb: 3, // Espacio abajo
          '&:hover': {
            backgroundColor: '#e8e8e8',
          },
        }}
      >
        Cesta
      </Button>

      {/* Barra de búsqueda */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
          width: '100%',
          bgcolor: '#ffffff',
          borderRadius: 20,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          padding: '5px 10px',
        }}
      >
        <InputBase
          placeholder="Buscar"
          sx={{ ml: 1, flex: 1, color: '#666' }}
        />
        <IconButton type="submit" aria-label="search" sx={{ color: '#666' }}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Divider sx={{ my: 2, width: '80%' }} />

      {/* Lista de navegación con enlaces */}
      <List sx={{ width: '100%', textAlign: 'center' }}>
        <ListItem button component={Link} to="/" sx={{ justifyContent: 'center', padding: '10px 0' }}>
          <HomeIcon sx={{ mr: 1, color: '#666' }} />
          <ListItemText
            primary="Inicio"
            primaryTypographyProps={{
              sx: {
                fontWeight: 'bold',
                fontSize: '1rem',
                color: '#666',
              },
            }}
          />
        </ListItem>
        <ListItem button component={Link} to="/products" sx={{ justifyContent: 'center', padding: '10px 0' }}>
  <ListItemText
    primary="Productos"
    primaryTypographyProps={{
      sx: {
        fontWeight: 'bold',
        fontSize: '1rem',
        color: '#666',
      },
    }}
  />
</ListItem>
        <ListItem button sx={{ justifyContent: 'center', padding: '10px 0' }}>
          <ListItemText
            primary="Sobre nosotros"
            primaryTypographyProps={{
              sx: {
                fontWeight: 'bold',
                fontSize: '1rem',
                color: '#666',
              },
            }}
          />
        </ListItem>
        <ListItem button sx={{ justifyContent: 'center', padding: '10px 0' }}>
          <ListItemText
            primary="Contáctanos"
            primaryTypographyProps={{
              sx: {
                fontWeight: 'bold',
                fontSize: '1rem',
                color: '#666',
              },
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
