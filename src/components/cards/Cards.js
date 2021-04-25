import deleteMaterial from "../../servicios/deleteMaterial";
import docenteContext from "../../context/docenteContext";
import Cargando from "../../components/cargando/cargando";
import { API_URL } from "../../servicios/config";
import { useHistory } from "react-router";
import { useContext } from "react";
import { useState } from "react";
import React from "react";
import "./Cards.css";

const Cards = ({
  id,
  titulo_material,
  link_material,
  fecha_material,
  publicado,
  link_archivo_material,
  DOCENTES_id_docente
}) => {

  // Variables
  // ----------
  let nombre_documento = ""
  const history = useHistory()

  if (link_archivo_material) {
    nombre_documento = link_archivo_material.split("/")[link_archivo_material.split("/").length - 1]
  }

  const [cargando, setCargando] = useState(false)
  const { docente, materiales, setMateriales, setMaterial } = useContext(docenteContext)

  const eliminarMaterial = ({ target }) => {

    setCargando(true)

    // Se toma el id del material a eliminar
    // -------------------------------------
    console.log(target.name)

    // Se borra el material del estado global
    // donde se guardaron al cargar la pagina 
    // del docente
    // --------------------------------------
    const arrayAux = materiales.filter(e => e.id.toString() !== target.name.toString())

    setMateriales(arrayAux)

    // se envia la peticion de eliminacionde la base de datos
    // ------------------------------------------------------
    const aux = async () => {
      await deleteMaterial({ id_material: id })
      setCargando(false)
    }
    aux()

  }

  // Ver documento
  // -------------
  const verDocumento = () => {
    setMaterial({
      id_docente: DOCENTES_id_docente,
      id_material: id
    })
    history.push("/ver material")
  }

  if (cargando) {
    return <div><Cargando /></div>
  }

  return (
    <>
      {/* PRUEBA DE NUEVA CARTA */}

      <div class="row row-card">
        <div class="col s12">
          <div class="card ">
            <div class="card-content white-text">
              <span class="card-title">{titulo_material}</span>


              <div className="info-card">
                <div className="col s6">
                  <span>Año:</span>
                </div>
                <div className="s6">
                  {fecha_material.split("T")[0]}
                </div>
              </div>

              <div className="info-card">

                <div className="col s6">
                  <span>Link de descarga:</span>
                </div>
                <div className="s6">
                  {link_material}
                </div>
              </div>

              <div className="info-card">
                <div className="col s6">
                  {docente ? <span>Publicado:</span> : <></>}
                </div>
                <div className="s6">
                  {docente ? <>{publicado ? "SI" : "NO"}</> : ""}
                </div>
              </div>





            </div>
            <div class="card-action">

              {/* BOTONES */}

              {docente ? <><button onClick={(e) => {
                eliminarMaterial(e)
              }}
                className="btn btn-cards superc"
                name={id}>Eliminar</button></> : ""}
              {/* {docente ? <button name={id} className="btn btn-cards superc">Editar</button> : ""} */}

              {docente ? <>{publicado ? <></> : <button className="btn btn-cards superc">Publicar</button>}</> : ""}

              <a className="btn btn-cards superc"
                href={`${API_URL}/api/material/documento/${nombre_documento}`}>Descargar</a>

              <button onClick={() => {
                verDocumento()
              }} name={id} className="btn btn-cards superc">Ver</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
