import React, { Fragment, useState } from 'react';
import Logo from "../../images/Logo.svg";
import uuid from 'uuid/dist/v4';
import "./SubirMaterial.css";
import NavbarDocente from "../../components/navbar_docente/NavbarDocente";

const SubirMaterial = () => {

  //Creo state de material
  const [material, actualizarMaterial] = useState({
    nombre_docente: '',
    titulo_material: '',
    ano: '',
    ubicacion: ''
  });

  const [error, actualizarError] = useState(false);

  //Función que se ejecuta cada que el usuario escribe en un input
  const handleChange = e => {
    actualizarMaterial({
      ...material, 
      [e.target.name]: e.target.value
    })
  }

  //Extraer datos y darle el avlor al input
  const {nombre_docente, titulo_material, ano, ubicacion} = material;

  //Cuando el docente presiona agregar cita
  const SubmitMaterial = e => {
    e.preventDefault();

    // Validacion
    if(nombre_docente.trim()=='' || titulo_material.trim()=='' || ano.trim()=='' || ubicacion.trim()==''){
      actualizarError(true);
      return;
    }

    //eliminar mensaje de error
    actualizarError(false);
    
    // Asignar un ID
    material.id = uuid();

    // Reiniciar el formulario
    

  }

  return (
    <>
      <NavbarDocente />
      <div className="contenedor-formulario">
        <form
        onSubmit={SubmitMaterial} 
        className="browser-default form"
        >
          <img src={Logo} alt="Logo" />
          <p>Subir material diseñado</p>
          <input
            type="text"
            name="nombre_docente"
            className="browser-default input"
            placeholder="Nombre completo"
            onChange={handleChange}
            value={nombre_docente}
          />
          <input
            type="text"
            name="titulo_material"
            className="browser-default input"
            placeholder="Nombre / titulo material"
            onChange={handleChange}
            value={titulo_material}
          />
          <input
            type="text"
            name="ano"
            className="browser-default input"
            placeholder="Año"
            onChange={handleChange}
            value={ano}
          />
          <input
            type="text"
            name="ubicacion"
            className="browser-default input"
            placeholder="Ubicación del archvo link / url"
            onChange={handleChange}
            value={ubicacion}
          />
          <button type="submit" className="btn">
            Subir material
          </button>
          {error ? <p>Debes llenar todos los campos</p>:null}
        </form>
      </div>
    </>
  );
};

export default SubirMaterial;
