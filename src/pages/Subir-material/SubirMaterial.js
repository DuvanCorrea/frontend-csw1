import React, { useState } from 'react';
import Logo from "../../images/Logo.svg";
import "./SubirMaterial.css";
import NavbarDocente from "../../components/navbar_docente/NavbarDocente";

import docenteContext from "../../context/docenteContext"
import { useContext } from 'react';
import { useHistory } from 'react-router';
import postMaterial from '../../servicios/postMaterial';
import postDocumento from '../../servicios/postReconocimiento';

const SubirMaterial = () => {

  const { docente } = useContext(docenteContext)
  const history = useHistory()
  const [a, setA] = useState()

  //Creo state de material
  const [material, actualizarMaterial] = useState({
    titulo_material: '',
    materialDoc: "",
    fecha_material: ""
  });

  const [error, actualizarError] = useState(false);

  //Función que se ejecuta cada que el usuario escribe en un input
  const handleChange = e => {

    if (e.target.files) {

      const aux = new FormData()
      aux.append("material", e.target.files[0])

      setA(aux)

    } else {

      actualizarMaterial({
        ...material,
        [e.target.name]: e.target.value
      })

    }
  }

  //Extraer datos y darle el avlor al input
  const { titulo_material, fecha_material, materialDoc } = material;

  //Cuando el docente presiona agregar cita
  const SubmitMaterial = e => {
    e.preventDefault();

    // Validacion
    if (titulo_material.trim() === '' || fecha_material.trim() === '' || materialDoc.trim() === '') {
      actualizarError(true);
      return;
    }

    //eliminar mensaje de error
    actualizarError(false);

  }

  // Enviar formularo al back
  // ------------------------
  const handleSubmit = () => {

    if (error === false) {
      // se contruye el objeto a enviar
      // ------------------------------

      const nuevoMaterial = {
        titulo_material: titulo_material,
        material: a,
        fecha_material: fecha_material,
        DOCENTES_id_docente: docente.id,
        publicado: true
      }

      const aux = async () => {
        const { data } = await postMaterial({ datos: nuevoMaterial })
        postDocumento({ id_material: data.id, material: a })
      }
      aux()
    } else {
      alert("error en true")
    }

  }

  if (docente === null || docente === undefined) {
    history.push("/Docente/Login_U")
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
            name="titulo_material"
            className="browser-default input"
            placeholder="Nombre / titulo material"
            onChange={handleChange}
            value={titulo_material}
          />
          <input
            type="date"
            name="fecha_material"
            className="browser-default input"
            placeholder="Fecha del material"
            onChange={handleChange}
            value={fecha_material}
          />
          <input
            type="file"
            name="materialDoc"
            className="browser-default input"
            placeholder="Ubicación del archvo link / url"
            onChange={handleChange}
          />
          <button onClick={() => {
            handleSubmit()
          }} type="submit" className="btn">
            Subir material
          </button>
          {error ? <p>Debes llenar todos los campos</p> : null}
        </form>
      </div>
    </>
  );
};

export default SubirMaterial;
