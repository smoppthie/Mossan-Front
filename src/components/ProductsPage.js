// src/components/ProductsPage.js
import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, Card, CardContent, CardMedia, InputBase } from '@mui/material';
import axios from 'axios';
import { useCart } from './CartContext';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState(''); // Estado para el texto de búsqueda

  useEffect(() => {
    axios.get('http://localhost:4000/api/productos')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error al cargar los productos:', error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  const { addToCart } = useCart();
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.nombre} agregado a la cesta`);
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold', color: '#3a3a3a' }}>
        Muebles
      </Typography>

      {/* Barra de búsqueda */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, width: '100%', bgcolor: '#ffffff', borderRadius: 1, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', padding: '5px 10px' }}>
        <InputBase
          placeholder="Buscar productos por nombre"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} // Actualiza el texto de búsqueda
          sx={{ ml: 1, flex: 1, color: '#666' }}
        />
      </Box>

      <Typography variant="subtitle1" sx={{ marginBottom: 2, color: '#666' }}>
        Mostrando {filteredProducts.length} de {products.length} resultados
      </Typography>
      
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id_producto}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={`http://localhost:4000/uploads/${product.imagen}`}
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
                <Typography variant="body2" color="green" sx={{ marginBottom: 1 }}>
                  Disponible
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  sx={{ marginTop: 1 }}
                  onClick={() => handleAddToCart(product)}
                >
                  Agregar a cesta
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
