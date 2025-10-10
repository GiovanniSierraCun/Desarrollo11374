
import React, { useState } from "react";

const LoginApp = () => {
    // Estados para guardar los valores de los inputs
const [formData, setFormData] = useState({
    email: "",
    password: "",
    });

    //manejador  de  los  cambios en las entradas

    const handleChange=(evento)=>{
        const {name,value}=evento.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    //manejador  del  envio  del formulario
    const handleSubmit=(evento)=>{
        evento.preventDefault(); //evita  el  refresh  de  la  pagina
        console.log("Datos del formulario:");
        console.log("Email:", formData.email);
        console.log("Contraseña:", formData.password);
        alert(`Bienvenido ${formData.email}`);
    };

return (
    <>
    <div>
      <h1>Iniciar Sesión</h1>
      <form className="email-form" onSubmit={handleSubmit}>
           {/* Manejador de cambios en los inputs */}
        <label>
          Email:
          <input type="email" name="email" required  
          onChange={handleChange} // manejador  de  cambios  en  los inputs handleChange con UseState
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" name="password" required 
          onChange={handleChange} // manejador  de  cambios  en  los inputs handleChange con UseState
          />
        </label>
        <br />
        <button type="submit">Iniciar Sesión</button> {/* boton  de  envio  del  formulario */}
      </form>
    </div>
    </>
  );

};
export default LoginApp;