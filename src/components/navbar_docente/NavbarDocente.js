import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import UsuarioIcon from "../../images/UsuarioIcon.svg";
import '../navbar_docente/NavbarDocente.css';

export const NavbarDocente = () => {
  return (
    <>
      <nav className="Contenedor-Nav-docente">
        {
          //Enlace a inicio
        }
        <Link to="/" className="Logo">
          <img src={Logo} alt="Logo" />
        </Link>
        {
          //Menú de navegación
        }
        <div className="Contenedor-menu">
          <ul className="nav-enlaces">
            <Link to="/Acerca de">
              <li>Acerca de</li>
            </Link>
          </ul>
          {
            //Enlace a usuario
          }
          <Link to="/Docente/Perfil docente" className="Usuario-icon">
            <img src={UsuarioIcon} alt="Usuario" className="UsuarioIcon" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarDocente;
