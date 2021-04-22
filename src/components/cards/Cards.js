import React from "react";
import { useState } from "react";
import { useContext } from "react";
import docenteContext from "../../context/docenteContext";
import deleteMaterial from "../../servicios/deleteMaterial";
import "./Cards.css";

const Cards = ({
  id,
  titulo_material,
  link_material,
  fecha_material,
  publicado
}) => {

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
      const { data } = await deleteMaterial({ id_material: id })
      setCargando(false)
    }
    aux()

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
          <button name={id} className="btn btn-cards superc">Ver</button>
        </div>
      </div>
    </>
  );
};

export default Cards;
