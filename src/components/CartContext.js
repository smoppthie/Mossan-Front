import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState('');  // Para manejar las notificaciones
  const [openSnackbar, setOpenSnackbar] = useState(false);  // Para manejar el estado del Snackbar

  const addToCart = (product) => {
    const availableQuantity = product.cantidad;
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id_producto === product.id_producto);
      if (existingProduct) {
        const newQuantity = existingProduct.quantity + 1;
        if (newQuantity > availableQuantity) {
          alert(`No puedes agregar más de ${availableQuantity} unidades de este producto.`);
          return prevCart;
        }
        return prevCart.map((item) =>
          item.id_producto === product.id_producto
            ? { ...item, quantity: newQuantity }
            : item
        );
      } else {
        if (availableQuantity < 1) {
          alert(`Este producto no tiene stock disponible.`);
          return prevCart;
        }
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setNotification(`Producto ${product.nombre} agregado al carrito`); // Mostrar notificación
    setOpenSnackbar(true);  // Abrir la notificación
    setTimeout(() => setOpenSnackbar(false), 3000);  // Limpiar notificación después de 3 segundos
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id_producto !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id_producto === productId ? { ...item, quantity } : item
      )
    );
  };

  const payForCart = async () => {
    try {
      alert('Procesando tu compra...');
      
      // Crear un array con los productos y las cantidades a actualizar
      const productUpdates = cart.map(item => ({
        id_producto: item.id_producto,
        quantity: item.quantity, // Cantidad comprada
      }));
  
      // Enviar los datos al backend para actualizar la cantidad de productos
      const response = await fetch('http://localhost:4000/api/productos/update-quantity', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productUpdates }), // Enviamos el array de productos a actualizar
      });
  
      if (!response.ok) {
        throw new Error('Error al procesar la compra');
      }
  
      setCart([]); // Limpiar el carrito
      alert('Compra realizada con éxito. Los productos han sido descontados del inventario.');
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      alert('Hubo un problema al procesar el pago.');
    }
  };
  

    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, payForCart, notification, openSnackbar, setOpenSnackbar }}>
        {children}
      </CartContext.Provider>
    );
};
