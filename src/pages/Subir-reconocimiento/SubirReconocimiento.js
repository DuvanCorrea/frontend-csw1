import React from "react";
import NavbarDocente from "../../components/navbar_docente/NavbarDocente";
import Logo from "../../images/Logo.svg";
import '../../pages/Subir-reconocimiento/SubirReconocimiento.css';

const SubirReconocimiento = () => {
  return (
    <div>
      <NavbarDocente />
      <div className="contenedor-formulario-r">
        <form className="browser-default form">
          <img src={Logo} alt="Logo" />
          <p>Subir información de reconocimiento</p>
          <input
            type="text"
            name="nombre_docente"
            className="browser-default"
            placeholder="Nombre de quien hace el reconocimiento"
          />
          <input
            type="text"
            name="titulo_material"
            className="browser-default"
            placeholder="Nombre de quien recibe el reconocimiento"
          />
          <input
            type="text"
            name="ano"
            className="browser-default"
            placeholder="Razón por la cual se otorga el reconocimiento"
          />
          <input
            type="text"
            name="ubicacion"
            className="browser-default"
            placeholder="Persona, institución, empresa que lo otorga"
          />
          <input
            type="text"
            name="ubicacion"
            className="browser-default"
            placeholder="Año otorgado"
          />
          <button type="submit" className="btn">
            Subir material
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubirReconocimiento;
