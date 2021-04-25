import deleteReconociminento from "../../servicios/deleteReconociminento";
import docenteContext from "../../context/docenteContext";
import Cargando from "../../components/cargando/cargando";
import React, { useContext, useState } from "react";
import "./Cards.css";


const CardsReconocimietos = ({
  // DOCENTES_id_docente,
  anio_reconocimento,
  entidada_otorga,
  id_reconocimiento,
  persona_que_otorga,
  // persona_que_recibe,
  razon
}) => {

  // Variables
  // ---------
  const [cargando, setCargando] = useState(false)
  const { reconocminetos, setReconocimientos } = useContext(docenteContext)

  const eliminarMaterial = ({ target }) => {

    setCargando(true)

    // Se toma el id del reconocimiento a eliminar
    // -------------------------------------

    // Se borra el material del estado global
    // donde se guardaron al cargar la pagina 
    // del docente
    // --------------------------------------
    const arrayAux = reconocminetos.filter(e => e.id_reconocimiento.toString() !== target.name.toString())

    setReconocimientos(arrayAux)

    // se envia la peticion de eliminacionde la base de datos
    // ------------------------------------------------------
    const aux = async () => {
      await deleteReconociminento({ id_reconocimiento: id_reconocimiento })
      setCargando(false)
    }
    aux()
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
              <span class="card-title">{razon}{" "}</span>

              <p className="info-card">
                <span>Año:</span> {anio_reconocimento.split("T")[0]}{" "}
              </p>

              <p className="info-card">
                <span>Persona que otorga:</span> {persona_que_otorga}{" "}
              </p>

              <p className="info-card">
                <span>Entidad que otorga:</span> {entidada_otorga}{" "}
              </p>

            </div>
            <div class="card-action">

              {/* BOTONES */}

              <button onClick={(e) => {
                eliminarMaterial(e)
              }}
                className="btn btn-cards superc"
                name={id_reconocimiento}>Eliminar</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsReconocimietos;
