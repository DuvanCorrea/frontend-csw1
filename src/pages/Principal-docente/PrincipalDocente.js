import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import IconoSubirMaterial from "../../images/IconoSubirMaterial.svg";
import Banner from "../../components/banner/Banner";
import NavbarDocente from '../../components/navbar_docente/NavbarDocente';
import "./PrincipalDocente.css";

import docenteContext from "../../context/docenteContext";


const PrincipalDocente = () => {

  const { docente } = useContext(docenteContext)
  const history = useHistory();

  if (docente === null || docente === undefined) {
    history.push("/Docente/Login_U")
  }

  return (
    <>
      <NavbarDocente />
      <Banner />
      <div className="contenedor-docente">
        <div className="contenedor-informacion uno">
          <img src={IconoSubirMaterial} alt="Subir material" className="icon" />
          <p className="titulo sub">Subir</p>
          <p className="titulo">Información</p>
          <Link to="/Docente/Subir material">
            <p className="enlaces-p">Material</p>
          </Link>
          <Link to="/Docente/Subir reconocimiento">
            <p className="enlaces-p">Reconocimiento</p>
          </Link>
        </div>

        <div className="contenedor-informacion dos">
          <img
            src={IconoSubirMaterial}
            alt="Generar listados"
            className="icon"
          />
          <p className="titulo sub">Generar</p>
          <p className="titulo">Listados</p>
          <Link to="/Docente/Subir material">
            <p className="enlaces-p">Materiales diseñados</p>
          </Link>
          <Link to="/Acerca de">
            <p className="enlaces-p">Reconocimiento</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PrincipalDocente;
