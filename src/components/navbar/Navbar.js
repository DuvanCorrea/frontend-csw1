import "./Navbar.css";
import Logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="Contenedor-Nav">
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
        {
          //Menú de navegación
        }
        <div>
          <ul>
            <Link to="/Acerca de">
              <li>ACERCA DE</li>
            </Link>
          </ul>
          {
            //Enlace a usuario
          }
          <Link to="/Docente/Login_U" className="Usuario-icon">
            <button type="submit" className="btn btn-inicio-secion">
              Iniciar sesión
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
