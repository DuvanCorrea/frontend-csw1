import React, { useContext, useEffect, useState } from "react";
import NavbarDocente from "../../components/navbar_docente/NavbarDocente";
import NavbarNormal from "../../components/navbar/Navbar";
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
  const [vectorMaterial, setVectorMateriales] = useState([]);
  const [vectorReconocimiento, setvectorReconocimiento] = useState([]);

  const { docente, setDocente, setMateriales, setReconocimientos, materiales } = useContext(docenteContext)
  const history = useHistory()

  //Trae los datos de materiales
  useEffect(() => {
    const aux = async () => {
      const { data } = await getMateriales();
      setMateriales(data)
      setVectorMateriales(data);
    };
    aux();

  }, [setVectorMateriales]);

  //Trae los datos de reconocimientos
  useEffect(() => {
    const aux = async () => {
      const { data } = await getReconocimientos();
      setReconocimientos(data)
      setvectorReconocimiento(data);
    };
    aux();

  }, [setvectorReconocimiento]);

  const cerrarSesion = () => {
    setDocente(null)
    history.push("/")
  }


  return (
    <>
      {docente ? <NavbarDocente /> : <NavbarNormal />}

      <div className="contenedor-perfil">
        <div className="contenedor-perfil-docente">
          <h2 className="titulos-perfil">Perfil docente</h2>
          <img src={UsuarioIcon} alt="Logo" />
          <div className="info-perfil">
            <p>
              <span>Nombre:</span> {docente ? docente.nombre : ""}
            </p>
            <p>
              <span>Materia:</span> {docente ? docente.areas : ""}
            </p>
            <p>
              <span>Enforque material:</span> {docente ? docente.materia : ""}
            </p>
            <button className="btn btn-cards btn-perfil s">
              Ver tus materiales
            </button>
            <button className="btn btn-cards btn-perfil">
              Ver reconocimientos
            </button>
            {docente ? <button onClick={() => {
              cerrarSesion()
            }} className="btn btn-cards btn-perfil">
              Cerrar Sesion
            </button> : ""}
          </div>
        </div>

        <div className="c">
          <div className="over">
            <h2>Materiales diseñados</h2>
            <div className="contenedor-materiales">
              {materiales ? vectorMaterial.map((e) => {
                return (
                  <div>
                    <Cards key={e.id} {...e} />
                  </div>
                );
              }) : <></>}
            </div>
          </div>
        </div>

        <div className="c">
          <div className="over">
            <h2>Reconocimientos</h2>
            <div className="contenedor-reconocimientos">
              {vectorReconocimiento ? vectorReconocimiento.map((element) => {
                return (
                  <div>
                    <CardsReconocimietos
                      key={element.id_reconocimiento}
                      {...element}
                    />
                  </div>
                );
              }) : <></>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfilDocente;
