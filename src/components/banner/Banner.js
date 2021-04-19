import React from "react";
import { Link } from "react-router-dom";
import ImagenBanner from "../../images/ImagenBanner.jpg";
import "../../components/banner/Banner.css";

const Banner = () => {
  return (
    <>
      <div className="Contenedor-banner">
        <img src={ImagenBanner} alt="Imagen Banner" className="Imagen-Banner" />
        <div className="texto-encima">
            <p className="titulo-banner">MaterialGestor</p>
            <p className="text">
            MaterialGestor es un sitio web desde el cual se puedan publicar y
            gestionar el material <br />
            elaborado por los profesores del área y los reconocimientos que ha
            tenido el profesor.
            </p>
            <Link to="/Registro usuario">
                <button
                className="browser-default boton-registrar"
                >
                    Regitrarse
                </button>
            </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
