import React from "react";
import { useState } from "react";
import { useContext } from "react";
import docenteContext from "../../context/docenteContext";
import deleteMaterial from "../../servicios/deleteMaterial";
import { API_URL } from "../../servicios/config"
import "./CardPuncipal.css";
import { useHistory } from "react-router";

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
    return <div>cargando...</div>
  }

  return (
    <>
      <tr>
        <td>
          {titulo_material}{" "}
        </td>
        <td>
          {fecha_material.split("T")[0]}{" "}
        </td>
        <td>

          <a className="btn btn-cards superc"
            href={`${API_URL}/api/material/documento/${nombre_documento}`}>Descargar</a>

          <button onClick={() => {
            verDocumento()
          }} name={id} className="btn btn-cards superc">Ver</button>

        </td>
      </tr>

    </>
  );
};

export default Cards;
