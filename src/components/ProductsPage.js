import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import axios from 'axios';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Cambia la URL para apuntar a la API correcta
    axios.get('http://localhost:4000/api/productos')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error al cargar los productos:', error));
  }, []);

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold', color: '#3a3a3a' }}>
        Muebles
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: 2, color: '#666' }}>
        Mostrando los {products.length} resultados
      </Typography>
      
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id_producto}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={`http://localhost:4000/uploads/${product.imagen}`} // URL para las imágenes
                alt={product.nombre || 'Producto'}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {product.tipo || 'Sin categoría'}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {product.nombre || 'Producto sin nombre'}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                  {product.descripcion || 'Descripción no disponible'}
                </Typography>
                <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                  ${product.precio ? product.precio.toLocaleString() : '0'}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  sx={{ marginTop: 1 }}
                  disabled={!product.stock} // Deshabilita el botón si no hay stock
                >
                  {product.stock ? 'Añadir al carrito' : 'AGOTADO'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductsPage;
