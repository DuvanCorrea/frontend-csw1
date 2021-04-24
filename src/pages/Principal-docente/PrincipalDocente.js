import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import NavbarDocente from '../../components/navbar_docente/NavbarDocente';
import ImagenSubirMaterial from "../../images/subir material.jpg"
import ImagenSubirReconocimiento from "../../images/agregar reconocimineto.jpg"
import "./PrincipalDocente.css";

import docenteContext from "../../context/docenteContext";


const PrincipalDocente = () => {

  const { docente } = useContext(docenteContext)
  const history = useHistory();

  if (docente === null || docente === undefined) {
    history.push("/Docente/Login_U")
  }

  return (
    <>
      <NavbarDocente />
      {/* <Banner /> */}
      <div className="contenedor-docente">
        <div className="contenedor-informacion uno">
          <div className="opciones_docente">
            <div className="row">

              {/* SUBRIR MATERIAL */}
              <div className="col s6">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={ImagenSubirMaterial} />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Subir materiales<i className="material-icons right">more_vert</i></span>
                    <p>            <Link className="btn" to="/Docente/Subir material">
                      Subir PDF
                </Link></p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Subir materiales<i className="material-icons right">close</i></span>
                    <p>Como docente puedes subir tus materiales de estudio en formato PDF para que los estudiantes puedan acceder a estos y descargarlos si lo desean.</p>
                  </div>
                </div>
              </div>
              {/* 433 362 */}

              {/* SUBIR RECONOCIMIENTO */}
              <div className="col s6">

                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={ImagenSubirReconocimiento} />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Agregar reconocimiento<i className="material-icons right">more_vert</i></span>
                    <p><Link className="btn" to="/Docente/Subir reconocimiento">
                      Agregar reconocimiento
            </Link></p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Agregar reconocimientos<i className="material-icons right">close</i></span>
                    <p>Sabemos que eres un exelente docente y por ellos necesita alardear de tus reconocimientos, en esta sección puedes agregalos y seran visibles para todos los que revisen tu perfil.</p>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrincipalDocente;
