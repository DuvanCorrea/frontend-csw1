import React from "react";
import { Link } from 'react-router-dom';
import "../../components/navbar/Navbar.css";
import Logo from '../../images/Logo.svg';
import UsuarioIcon from '../../images/UsuarioIcon.svg';


export const Navbar = () => {
  return (
    <>
      <nav className="Contenedor-Nav">
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
            <Link to="/Materiales">
              <li>Materiales</li>
            </Link>            
          </ul>
          {
            //Enlace a usuario
          }
          <Link to="/Login_U" className="Usuario-icon">
            <img src={UsuarioIcon} alt="Usuario" className="UsuarioIcon" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
