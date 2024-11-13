// src/components/Sidebar.js
import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton, Divider, InputBase, Button, Drawer } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HouseIcon from '@mui/icons-material/House';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';


function Sidebar() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Definición de la función calculateSubtotal
  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.precio * item.quantity, 0);
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
        onClick={toggleDrawer(true)}
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
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>Mi Carrito</Typography>


          {cart.length === 0 ? (
            <>
              <Typography variant="body1" sx={{ color: '#666', mb: 2 }}>Tu carrito está vacío</Typography>

              <Button
                variant="outlined"
                sx={{ width: '100%' }}
                onClick={toggleDrawer(false)} // Cierra el carrito
              >
                SEGUIR COMPRANDO
              </Button>
            </>
          ) : (
            <>
              <List>
                {cart.map((item, index) => (
                  <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={`http://localhost:4000/uploads/${item.imagen}`} alt={item.nombre} style={{ width: 50, height: 50, marginRight: 10 }} />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2">{item.nombre}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>${item.precio.toLocaleString()}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton onClick={() => updateQuantity(item.id_producto, item.quantity - 1)}>-</IconButton>
                      <Typography>{item.quantity}</Typography>
                      <IconButton onClick={() => updateQuantity(item.id_producto, item.quantity + 1)}>+</IconButton>
                    </Box>
                    <IconButton onClick={() => removeFromCart(item.id_producto)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 2 }} />
              <Box sx={{ textAlign: 'left', padding: '0 16px' }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>Subtotal</Typography>
                <Typography variant="body2">${calculateSubtotal().toLocaleString()}</Typography>

                <Typography variant="body2" sx={{ mt: 1 }}>Costo de Envío</Typography>
                <Typography variant="body2" color="text.secondary">Calculado en el checkout</Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Total</Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
                  ${calculateSubtotal().toLocaleString()}
                </Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#7b7b7b',
                  color: '#fff',
                  borderRadius: '20px',
                  mt: 2,
                  padding: '10px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                }}
              >
                IR A PAGAR
              </Button>
            </>
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
