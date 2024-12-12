import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  InputBase,
  Drawer,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HouseIcon from '@mui/icons-material/House';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Sidebar({ setProducts }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  // Función para abrir/cerrar el sidebar
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Función para manejar cambios en la barra de búsqueda
  const handleSearchChange = async (event) => {
    const value = event.target.value;
    setSearchText(value);

    if (!value.trim()) {
      setProducts([]); // Limpiar resultados
      return;
    }

    try {
      const response = await axios.get('http://localhost:4000/api/productos', {
        params: { search: value },
      });
      setProducts(response.data); // Actualizar productos
    } catch (error) {
      console.error('Error al buscar productos:', error);
    }
  };


  return (
    <>
      {/* Botón de menú para pantallas pequeñas */}
      <IconButton
        sx={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 1200,
          display: { xs: 'block', md: 'none' },
        }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar principal */}
      <Box
        sx={{
          width: { xs: '100%', md: 250 },
          bgcolor: '#f0f4e3',
          padding: 2,
          height: '100vh',
          position: { xs: 'fixed', md: 'sticky' },
          top: 0,
          left: 0,
          zIndex: 1100,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
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

        {/* Barra de búsqueda */}
        <Box sx={{ width: '100%', mb: 2 }}>
          <InputBase
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Buscar productos..."
            sx={{
              width: '100%',
              padding: '8px 10px',
              borderRadius: 20,
              border: '1px solid #ccc',
              backgroundColor: '#fff',
              fontSize: '1rem',
            }}
            startAdornment={<SearchIcon sx={{ color: '#666', mr: 1 }} />}
          />
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

      {/* Drawer para pantallas pequeñas */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <IconButton
            sx={{ alignSelf: 'flex-end' }}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon />
          </IconButton>
          {/* Contenido del Drawer (Sidebar compacto para móvil) */}
          {/* Puedes reutilizar los mismos elementos del sidebar principal */}
        </Box>
      </Drawer>
    </>
  );
}

export default Sidebar;
