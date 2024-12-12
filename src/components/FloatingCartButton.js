import React, { useState } from 'react';
import { useCart } from './CartContext';
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  IconButton,
  Button,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const FloatingCartButton = () => {
  const { cart, updateQuantity, removeFromCart } = useCart(); // Asegúrate de tener estas funciones en tu contexto
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = (open) => () => {
    setIsCartOpen(open);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  return (
    <>
      {/* Botón flotante */}
      <Button
        onClick={toggleCart(true)}
        variant="contained"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          borderRadius: '50%',
          width: 60,
          height: 60,
          backgroundColor: '#007bff',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          fontSize: 24,
        }}
      >
        🛒
      </Button>

      {/* Drawer para el carrito */}
      <Drawer anchor="right" open={isCartOpen} onClose={toggleCart(false)}>
        <Box sx={{ width: 300, padding: 3, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>Mi Carrito</Typography>

          {cart.length === 0 ? (
            <>
              <Typography variant="body1" sx={{ color: '#666', mb: 2 }}>Tu carrito está vacío</Typography>
              <Button
                variant="outlined"
                sx={{ width: '100%' }}
                onClick={toggleCart(false)} // Cierra el carrito
              >
                SEGUIR COMPRANDO
              </Button>
            </>
          ) : (
            <>
              <List>
                {cart.map((item, index) => (
                  <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={`http://localhost:4000/uploads/${item.imagen}`}
                      alt={item.nombre}
                      style={{ width: 50, height: 50, marginRight: 10 }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2">{item.nombre}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        ${item.precio.toLocaleString()}
                      </Typography>
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
    </>
  );
};

export default FloatingCartButton;
