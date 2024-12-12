import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Slider,
  Select,
  MenuItem,
  InputBase,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useCart } from './CartContext';

function ProductsPage() {
  const [products, setProducts] = useState([]); // Todos los productos
  const [filteredProducts, setFilteredProducts] = useState([]); // Productos filtrados
  const [searchText, setSearchText] = useState(''); // Barra de búsqueda
  const [priceRange, setPriceRange] = useState([0, 100000]); // Rango de precios
  const [material, setMaterial] = useState(''); // Material
  const [tipo, setTipo] = useState(''); // Tipo
  const [color, setColor] = useState(''); // Color
  const { addToCart } = useCart(); // Manejo del carrito

  // Cargar productos desde la API al montar el componente
  useEffect(() => {
    axios
      .get('http://localhost:4000/api/productos')
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Inicialmente todos los productos
      })
      .catch((error) => console.error('Error al cargar los productos:', error));
  }, []);

  // Filtrar productos dinámicamente
  // Filtrar productos dinámicamente
  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.nombre?.toLowerCase().includes(searchText.toLowerCase()) || false;
      const matchesPrice =
        product.precio >= priceRange[0] && product.precio <= priceRange[1];
      const matchesMaterial =
        !material || product.material?.toLowerCase() === material.toLowerCase();
      const matchesTipo =
        !tipo || product.tipo?.toLowerCase() === tipo.toLowerCase();
      const matchesColor =
        !color || product.color?.toLowerCase() === color.toLowerCase();

      return (
        matchesSearch && matchesPrice && matchesMaterial && matchesTipo && matchesColor
      );
    });
    setFilteredProducts(filtered);
  }, [searchText, priceRange, material, tipo, color, products]);


  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.nombre} agregado a la cesta`);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue); // Actualizar rango de precios
  };

  const handleMaterialChange = (event) => {
    setMaterial(event.target.value); // Actualizar material
  };

  const handleTipoChange = (event) => {
    setTipo(event.target.value); // Actualizar tipo
  };

  const handleColorChange = (event) => {
    setColor(event.target.value); // Actualizar color
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value); // Actualizar texto de búsqueda
  };

  return (
    <Box sx={{  marginLeft: { md: 35 }, padding: 3, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Título de la página */}
      <Typography
        variant="h4"
        sx={{
          marginBottom: 3,
          fontWeight: 'bold',
          color: '#3a3a3a',
          textAlign: 'center',
        }}
      >
        Productos Disponibles
      </Typography>

      {/* Barra de búsqueda */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 3,
          padding: '5px 10px',
          bgcolor: '#ffffff',
          borderRadius: 2,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <InputBase
          placeholder="Buscar productos por nombre..."
          value={searchText}
          onChange={handleSearchChange} // Actualiza el texto de búsqueda
          sx={{
            flex: 1,
            padding: '8px',
            fontSize: '1rem',
            color: '#666',
          }}
        />
        <IconButton sx={{ color: '#666' }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Filtros */}
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
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Filtro de precio */}
        <Box sx={{ width: 300, mr: 4 }}> {/* Aplica margen derecho */}
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
            padding: '1px 5px',
            color: '#666',
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
            padding: '1px 5px',
            color: '#666',
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
            padding: '1px 5px',
            color: '#666',
          }}
        >
          <MenuItem value="">Color</MenuItem>
          <MenuItem value="Negro">Negro</MenuItem>
          <MenuItem value="Blanco">Blanco</MenuItem>
          <MenuItem value="Marrón">Marrón</MenuItem>
        </Select>
      </Box>

      {/* Subtítulo con el conteo de productos */}
      <Typography
        variant="subtitle1"
        sx={{ marginBottom: 2, color: '#666', textAlign: 'center' }}
      >
        Mostrando {filteredProducts.length} de {products.length} productos
      </Typography>

      {/* Grid de productos */}
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id_producto}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                },
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
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: 1 }}
                >
                  {product.descripcion || 'Descripción no disponible'}
                </Typography>
                <Typography
                  variant="h5"
                  color="primary"
                  sx={{ fontWeight: 'bold' }}
                >
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
