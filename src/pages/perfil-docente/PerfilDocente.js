import React, { useContext, useEffect, useState } from "react";
import NavbarDocente from "../../components/navbar_docente/NavbarDocente";
import UsuarioIcon from "../../images/UsuarioIcon.svg";
import getMateriales from "../../servicios/getMateriales";
import getReconocimientos from "../../servicios/getReconocimientos";
import Cards from "../../components/cards/Cards";
import CardsReconocimietos from "../../components/cards/CardsReconocimietos";
import "./PerfilDocente.css";

import docenteContext from "../../context/docenteContext";
import { useHistory } from "react-router";

//Lo que se renderisa
function PerfilDocente() {
  const [vector, setVector] = useState([]);
  const [vectorReconocimiento, setvectorReconocimiento] = useState([]);

  const { setDocente } = useContext(docenteContext)
  const history = useHistory()

  //Trae los datos de materiales
  useEffect(() => {
    const aux = async () => {
      const { data } = await getMateriales();
      setVector((e) => {
        return data;
      });
    };
    aux();
  }, [setVector]);

  //Trae los datos de reconocimientos
  useEffect(() => {
    const aux = async () => {
      const { data } = await getReconocimientos();
      setvectorReconocimiento((e) => {
        return data;
      });
    };
    aux();
  }, [setvectorReconocimiento]);

  const cerrarSesion = () => {
    setDocente(null)
    history.push("/")
  }

  return (
    <>
      <NavbarDocente />
      <div className="contenedor-perfil">
        <div className="contenedor-perfil-docente">
          <h2 className="titulos-perfil">Perfil docente</h2>
          <img src={UsuarioIcon} alt="Logo" />
          <div className="info-perfil">
            <p>
              <span>Nombre:</span> Jose Maria Castaño
            </p>
            <p>
              <span>Materia:</span> Ciencisas Siciales
            </p>
            <p>
              <span>Enforque material:</span> Animales
            </p>
            <button className="btn btn-cards btn-perfil s">
              Ver tus materiales
            </button>
            <button className="btn btn-cards btn-perfil">
              Ver reconocimientos
            </button>
            <button onClick={() => {
              cerrarSesion()
            }} className="btn btn-cards btn-perfil">
              Cerrar Sesion
            </button>
          </div>
        </div>

        <div className="c">
          <h2>Materiales diseñados</h2>
          <div className="contenedor-materiales">
            {vector.map((element_reco) => {
              return (
                <div>
                  <Cards key={element_reco.id} {...element_reco} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="c">
          <h2>Reconocimientos</h2>
          <div className="contenedor-reconocimientos">
            {vectorReconocimiento.map((element) => {
              return (
                <div>
                  <CardsReconocimietos
                    key={element.id_reconocimiento}
                    {...element}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfilDocente;
