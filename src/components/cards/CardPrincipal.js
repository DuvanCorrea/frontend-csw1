import { API_URL } from "../../servicios/config"
import { useHistory } from "react-router";
import { useState } from "react";
import "./CardPuncipal.css";
import React from "react";

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

  // Ver documento
  // -------------
  const verDocumento = () => {
    history.push(`/ver material/?id_docente=${DOCENTES_id_docente}&id_material=${id}`)
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
