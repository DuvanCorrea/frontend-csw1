import React from "react";
import "./Cards.css";

const CardsCarrusel = ({
  titulo_material,
  link_material,
  fecha_material,
  link_archivo_material
}) => {
  return (
    <>
      <div className="Card cards-carrusel">
        <div className="contenedor-info-cards">
          <p className="info-card">
            <span>Titulo:</span> {titulo_material}{" "}
          </p>
          <p className="info-card">
            <span>Docente:</span> {link_archivo_material}{" "}
          </p>
          <p className="info-card">
            <span>Año:</span> {fecha_material}{" "}
          </p>
          <p className="info-card">
            <span>Ubicación:</span> {link_material}{" "}
          </p>
          <button className="btn btn-cards superc">Publicar material</button>
          <button className="btn btn-cards">Gestionar material</button>
        </div>
      </div>
    </>
  );
};

export default CardsCarrusel;