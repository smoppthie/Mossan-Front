// src/components/AboutPage.js
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function AboutPage() {
  return (
    <Box sx={{ padding: 3, backgroundColor: '#f0f4e3', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold', color: '#3a3a3a' }}>
        ¿Quiénes somos?
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 3, color: '#333' }}>
      ¡Somos MOSSAN, llevamos más de 5 años transformando hogares con pasión y dedicación desde el corazón de Limache Viejo! Cada mueble que creamos es un reflejo de nuestro compromiso con la calidad y el estilo que mereces.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 5, color: '#666' }}>
      Nuestra pasión por crear muebles únicos y de calidad nos ha acompañado durante más de 5 años en el corazón de Limache Viejo, en la hermosa región de Valparaíso. Nos enorgullece ser parte de esta comunidad, transformando espacios y llevando calidez y estilo a cada hogar con piezas que reflejan nuestra dedicación y amor por el diseño. Gracias a la confianza de nuestros clientes, seguimos creciendo y creando, siempre con el compromiso de ofrecer lo mejor en cada detalle.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <BadgeIcon sx={{ fontSize: 40, color: '#666' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
              Compromiso 
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', textAlign: 'center' }}>
            En Mossan, estamos comprometidos con mejorar la calidad de vida de nuestra comunidad, ofreciendo muebles de alta calidad y durabilidad que contribuyen al bienestar de los hogares y espacios de trabajo. Nos esforzamos en utilizar materiales sostenibles y en minimizar nuestro impacto ambiental, mientras apoyamos programas locales de desarrollo y capacitación. Creemos que un hogar bien amueblado es el primer paso hacia una vida más cómoda y digna, y trabajamos cada día para hacer realidad ese ideal en cada rincón de nuestra comunidad.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <CalendarTodayIcon sx={{ fontSize: 40, color: '#666' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
              Seguridad
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', textAlign: 'center' }}>
            En Mossan, nos comprometemos a ofrecer una experiencia de compra segura y confiable para nuestra comunidad. Contamos con métodos de pago protegidos y verificados que garantizan la seguridad de cada transacción. Además, nos esforzamos por asegurar que cada envío llegue en óptimas condiciones, con procesos de embalaje y transporte cuidadosamente supervisados. Queremos que nuestros clientes tengan la tranquilidad de que su compra está protegida en cada paso del camino, desde el momento del pago hasta la entrega en su hogar.
            </Typography>
          </Box>
        </Grid>
        {/* Agrega más servicios según sea necesario */}
      </Grid>
    </Box>
  );
}

export default AboutPage;
