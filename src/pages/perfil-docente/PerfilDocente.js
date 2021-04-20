import React, { useState } from "react";
import NavbarDocente from "../../components/navbar_docente/NavbarDocente";
import UsuarioIcon from "../../images/UsuarioIcon.svg";
import "./PerfilDocente.css";

function PerfilDocente() {
  // Arreglo de materiales
  const [materiales, guardarMateriales] = useState([]);

  // Funcion que tome el material actual y guarde el nuevo
  const crearMaterial = (material) => {
    console.log(material);
  };

  return (
    <>
      <NavbarDocente />
      <div className="contenedor-perfil">
        
        <div className="contenedor-perfil-docente">
          <h2 className="titulos-perfil">Perfil docente</h2>
          <img src={UsuarioIcon} alt="Logo" />
          <p>Nombre: Jose Maria Castaño</p>
          <p>Materia: Ciencisas Siciales</p>
          <p>Enforque material: Animales</p>
          <p></p>
        </div>

        <div className="contenedor-materiales">
          <h2>Materiales diseñados</h2>
        </div>

        <div className="contenedor-reconocimientos">
          <h2>Reconocimientos</h2>
        </div>
      </div>
    </>
  );
}

export default PerfilDocente;
