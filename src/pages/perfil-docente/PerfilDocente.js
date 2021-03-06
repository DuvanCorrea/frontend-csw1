import CardsReconocimietos from "../../components/cards/CardsReconocimietos";
import NavbarDocente from "../../components/navbar_docente/NavbarDocente";
import getReconocimientos from "../../servicios/getReconocimientos";
import React, { useContext, useEffect, useState } from "react";
import NavbarNormal from "../../components/navbar/Navbar";
import getMateriales from "../../servicios/getMateriales";
import docenteContext from "../../context/docenteContext";
import UsuarioIcon from "../../images/UsuarioIcon.svg";
import getDocente from "../../servicios/getDocente";
import Cards from "../../components/cards/Cards";
import { useHistory } from "react-router";
import "./PerfilDocente.css";
import { ACTUAL_HOTS } from "../../servicios/config";


//Lo que se renderisa
function PerfilDocente() {

  const {
    setDocenteTemporal,
    setReconocimientos,
    docenteTemporal,
    reconocminetos,
    setMateriales,
    setDocente,
    materiales,
    docente,
  } = useContext(docenteContext)
  const [linkIncorrecto, setLinkIncorrecto] = useState(false);
  const history = useHistory()
  let id_docente_param = null

  //Trae los datos de materiales
  useEffect(() => {

    const parametros = window.location.search;
    const urlParams = new URLSearchParams(parametros);
    id_docente_param = urlParams.get("id_docente");


    if (id_docente_param) {
      if (!docente) {
        const aux0 = async () => {
          const { data } = await getDocente({ id_docente: id_docente_param });
          if (data) {
            setDocenteTemporal(data)
          } else {
            setLinkIncorrecto(true)
          }
        };
        aux0();
      }
    } else {

      // Validar si el docente esta en el local storage
      // y setearlo en el contexto actual
      // ----------------------------------------------
      if (window.localStorage.getItem("docente")) {
        setDocente(JSON.parse(window.localStorage.getItem("docente")))
      } else if (docente === null || docente === undefined) {
        setLinkIncorrecto(true)
      }
    }

    if (linkIncorrecto === false) {
      const aux1 = async () => {
        const { data } = await getMateriales();
        setMateriales(data)
      };
      aux1();

      const aux2 = async () => {
        const { data } = await getReconocimientos();
        setReconocimientos(data)
      };
      aux2();
    }

  }, []);

  const cerrarSesion = () => {
    setDocente(null)
    window.localStorage.removeItem("docente")
    history.push("/")
  }

  // redireccionar si no hay docente despues de ver un documento
  // -----------------------------------------------------------
  // if (docente === null || docente === undefined) {
  //   if (docenteTemporal === null || docenteTemporal === undefined) {
  //     history.push("/")
  //   }
  // }
  return (
    <>
      {docente ? <NavbarDocente /> : <NavbarNormal />}

      {linkIncorrecto ?
        <>
          Ups :( algo no anda bien con este docente...
        </>
        :
        <>
          <div className="contenedor-perfil">
            <div className="contenedor-perfil-docente">
              <h2 className="titulos-perfil">Perfil docente</h2>
              <img src={UsuarioIcon} alt="Logo" />
              <div className="info-perfil">
                <div>
                  <p>
                    <span>Nombre:</span> {docente ? docente.nombre : <>{docenteTemporal ? docenteTemporal.nombre_completo : ""}</>}
                  </p>
                  <p>
                    <span>Materias:</span> {docente ? docente.areas : <>{docenteTemporal ? docenteTemporal.areas_conocimiento : ""}</>}
                  </p>
                  <p>
                    <span>Areas del conocimiento:</span> {docente ? docente.materia : <>{docenteTemporal ? docenteTemporal.materia : ""}</>}
                  </p>
                  <p>
                    <span>Correo:</span> {docente ? docente.correo : <>{docenteTemporal ? docenteTemporal.correo : ""}</>}
                  </p>
                  <p>
                    <span>Link del perfil:</span>
                  </p>
                  <p>
                    {docente ?
                      <a href={`${ACTUAL_HOTS}/Docente/Perfil%20docente/?id_docente=${docente.id}`}>
                        {`${ACTUAL_HOTS}/Docente/Perfil%20docente/?id_docente=${docente.id}`}
                      </a>
                      :
                      <>{docenteTemporal ?
                        <a href={`${ACTUAL_HOTS}/Docente/Perfil%20docente/?id_docente=${docenteTemporal.id_docente}`}>
                          {`${ACTUAL_HOTS}/Docente/Perfil%20docente/?id_docente=${docenteTemporal.id_docente}`}
                        </a>
                        : ""}</>}
                  </p>
                </div>
                <div>
                  {docente ? <button onClick={() => {
                    cerrarSesion()
                  }} className="btn btn-cerrar-session waves-effect waves-light btn-small">
                    <i className="small material-icons">close</i> Cerrar Sesion
                </button> : ""}
                </div>
              </div>
            </div>

            <div className="c">
              <div className="over">
                <h2>Materiales dise??ados</h2>
                <div className="contenedor-materiales">
                  {materiales ? materiales.map((e) => {
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
                  {reconocminetos ? reconocminetos.map((element) => {
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
        </>}
    </>
  );
}

export default PerfilDocente;
