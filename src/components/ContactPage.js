// src/components/ContactPage.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar datos al backend para que envíe el correo electrónico
    axios.post('http://localhost:4000/api/send-email', formData)
      .then((response) => {
        alert('Mensaje enviado exitosamente');
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
      });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>¡Contáctanos!</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          name="name"
          fullWidth
          sx={{ mb: 2 }}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          type="email"
          sx={{ mb: 2 }}
          onChange={handleChange}
          required
        />
        <Typography variant="subtitle1">Estoy interesado/a en:</Typography>
        <RadioGroup name="interest" onChange={handleChange} sx={{ mb: 2 }}>
          <FormControlLabel value="Consulta" control={<Radio />} label="Consulta" />
          <FormControlLabel value="Presupuesto" control={<Radio />} label="Presupuesto" />
          <FormControlLabel value="Reclamo" control={<Radio />} label="Reclamo" />
        </RadioGroup>
        <TextField
          label="Mensaje"
          name="message"
          fullWidth
          multiline
          rows={4}
          sx={{ mb: 2 }}
          onChange={handleChange}
          required
        />
        <Button variant="contained" type="submit">
          Enviar un mensaje
        </Button>
      </form>
    </Box>
  );
}

export default ContactPage;
