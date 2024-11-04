// src/components/Sidebar.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton, Divider, InputBase } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

function Sidebar() {
  return (
    <Box
      sx={{
        width: 250,
        bgcolor: '#f5f5f5',
        padding: 2,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" component="div" gutterBottom>
        MOSSAN
      </Typography>
      <Typography variant="subtitle1">Tienda de muebles</Typography>

      <IconButton sx={{ mt: 2 }} color="inherit">
        <ShoppingCartIcon fontSize="large" />
      </IconButton>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, width: '100%' }}>
        <InputBase placeholder="Buscar" sx={{ ml: 1, flex: 1 }} />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>

      <Divider sx={{ my: 2, width: '100%' }} />

      <List>
        <ListItem button>
          <HomeIcon sx={{ mr: 1 }} />
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Productos" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Sobre nosotros" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contáctanos" />
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
