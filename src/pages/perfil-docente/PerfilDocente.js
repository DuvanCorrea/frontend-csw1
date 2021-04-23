import React, { useContext, useEffect, useState } from "react";

import CardsReconocimietos from "../../components/cards/CardsReconocimietos";
import NavbarDocente from "../../components/navbar_docente/NavbarDocente";
import getReconocimientos from "../../servicios/getReconocimientos";
import NavbarNormal from "../../components/navbar/Navbar";
import getMateriales from "../../servicios/getMateriales";
import docenteContext from "../../context/docenteContext";
import UsuarioIcon from "../../images/UsuarioIcon.svg";
import Cards from "../../components/cards/Cards";
import { useHistory } from "react-router";
import "./PerfilDocente.css";


//Lo que se renderisa
function PerfilDocente() {
  const [vectorReconocimiento, setvectorReconocimiento] = useState([]);
  const [vectorMaterial, setVectorMateriales] = useState([]);

  const {
    setReconocimientos,
    docenteTemporal,
    setMateriales,
    setDocente,
    materiales,
    docente,
  } = useContext(docenteContext)
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

  // redireccionar si no hay docente despues de ver un documento
  // -----------------------------------------------------------
  if (docente === null || docente === undefined) {
    if (docenteTemporal === null || docenteTemporal === undefined) {
      history.push("/")
    }
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
              <span>Nombre:</span> {docente ? docente.nombre : <>{docenteTemporal ? docenteTemporal.nombre_completo : ""}</>}
            </p>
            <p>
              <span>Materia:</span> {docente ? docente.areas : <>{docenteTemporal ? docenteTemporal.areas_conocimiento : ""}</>}
            </p>
            <p>
              <span>Enforque material:</span> {docente ? docente.materia : <>{docenteTemporal ? docenteTemporal.materia : ""}</>}
            </p>
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
