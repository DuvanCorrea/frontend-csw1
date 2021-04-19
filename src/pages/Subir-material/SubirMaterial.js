import React from "react";
import Logo from "../../images/Logo.svg";
import "./SubirMaterial.css";
import NavbarDocente from "../../components/navbar_docente/NavbarDocente";

const SubirMaterial = () => {
  return (
    <>
      <NavbarDocente />
      <div className="contenedor-formulario">
        <form className="browser-default form">
          <img src={Logo} alt="Logo" />
          <p>Subir material diseñado</p>
          <input
            type="text"
            name="nombre_docente"
            className="browser-default input"
            placeholder="Nombre completo"
          />
          <input
            type="text"
            name="titulo_material"
            className="browser-default input"
            placeholder="Nombre / titulo material"
          />
          <input
            type="text"
            name="ano"
            className="browser-default input"
            placeholder="Año"
          />
          <input
            type="text"
            name="ubicacion"
            className="browser-default input"
            placeholder="Ubicación del archvo link / url"
          />
          <button type="submit" className="btn">
            Subir material
          </button>
        </form>
      </div>
    </>
  );
};

export default SubirMaterial;
