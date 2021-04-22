import React from "react";
import { useState } from "react";
import { useContext } from "react";
import docenteContext from "../../context/docenteContext";
import deleteMaterial from "../../servicios/deleteMaterial";
import getDocumento from "../../servicios/getDocumento";
import { API_URL } from "../../servicios/config"
import "./Cards.css";

const Cards = ({
  id,
  titulo_material,
  link_material,
  fecha_material,
  publicado,
  link_archivo_material
}) => {

  let nombre_documento = ""

  if (link_archivo_material) {
    nombre_documento = link_archivo_material.split("/")[link_archivo_material.split("/").length - 1]
  }

  const [cargando, setCargando] = useState(false)
  const { materiales, setMateriales } = useContext(docenteContext)

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
    window.open("/material/documento/" + nombre_documento)
  }

  if (cargando) {
    return <div>cargando...</div>
  }

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
          <button onClick={(e) => {
            eliminarMaterial(e)
          }}
            className="btn btn-cards superc"
            name={id}>Eliminar</button>
          <button name={id} className="btn btn-cards superc">Editar</button>

          {publicado ? <></> : <button className="btn btn-cards superc">Publicar</button>}

          <a className="btn btn-cards superc"
            href={`${API_URL}/api/material/documento/${nombre_documento}`}>Descargar</a>

          <button onClick={() => {
            verDocumento()
          }} name={id} className="btn btn-cards superc">Ver</button>
        </div>
      </div>

    </>
  );
};

export default Cards;
