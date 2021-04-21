import React from "react";
import "../../components/carrusel/Carrusel.css";
import "../../components/carrusel/Complemento";
import CardsCarrusel from "../cards/CardsCarrusel";

const Carrusel = ({ vectorMaterial }) => {
  return (
    <div className="contenedor-carousel">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="carousel center-align">
              
              <div className="carousel-item">
                
                <div className="informacion">
                  <p>Titulo: </p>
                  <p>Docente: </p> 
                  <p>Añoo: </p>
                  <p>Ubicación: </p>
                </div>
                <div className="enlaces">
                  <button className="btn">Descargar material</button>
                  <a href="/#" className="ver">
                    Ver reconocimientos
                  </a>
                </div>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
