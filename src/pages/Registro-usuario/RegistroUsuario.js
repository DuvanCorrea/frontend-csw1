import React from "react";
import { Link } from 'react-router-dom';
import UsuarioIcon from '../../images/UsuarioIcon.svg';
import Logo from '../../images/Logo.svg';
import Fondo_Login_bienvenida from '../../images/Fondo_Login_bienvenida.jpg';
import '../../pages/Registro-usuario/RegistroUsuario.css';

const RegistroUsuario = () => {
  return (
    <div className="cotenedor-registro-pag">
      <div className="contenedor-registro">

        <div className="contenedor-info">
            <img src={Fondo_Login_bienvenida} alt="Imagen Banner" className="Imagen-registro" />
            <div className="texto-encima">
                <img src={Logo} alt="Logo" className = "logo-registre"/>
                <p className="titulo-registo">MaterialGestor</p>
                <p className="text">
                MaterialGestor es un sitio web desde el cual se puedan publicar y
                gestionar el material <br />
                elaborado por los profesores del área y los reconocimientos que ha
                tenido el profesor.
                </p>
                <Link to="/Registro usuario">
                    <button
                    className="browser-default boton-iniciar-sesion sesion"
                    >
                        Iniciar sesión
                    </button>
                </Link>
               
            </div> 
        </div>

        <div className="contenedor-form">
            <p>Regristro</p>
            <img src={UsuarioIcon} alt="Usuario" className="UsuarioIcon-registro" />
            <form className="browser-default form-registro">
                <input
                type="text"
                name="nombre_docente"
                className="browser-default"
                placeholder="Nombre completo"
                />
                <input
                type="email"
                name="email"
                className="browser-default"
                placeholder="Correo electronico"
                />
                <input
                type="password"
                name="contrasena"
                className="browser-default"
                placeholder="Contraseña"
                />
                <input
                type="password"
                name="confirmar-contrasena"
                className="browser-default"
                placeholder="Confirmar contraseña"
                />
                <Link to="/Acerca de">
                    <button type="submit" className="btn">
                        Continuar
                    </button>
                </Link>
            </form>
        </div>
      </div>
    </div>
  );
};

export default RegistroUsuario;
