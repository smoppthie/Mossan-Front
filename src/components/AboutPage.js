import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function AboutPage() {
  return (
    <Box
      sx={{
        marginTop: 4,
        marginLeft: { md: 35 }, 
        padding: 4,
        background: 'linear-gradient(135deg,rgb(255, 255, 255),rgb(187, 222, 168))', // Fondo degradado llamativo
        minHeight: '100vh',
        color: '#333', // Asegúrate de que el texto sea legible
      }}
    >
      <Typography
        variant="h4"
        sx={{ marginBottom: 3, fontWeight: 'bold', color: '#2d2d2d', textAlign: 'center' }}
      >
        ¿Quiénes somos?
      </Typography>
      <Typography
        variant="h6"
        sx={{ marginBottom: 3, color: '#444', textAlign: 'center', maxWidth: '800px', marginX: 'auto' }}
      >
        ¡Somos MOSSAN, llevamos más de 5 años transformando hogares con pasión y dedicación desde el corazón de Limache Viejo! Cada mueble que creamos es un reflejo de nuestro compromiso con la calidad y el estilo que mereces.
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: 5, color: '#555', textAlign: 'center', maxWidth: '800px', marginX: 'auto', lineHeight: 1.8 }}
      >
        Nuestra pasión por crear muebles únicos y de calidad nos ha acompañado durante más de 5 años en el corazón de Limache Viejo, en la hermosa región de Valparaíso. Nos enorgullece ser parte de esta comunidad, transformando espacios y llevando calidez y estilo a cada hogar con piezas que reflejan nuestra dedicación y amor por el diseño. Gracias a la confianza de nuestros clientes, seguimos creciendo y creando, siempre con el compromiso de ofrecer lo mejor en cada detalle.
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 3,
              backgroundColor: '#ffffff',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              textAlign: 'center',
              height: '100%',
            }}
          >
            <BadgeIcon sx={{ fontSize: 50, color: '#007bff', marginBottom: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1, color: '#333' }}>
              Compromiso
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
              En Mossan, estamos comprometidos con mejorar la calidad de vida de nuestra comunidad, ofreciendo muebles de alta calidad y durabilidad que contribuyen al bienestar de los hogares y espacios de trabajo. Nos esforzamos en utilizar materiales sostenibles y en minimizar nuestro impacto ambiental, mientras apoyamos programas locales de desarrollo y capacitación.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 3,
              backgroundColor: '#ffffff',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              textAlign: 'center',
              height: '100%',
            }}
          >
            <CalendarTodayIcon sx={{ fontSize: 50, color: '#007bff', marginBottom: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1, color: '#333' }}>
              Seguridad
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
              En Mossan, nos comprometemos a ofrecer una experiencia de compra segura y confiable para nuestra comunidad. Contamos con métodos de pago protegidos y verificados que garantizan la seguridad de cada transacción. Además, nos esforzamos por asegurar que cada envío llegue en óptimas condiciones.
            </Typography>
          </Box>
        </Grid>
        {/* Puedes añadir más tarjetas con el mismo diseño */}
      </Grid>
    </Box>
  );
}

export default AboutPage;

