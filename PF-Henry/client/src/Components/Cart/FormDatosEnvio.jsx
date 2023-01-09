import React, { useState } from 'react';

const FormularioEnvio = () => {
  // Establecer el estado inicial del formulario
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    adress: '',
    city: '',
    province: '',
    country: '',
    zip: ''
  });

  // Método para manejar los cambios en cada campo del formulario
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  // Método para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar los datos del formulario a tu servidor o realizar cualquier otra acción
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre Completo:
        <input
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Dirección:
        <input
          required
          type="text"
          name="adress"
          value={formData.adress}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        País:
        <input
          required
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Provincia:
        <input
          required
          type="text"
          name="province"
          value={formData.province}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Ciudad:
        <input
          required
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Código postal:
        <input
          required
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Número telefónico:
        <input
          required
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Pagar</button>
    </form>
  );
};

export default FormularioEnvio;
