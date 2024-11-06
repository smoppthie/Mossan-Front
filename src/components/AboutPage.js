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
        Nuestra empresa mueblista MOSSAN, ubicada en Limache Viejo, región de Valparaíso, cuenta ya con más de 5 años de antigüedad.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 5, color: '#666' }}>
        Somos una familia con el objetivo de brindarte el espacio más óptimo para tu hogar.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <BadgeIcon sx={{ fontSize: 40, color: '#666' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
              Primer servicio
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', textAlign: 'center' }}>
              Haz clic aquí y empieza a escribir. Ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <CalendarTodayIcon sx={{ fontSize: 40, color: '#666' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
              Segundo servicio
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', textAlign: 'center' }}>
              Haz clic aquí y empieza a escribir. Illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos et accusamus et.
            </Typography>
          </Box>
        </Grid>
        {/* Agrega más servicios según sea necesario */}
      </Grid>
    </Box>
  );
}

export default AboutPage;
