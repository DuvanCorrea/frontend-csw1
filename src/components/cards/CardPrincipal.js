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
  fecha_material,
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
  const { materiales, setMateriales, setMaterial } = useContext(docenteContext)

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
