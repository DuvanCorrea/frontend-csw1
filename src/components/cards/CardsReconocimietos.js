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
  const { reconocminetos, setReconocimientos } = useContext(docenteContext)
  const [cargando, setCargando] = useState(false)

  const eliminarMaterial = ({ target }) => {

    setCargando(true)

    // Se toma el id del reconocimiento a eliminar
    // -------------------------------------

    // Se borra el material del estado global
    // donde se guardaron al cargar la pagina 
    // del docente
    // --------------------------------------

    let arrayAux = []
    if (reconocminetos.length >= 1) {
      arrayAux = reconocminetos.filter(e => e.id_reconocimiento.toString() !== target.name.toString())
    }

    setReconocimientos(arrayAux)

    // se envia la peticion de eliminacionde la base de datos
    // ------------------------------------------------------
    const aux = async () => {
      const { } = await deleteReconociminento({ id_reconocimiento: id_reconocimiento })
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
              <span class="card-title">{razon}</span>

              <div className="info-card">
                <div className="col s6">
                  <span>Año:</span>
                </div>
                <div className="s6">
                  {anio_reconocimento.split("T")[0]}
                </div>
              </div>

              <div className="info-card">
                <div className="col s6">
                  <span>Persona que otorga:</span>
                </div>
                <div className="s6">
                  {persona_que_otorga}
                </div>
              </div>

              <div className="info-card">
                <div className="col s6">
                  <span>Entidad que otorga:</span>
                </div>
                <div className="s6">
                  {entidada_otorga}
                </div>
              </div>

            </div>
            <div class="card-action">

              {/* BOTONES */}

              <button onClick={(e) => {
                eliminarMaterial(e)
              }}
                className="btn btn-card-material"
                name={id_reconocimiento}><i className="material-icons">delete_sweep</i>Eliminar</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsReconocimietos;
