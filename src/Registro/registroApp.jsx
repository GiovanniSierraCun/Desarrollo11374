import React, { useState } from "react";
import "../Styles/Registro.css";

const RegistApp = () => {
  // Estados para guardar los valores de los inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Manejador de cambios en los inputs
  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejador del envío del formulario
  const handleSubmit = (evento) => {
    evento.preventDefault(); // Evita el refresh de la página
    console.log("Datos del formulario:");
    console.log("Nombre:", formData.name);
    console.log("Email:", formData.email);
    console.log("Contraseña:", formData.password);
    alert(`Registro exitoso de ${formData.name}`);
  };

  return (
    <div className="registro-container">
      <h1>Registro</h1>
      <form className="registro-form" onSubmit={handleSubmit}> 
         {/* Manejador de cambios en los inputs */}
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name} // guarda  el dato de  la  variable name
            onChange={handleChange}
             /* Manejador de cambios en los inputs */
            pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,30}"
            title="El nombre debe tener entre 3 y 30 letras, sin números ni símbolos."
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email} // guarda  el dato de  la  variable email
            onChange={handleChange} // manejador  de  cambios  en  los inputs
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Debe ser un correo válido, por ejemplo: usuario@dominio.com"
            required
          />
        </label>
        <br />

        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={formData.password} // guarda  el dato de  la  variable password
            onChange={handleChange} // manejador  de  cambios  en  los inputs
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número."
            required
          />
        </label>
        <br />
              
        <button type="submit">Registrarse</button> 
      </form>
    </div>
  );
};

export default RegistApp;