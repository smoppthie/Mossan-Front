// src/components/ContactPage.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, RadioGroup, FormControlLabel, Radio, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

function ContactPage() {
  // Definir el estado para todos los campos (sin 'telefono')
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipo: '',
    mensaje: '',  // Mantener solo los campos relevantes
  });

  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Asegurémonos de que 'telefono' no esté en el objeto 'formData'
    const { nombre, email, tipo, mensaje } = formData;
    const dataToSend = { nombre, email, tipo, mensaje };

    // Imprimir el objeto dataToSend para asegurarse de que no incluya 'telefono'
    console.log('Data to send:', dataToSend); // Verificar que 'telefono' no está aquí

    // Enviar los datos al backend
    axios.post('http://localhost:4000/api/contacto', dataToSend)
      .then((response) => {
        console.log('Server response:', response);  // Verifica lo que el servidor está devolviendo
        if (response.status === 200 || response.status === 201) {
          setIsSuccess(true);
          setMessage('Mensaje enviado exitosamente. ¡Gracias por contactarnos!');
          // Limpiar el formulario después de enviar correctamente
          setFormData({ nombre: '', email: '', tipo: '', mensaje: '' });
        } else {
          setIsSuccess(false);
          setMessage('Hubo un problema con la respuesta del servidor. Por favor, inténtalo nuevamente.');
        }
        setIsSubmitting(false);
        setOpenSnackbar(true);

        // Cerrar el Snackbar después de 4 segundos
        setTimeout(() => setOpenSnackbar(false), 4000);
      })
      .catch((error) => {
        console.log('Error during message submission:', error.response ? error.response.data : error);  // Verifica el error
        setIsSuccess(false);
        setMessage('Error al enviar el mensaje. Por favor, inténtalo nuevamente.');
        setIsSubmitting(false);
        setOpenSnackbar(true);

        // Cerrar el Snackbar después de 4 segundos
        setTimeout(() => setOpenSnackbar(false), 4000);
      });
  };

  return (
    <Box sx={{ marginLeft: { md: 35 }, display: 'flex', flexDirection: 'column', padding: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>¡Contáctanos!</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          name="nombre"
          fullWidth
          sx={{ mb: 2 }}
          onChange={handleChange}
          value={formData.nombre}
          required
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          type="email"
          sx={{ mb: 2 }}
          onChange={handleChange}
          value={formData.email}
          required
        />
        <Typography variant="subtitle1" sx={{ mt: 2 }}>Estoy interesado/a en:</Typography>
        <RadioGroup name="tipo" onChange={handleChange} value={formData.tipo} sx={{ mb: 2 }}>
          <FormControlLabel value="consulta" control={<Radio />} label="Consulta" />
          <FormControlLabel value="presupuesto" control={<Radio />} label="Presupuesto" />
          <FormControlLabel value="reclamo" control={<Radio />} label="Reclamo" />
        </RadioGroup>
        <TextField
          label="Mensaje"
          name="mensaje"
          fullWidth
          multiline
          rows={4}
          sx={{ mb: 2 }}
          onChange={handleChange}
          value={formData.mensaje}
          required
        />
        <Button variant="contained" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar un mensaje'}
        </Button>
      </form>

      {/* Snackbar para mostrar mensaje de éxito o error */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity={isSuccess ? 'success' : 'error'}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ContactPage;
