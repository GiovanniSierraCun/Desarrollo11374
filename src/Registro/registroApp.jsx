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
  const handleSubmit = async (evento) => {
    evento.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`✅ Registro exitoso de ${data.name}`);
        console.log("Usuario guardado:", data);

        // Limpiar formulario
        setFormData({ name: "", email: "", password: "" });
      } else {
        alert(`⚠️ Error al registrar: ${data.error || "Error desconocido"}`);
        console.error("Error en el registro:", data);
      }
    } catch (error) {
      console.error("❌ Error al conectar con el servidor:", error);
      alert("No se pudo conectar con el servidor. Verifica el backend.");
    }
  };

  return (
    <div className="registro-container">
      <h1>Registro</h1>

      <form className="registro-form" onSubmit={handleSubmit}>
        {/* Campo nombre */}
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,30}"
            title="El nombre debe tener entre 3 y 30 letras, sin números ni símbolos."
            required
          />
        </label>
        <br />

        {/* Campo email */}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Debe ser un correo válido, por ejemplo: usuario@dominio.com"
            required
          />
        </label>
        <br />

        {/* Campo contraseña */}
        <label>
          Contraseña:
          <input
          type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
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
