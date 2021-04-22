import React from "react";
import "./Cards.css";

const Cards = ({
  titulo_material,
  link_material,
  fecha_material,
  publicado
}) => {
  return (
    <>
      <div className="Card">
        <div className="contenedor-info-cards">
          <p className="info-card">
            <span>Titulo:</span> {titulo_material}{" "}
          </p>
          <p className="info-card">
            <span>Link de descarga:</span> {link_material}{" "}
          </p>
          <p className="info-card">
            <span>Año:</span> {fecha_material}{" "}
          </p>
          <p className="info-card">
            <span>Publicado:</span> {publicado ? "SI" : "NO"}{" "}
          </p>
          <button className="btn btn-cards superc">Eliminar</button>
          <button className="btn btn-cards superc">Editar</button>
          {publicado ? <></> : <button className="btn btn-cards superc">Publicar</button>}
          <button className="btn btn-cards superc">Ver</button>
        </div>
      </div>
    </>
  );
};

export default Cards;
