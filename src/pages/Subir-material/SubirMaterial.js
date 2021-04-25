import NavbarDocente from "../../components/navbar_docente/NavbarDocente";
import postDocumento from '../../servicios/postReconocimiento';
import docenteContext from "../../context/docenteContext";
import Cargando from "../../components/cargando/cargando";
import postMaterial from '../../servicios/postMaterial';
import { useHistory } from 'react-router';
import Logo from "../../images/Logo.svg";
import React, { useState } from 'react';
import { useContext } from 'react';
import "./SubirMaterial.css";

const SubirMaterial = () => {

  // Variables
  // ---------
  const [cargando, setCargando] = useState(false);
  const { docente } = useContext(docenteContext);
  const [error, actualizarError] = useState();
  const history = useHistory()
  const [a, setA] = useState()

  //Creo state de material
  const [material, actualizarMaterial] = useState({
    titulo_material: '',
    fecha_material: ""
  });

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

  //Cuando el docente presiona agregar cita
  const SubmitMaterial = e => {
    e.preventDefault();
  }

  // Enviar formularo al back
  // ------------------------
  const handleSubmit = () => {

    // Validacion
    if (material.titulo_material.trim() === ''
      || material.fecha_material.trim() === ''
      || a === null
      || a === undefined) {
      actualizarError(true);
    } else {
      actualizarError(false);
    }

    if (error === false) {
      setCargando(true)
      // se contruye el objeto a enviar
      // ------------------------------
      const nuevoMaterial = {
        titulo_material: material.titulo_material,
        material: a,
        fecha_material: material.fecha_material,
        DOCENTES_id_docente: docente.id,
        publicado: false
      }

      const aux = async () => {
        const { data } = await postMaterial({ datos: nuevoMaterial })
        postDocumento({ id_material: data.id, material: a })
        setCargando(false)
        history.push("/Docente/Perfil docente")
      }
      aux()
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

          <span>Nombre / Titulo del material</span>
          <input
            type="text"
            name="titulo_material"
            className="browser-default input"
            placeholder="Nombre / Titulo material"
            onChange={handleChange}
            value={material.titulo_material}
          />

          <span>Fecha de elaboración</span>
          <input
            type="date"
            name="fecha_material"
            className="browser-default input"
            placeholder="Fecha del material"
            onChange={handleChange}
            value={material.fecha_material}
          />


          <div class="file-field input-field">
            <div class="btn">
              <span>Archivo PDF</span>
              <input type="file"
                type="file"
                name="materialDoc"
                className="browser-default input"
                placeholder="Ubicación del archvo link / url"
                onChange={handleChange} />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" />
            </div>
          </div>

          <button onClick={() => {
            handleSubmit()
          }} type="submit" className="btn">
            Subir material
          </button>
          {error ? <p>Debes llenar todos los campos</p> : null}
        </form>
      </div>

      {/* Componente de carga */}
      {cargando ? <Cargando /> : ""}
    </>
  );
};

export default SubirMaterial;
