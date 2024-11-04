// src/components/MainContent.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

function MainContent() {
  const images = [
    'https://cdn.shopify.com/s/files/1/2481/2502/files/mueble_tv_heron_2048x2048.webp?v=1674665197', // Reemplaza con tus URLs de imágenes
    'https://cdn.shopify.com/s/files/1/2481/2502/files/makemba_pino_2048x2048.webp?v=1674665497',
    'https://cdn.shopify.com/s/files/1/0524/7710/0211/files/MG_8725_1024x1024.jpg?v=1680259677',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true);
      }, 500); // Tiempo para el fade-out antes de cambiar la imagen
    }, 2000); // Intervalo de cambio de imagen (5 segundos)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around', // Espaciado entre imagen y texto
        backgroundColor: '#fae5d3',
        padding: 3,
        height: '100vh',
      }}
    >
      {/* Imagen del carrusel con transición de fade */}
      <Box
        component="img"
        src={images[currentImage]}
        alt={`Imagen ${currentImage + 1}`}
        sx={{
          width: '50%', // Ajusta el ancho de la imagen para que ocupe la mitad del espacio
          maxWidth: '500px', // Tamaño máximo para la imagen
          height: 'auto',
          borderRadius: 2,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          opacity: fade ? 1 : 0,
          transition: 'opacity 1s ease-in-out', // Transición suave
          marginRight: 3,
        }}
      />

      {/* Contenido de texto y botón */}
      <Box sx={{ width: '40%', textAlign: 'left' }}> {/* Ajusta el ancho para el texto */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: '#8B4513', // Color marrón cálido
            marginBottom: 1,
          }}
        >
          Muebles acogedores para tu hogar acogedor.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            color: '#5A4A3B',
            marginBottom: 3,
          }}
        >
          Encuentra la pieza perfecta para cada rincón de tu hogar.
        </Typography>

        {/* Botón de llamada a la acción */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#D2691E', // Color cálido para el botón
            color: '#fff',
            padding: '10px 20px',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#A0522D',
            },
          }}
        >
          VER CATALOGO
        </Button>
      </Box>
    </Box>
  );
}

export default MainContent;
