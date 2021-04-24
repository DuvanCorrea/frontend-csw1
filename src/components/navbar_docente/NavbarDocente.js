import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import UsuarioIcon from "../../images/UsuarioIcon.svg";
import '../navbar_docente/NavbarDocente.css';

import docenteContext from "../../context/docenteContext"

export const NavbarDocente = () => {

  const { docente } = useContext(docenteContext)

  return (
    <>
      <nav className="Contenedor-Nav-docente">
        {
          //Enlace a inicio
        }
        <div>
          <Link to="/" className="Logo">
            <img src={Logo} alt="Logo" />
          </Link>
          <Link className="principal-inicio" to="/">
            INICIO
          </Link>
        </div>
        <div className="Contenedor-menu">
          <ul className="nav-enlaces">
            <Link to="/Acerca de">
              <li>ACERCA DE</li>
            </Link>
            <Link to="/Docente/Perfil docente">
              <li>{docente ? docente.nombre.toUpperCase() : <></>}</li>
            </Link>
          </ul>
          {
            //Enlace a usuario
          }
          {/* <Link to="/Docente/Perfil docente" className="Usuario-icon">
            <img src={UsuarioIcon} alt="Usuario" className="UsuarioIcon" />
          </Link> */}

        </div>
      </nav>
    </>
  );
};

export default NavbarDocente;
