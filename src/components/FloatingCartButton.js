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
import axios from 'axios';

const FloatingCartButton = () => {
  const { cart, updateQuantity, removeFromCart } = useCart(); // Manejo del carrito
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = (open) => () => {
    setIsCartOpen(open);
  };

  // Calcular el subtotal
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  // Función para iniciar el pago con Webpay
  const handlePay = async () => {
    const total = calculateSubtotal(); // Obtener el total del carrito
    if (total <= 0) {
      alert('El carrito está vacío. Agrega productos antes de realizar el pago.');
      return;
    }

    try {
      // Llamar al backend para iniciar la transacción con Webpay
      const response = await axios.post('http://localhost:4000/api/webpay/init', {
        total,
      });

      // Redirigir al usuario a la URL de Webpay
      const { url, token } = response.data;
      window.location.href = `${url}?token_ws=${token}`;
    } catch (error) {
      console.error('Error al iniciar el pago con Webpay:', error);
      alert('Hubo un problema al iniciar el pago. Intenta nuevamente.');
    }
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
          boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
          fontSize: 24,
          transition: 'transform 0.2s, background-color 0.2s',
          '&:hover': {
            backgroundColor: '#005bb5',
            transform: 'scale(1.1)',
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="32px"
          height="32px"
        >
          <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.11 14c.49 0 .91-.33.98-.81l.54-2.99h8.28l.5 2.82c.12.63.67 1.07 1.3 1.07.73 0 1.34-.61 1.34-1.34 0-.06-.01-.11-.02-.17L17.9 4H4.84L4.06 1H0v2h2l3.6 9.59-.95 5.29c-.09.51.03 1.04.33 1.46.3.42.76.66 1.26.66H20v-2H6.42c-.04 0-.08-.02-.11-.06-.03-.03-.04-.08-.03-.12L7.11 14z" />
        </svg>
      </Button>

      {/* Drawer para el carrito */}
      <Drawer anchor="right" open={isCartOpen} onClose={toggleCart(false)}>
        <Box sx={{ width: 300, padding: 3, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Mi Carrito
          </Typography>

          {cart.length === 0 ? (
            <>
              <Typography variant="body1" sx={{ color: '#666', mb: 2 }}>
                Tu carrito está vacío
              </Typography>
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
                  <ListItem
                    key={index}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
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
                      <IconButton
                        onClick={() =>
                          updateQuantity(item.id_producto, item.quantity - 1)
                        }
                      >
                        -
                      </IconButton>
                      <Typography>{item.quantity}</Typography>
                      <IconButton
                        onClick={() =>
                          updateQuantity(item.id_producto, item.quantity + 1)
                        }
                      >
                        +
                      </IconButton>
                    </Box>
                    <IconButton
                      onClick={() => removeFromCart(item.id_producto)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 2 }} />
              <Box sx={{ textAlign: 'left', padding: '0 16px' }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Subtotal
                </Typography>
                <Typography variant="body2">
                  ${calculateSubtotal().toLocaleString()}
                </Typography>

                <Typography variant="body2" sx={{ mt: 1 }}>
                  Costo de Envío
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Calculado en el checkout
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Total
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 'bold', color: '#333' }}
                >
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
                onClick={handlePay} // Inicia el pago
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
