import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import NavbarDocente from "../../components/navbar_docente/NavbarDocente";
import docenteContext from "../../context/docenteContext";
import Logo from "../../images/Logo.svg";
import '../../pages/Subir-reconocimiento/SubirReconocimiento.css';
import postReconocimiento from "../../servicios/postReconocimiento";

const SubirReconocimiento = () => {

  const [error, actualizarError] = useState(false);
  const { docente } = useContext(docenteContext)
  const history = useHistory()
  const [reconocimiento, actualizarReconocimiento] = useState({
    persona_que_otorga: '',
    entidad_otorga: "",
    razon: "",
    anio_reconocimiento: ""
  });

  //Función que se ejecuta cada que el usuario escribe en un input
  const handleChange = e => {
    actualizarReconocimiento({
      ...reconocimiento,
      [e.target.name]: e.target.value
    })
  }

  //Cuando el docente presiona agregar cita
  const handleSubmit = e => {
    e.preventDefault();

    // Validacion
    if (reconocimiento.persona_que_otorga.trim() === ''
      || reconocimiento.entidad_otorga.trim() === ''
      || reconocimiento.razon.trim() === ''
      || reconocimiento.anio_reconocimiento.trim() === '') {
      actualizarError(true);
      return;
    }

    //eliminar mensaje de error
    actualizarError(false);

    if (error === false) {
      // se contruye el objeto a enviar
      // ------------------------------

      const nuevoReconocimiento = {
        id_docente: docente.id,
        persona_que_otorga: reconocimiento.persona_que_otorga,
        persona_que_recibe: docente.nombre,
        entidad_otorga: reconocimiento.entidad_otorga,
        razon: reconocimiento.razon,
        anio_reconocimiento: reconocimiento.anio_reconocimiento
      }

      const aux = async () => {
        const { data } = await postReconocimiento({ datos: nuevoReconocimiento })
        console.log(data)
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
    <div>
      <NavbarDocente />
      <div className="contenedor-formulario-r">
        <form className="browser-default form">
          <img src={Logo} alt="Logo" />
          <p>Subir información de reconocimiento</p>
          <input
            type="text"
            name="persona_que_otorga"
            className="browser-default"
            placeholder="Nombre de quien hace el reconocimiento"
            onChange={handleChange}
            value={reconocimiento.persona_que_otorga}
          />
          <input
            type="text"
            name="entidad_otorga"
            className="browser-default"
            placeholder="Entidad que otroga el reconocimiento"
            onChange={handleChange}
            value={reconocimiento.entidad_otorga}
          />
          <input
            type="text"
            name="razon"
            className="browser-default"
            placeholder="Razón por la cual se otorga el reconocimiento"
            onChange={handleChange}
            value={reconocimiento.razon}
          />
          <input
            type="date"
            name="anio_reconocimiento"
            className="browser-default"
            placeholder="Fecha del reconocimiento"
            onChange={handleChange}
            value={reconocimiento.anio_reconocimiento}
          />
          <button onClick={handleSubmit} type="submit" className="btn">
            Subir material
          </button>
          {error ? <p>Debes llenar todos los campos</p> : null}
        </form>
      </div>
    </div>
  );
};

export default SubirReconocimiento;
