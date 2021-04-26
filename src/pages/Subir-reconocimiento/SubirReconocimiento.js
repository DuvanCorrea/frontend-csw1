import NavbarDocente from "../../components/navbar_docente/NavbarDocente";
import Cargando from "../../components/cargando/cargando";
import postReconocimiento from "../../servicios/postReconocimiento";
import '../../pages/Subir-reconocimiento/SubirReconocimiento.css';
import docenteContext from "../../context/docenteContext";
import { useHistory } from "react-router";
import Logo from "../../images/Logo.svg";
import { useContext } from "react";
import { useState } from "react";
import React from "react";

const SubirReconocimiento = () => {

  const [error, actualizarError] = useState(false);
  const [cargando, setCargando] = useState(false);
  const { docente } = useContext(docenteContext)
  const history = useHistory()
  const [reconocimiento, actualizarReconocimiento] = useState({
    anio_reconocimiento: "",
    persona_que_otorga: '',
    entidad_otorga: "",
    razon: "",
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

      setCargando(true)

      // se contruye el objeto a enviar
      // ------------------------------

      const nuevoReconocimiento = {
        anio_reconocimiento: reconocimiento.anio_reconocimiento,
        persona_que_otorga: reconocimiento.persona_que_otorga,
        entidad_otorga: reconocimiento.entidad_otorga,
        persona_que_recibe: docente.nombre,
        razon: reconocimiento.razon,
        id_docente: docente.id,
      }

      const aux = async () => {
        await postReconocimiento({ reconocimiento: nuevoReconocimiento })
        alert("Reconocimiento registrado")
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
    <div>
      <NavbarDocente />
      <div className="contenedor-formulario-r">
        <form className="browser-default form">
          <img src={Logo} alt="Logo" />
          <span>Nombre de quien hace el reconocimiento</span>
          <input
            type="text"
            name="persona_que_otorga"
            className="browser-default"
            placeholder="Nombre de quien hace el reconocimiento"
            onChange={handleChange}
            value={reconocimiento.persona_que_otorga}
          />
          <span>Entidad que otroga el reconocimiento</span>
          <input
            type="text"
            name="entidad_otorga"
            className="browser-default"
            placeholder="Entidad que otroga el reconocimiento"
            onChange={handleChange}
            value={reconocimiento.entidad_otorga}
          />
          <span>Razón por la cual se otorga el reconocimiento</span>
          <input
            type="text"
            name="razon"
            className="browser-default"
            placeholder="Razón por la cual se otorga el reconocimiento"
            onChange={handleChange}
            value={reconocimiento.razon}
          />
          <span>Fecha del reconocimiento</span>
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
      {cargando ? <Cargando /> : <></>}

    </div>
  );
};

export default SubirReconocimiento;
