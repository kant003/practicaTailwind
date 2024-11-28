import React from "react";
import "./styles.css";

const FormularioDeRegistro: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulario enviado");
  };

  return (
    <div className="mi-clase">
      <h2 className="titulo">Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div>
          <label htmlFor="apellidos">Apellidos:</label>
          <input type="text" id="apellidos" name="apellidos" required />
        </div>
        <div>
          <label htmlFor="correo">Correo:</label>
          <input type="email" id="correo" name="correo" required />
        </div>
        <div>
          <label htmlFor="contraseña">Contraseña:</label>
          <input type="password" id="contraseña" name="contraseña" required />
        </div>
        <button className="button" type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default FormularioDeRegistro;
