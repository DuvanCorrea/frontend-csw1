import React from "react";
import "./Cards.css";

const CardsReconocimietos = ({
  persona_que_otorga,
  persona_que_recibe,
  entidada_otorga,
  razon,
  anio_reconocimento,
}) => {
  return (
    <>
      <div className="Card reco">
        <div className="contenedor-info-cards-reco">
          <p className="info-card">{persona_que_otorga}</p>
          <p className="info-card">
            <span>Otorga el siguiente reconocimiento a:</span>
          </p>
          <p className="info-card">{persona_que_recibe}</p>
          <p className="info-card">
            <span>Por</span>
          </p>
          <p className="info-card">{razon}</p>
          <p className="info-card">
            <span>Atentamente</span>
          </p>
          <p className="info-card">{entidada_otorga}</p>
          <p className="info-card fecha">
            <span>{anio_reconocimento}</span>
          </p>
          <button className="btn btn-cards super">
            Publicar reconocimiento
          </button>
          <button className="btn btn-cards">Gestionar reconocimiento</button>
        </div>
      </div>
    </>
  );
};

export default CardsReconocimietos;
