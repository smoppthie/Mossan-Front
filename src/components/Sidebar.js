import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Drawer,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import HouseIcon from '@mui/icons-material/House';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function Sidebar({ setProducts }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Función para abrir/cerrar el drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Contenido del Sidebar
  const sidebarContent = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        bgcolor: '#f0f4e3',
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      {/* Encabezado */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          mb: 2,
        }}
      >
        <HouseIcon sx={{ fontSize: 40, color: '#666', mb: 1 }} />
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
            fontSize: '1.5rem',
          }}
        >
          MOSSAN
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: '#666', textAlign: 'center', fontSize: '0.875rem' }}
        >
          Tienda de muebles
        </Typography>
        <Divider sx={{ width: '60%', mt: 1, mb: 2, bgcolor: '#666' }} />
      </Box>

      <Divider sx={{ my: 2, width: '80%' }} />

      {/* Lista de navegación */}
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
        <ListItem button component={Link} to="/about" sx={{ justifyContent: 'center', padding: '10px 0' }}>
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
        <ListItem button component={Link} to="/contact" sx={{ justifyContent: 'center', padding: '10px 0' }}>
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

  return (
    <>
      {/* Botón de menú en vista móvil */}
      <IconButton
        sx={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 1300, // Asegurar que esté encima de otros elementos
          display: { xs: 'block', md: 'none' }, // Visible solo en xs
          backgroundColor: '#333', // Fondo oscuro
          color: '#fff', // Color del ícono
          borderRadius: '50%',
          padding: '8px',
          boxShadow: '0px 4px 8px rgba(0,0,0,0.2)', // Sombra suave
          '&:hover': {
            backgroundColor: '#555',
          },
        }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar fijo en vistas grandes */}
      <Box
        sx={{
          width: 250,
          bgcolor: '#f0f4e3',
          height: '100vh',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      >
        {sidebarContent}
      </Box>

      {/* Drawer en vista móvil */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box sx={{ width: 250 }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ ml: 'auto', display: 'block' }}>
            <CloseIcon />
          </IconButton>
          {sidebarContent}
        </Box>
      </Drawer>
    </>
  );
}

export default Sidebar;
