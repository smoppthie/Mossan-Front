// src/components/Sidebar.js
import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton, Divider, InputBase, Button, Drawer } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HouseIcon from '@mui/icons-material/House';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';


function Sidebar() {
  const { cart } = useCart(); // Obtén la lista de productos en la cesta
  const [drawerOpen, setDrawerOpen] = useState(false);
  

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        width: 250,
        bgcolor: '#f0f4e3',
        padding: 2,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mb: 2 }}>
        <HouseIcon sx={{ fontSize: 40, color: '#666', mb: 1 }} />
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: '#333', textAlign: 'center', fontSize: '1.5rem' }}>
          MOSSAN
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#666', textAlign: 'center', fontSize: '0.875rem' }}>
          Tienda de muebles
        </Typography>
        <Divider sx={{ width: '60%', mt: 1, mb: 2, bgcolor: '#666' }} />
      </Box>

      {/* Botón de Cesta */}
      <Button
        variant="contained"
        startIcon={<ShoppingCartIcon />}
        onClick={toggleDrawer(true)} // Abre el Drawer al hacer clic
        sx={{
          backgroundColor: '#ffffff',
          color: '#666',
          borderRadius: 20,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          padding: '5px 15px',
          textTransform: 'none',
          fontWeight: 'bold',
          mb: 3,
          '&:hover': {
            backgroundColor: '#e8e8e8',
          },
        }}
      >
        Cesta
      </Button>

      {/* Drawer para el carrito */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 300, padding: 3, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Mi Carrito</Typography>
          {cart.length === 0 ? (
            <>
              <Typography variant="body1" sx={{ color: '#666', mb: 2 }}>Tu carrito está vacío</Typography>
              <Button variant="outlined" sx={{ mt: 2, mb: 1, width: '100%' }}>TUS FAVORITOS</Button>
              <Button variant="outlined" sx={{ width: '100%' }}>SEGUIR COMPRANDO</Button>
            </>
          ) : (
            <List>
              {cart.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${item.nombre} - $${item.precio.toLocaleString()}`} />
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Drawer>

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
}

export default Sidebar;
