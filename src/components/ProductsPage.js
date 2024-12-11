import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, Card, CardContent, CardMedia, Slider, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { useCart } from './CartContext';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [material, setMaterial] = useState('');
  const [tipo, setTipo] = useState('');
  const [color, setColor] = useState('');
  const { addToCart, setOpenSnackbar } = useCart();

  // Cargar los productos desde la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/productos', {
          params: {
            minPrice: priceRange[0],
            maxPrice: priceRange[1],
            material: material,
            tipo: tipo,
            color: color
          }
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      }
    };

    fetchProducts();
  }, [priceRange, material, tipo, color]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setOpenSnackbar(true);
  };


  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleMaterialChange = (event) => {
    setMaterial(event.target.value);
  };

  const handleTipoChange = (event) => {
    setTipo(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold', color: '#3a3a3a', textAlign: 'center' }}>
        Muebles
      </Typography>

      {/* Filtros compactos */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 3,
          padding: 2,
          backgroundColor: '#ffffff',
          borderRadius: 2,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Filtro de precio */}
        <Box sx={{ width: 200 }}>
          <Typography variant="caption" sx={{ color: '#666' }}>
            Rango de precios
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={100000}
            step={1000}
          />
        </Box>

        {/* Filtro de material */}
        <Select
          value={material}
          onChange={handleMaterialChange}
          displayEmpty
          sx={{
            minWidth: 150,
            bgcolor: '#f9f9f9',
            borderRadius: 1,
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '5px 10px',
            color: '#666'
          }}
        >
          <MenuItem value="">Material</MenuItem>
          <MenuItem value="Madera">Madera</MenuItem>
          <MenuItem value="Metal">Metal</MenuItem>
          <MenuItem value="Plástico">Plástico</MenuItem>
        </Select>

        {/* Filtro de tipo */}
        <Select
          value={tipo}
          onChange={handleTipoChange}
          displayEmpty
          sx={{
            minWidth: 150,
            bgcolor: '#f9f9f9',
            borderRadius: 1,
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '5px 10px',
            color: '#666'
          }}
        >
          <MenuItem value="">Tipo</MenuItem>
          <MenuItem value="Silla">Silla</MenuItem>
          <MenuItem value="Mesa">Mesa</MenuItem>
          <MenuItem value="Sofá">Sofá</MenuItem>
        </Select>

        {/* Filtro de color */}
        <Select
          value={color}
          onChange={handleColorChange}
          displayEmpty
          sx={{
            minWidth: 150,
            bgcolor: '#f9f9f9',
            borderRadius: 1,
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '5px 10px',
            color: '#666'
          }}
        >
          <MenuItem value="">Color</MenuItem>
          <MenuItem value="Negro">Negro</MenuItem>
          <MenuItem value="Blanco">Blanco</MenuItem>
          <MenuItem value="Marrón">Marrón</MenuItem>
        </Select>
      </Box>

      <Typography variant="subtitle1" sx={{ marginBottom: 2, color: '#666', textAlign: 'center' }}>
        Mostrando {products.length} productos
      </Typography>

      {/* Grid de productos */}
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id_producto}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }
              }}
            >
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
