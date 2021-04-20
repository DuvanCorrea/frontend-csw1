import React from "react";
import "./Cards.css";

const Cards = ({
  titulo_material,
  link_material,
  fecha_material,
  link_archivo_material,
}) => {
  return (
    <>
      <div className="Card">
        <div className="contenedor-info-cards">
          <p className="info-card"><span>Titulo:</span> {titulo_material} </p>
          <p className="info-card"><span>Docente:</span> {link_archivo_material} </p>
          <p className="info-card"><span>Año:</span> {fecha_material} </p>
          <p className="info-card"><span>Ubicación:</span> {link_material} </p>
          <button className="btn btn-cards super">Publicar material</button>
          <button className="btn btn-cards">Gestionar material</button>
        </div>
      </div>
    </>
  );
};

export default Cards;
