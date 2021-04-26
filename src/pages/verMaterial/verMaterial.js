import NavbarDocente from "../../components/navbar_docente/NavbarDocente";
import React, { useEffect, useContext, useState } from "react";
import { API_URL, ACTUAL_HOTS } from "../../servicios/config";
import docenteContext from "../../context/docenteContext";
import getMaterial from "../../servicios/getMaterial";
import Navbar from "../../components/navbar/Navbar";
import getDocente from "../../servicios/getDocente";
import { useHistory } from "react-router";
import "./verMaterial.css";

//Lo que se renderisa
function VerMaterial() {

    // variaables
    // ----------
    const { setDocenteTemporal, docente } = useContext(docenteContext);
    const [linkIncorrecto, setLinkIncorrecto] = useState(false);
    const [materialActual, setMaterialActual] = useState();
    const [linkMaterial, setLinkMaterial] = useState("");
    const [docenteX, setDocenteX] = useState();
    const history = useHistory();
    let id_material_param = null
    let id_docente_param = null

    useEffect(() => {

        // Se valida si ingreso con la url externa
        // ---------------------------------------
        const parametros = window.location.search
        const urlParams = new URLSearchParams(parametros)
        id_docente_param = urlParams.get("id_docente")
        id_material_param = urlParams.get("id_material")

        if (id_docente_param && id_material_param) {
            const auxDocente = async () => {
                const { data } = await getDocente({ id_docente: id_docente_param })
                if (data) {
                    setDocenteX(data)
                } else {
                    setLinkIncorrecto(true)
                }
            }
            auxDocente();

            const auxMaterial = async () => {
                const { data } = await getMaterial({ id_material: id_material_param })
                if (data) {
                    setMaterialActual(data)
                    setLinkMaterial(`${API_URL}/api/material/documento/${data.link_archivo_material.split("/")[data.link_archivo_material.split("/").length - 1]}`)
                } else {
                    setLinkIncorrecto(true)
                }

            }
            auxMaterial()
        }

    }, []);

    // Se hace una copia temporal de un docente
    // para visualizar su perfil
    // ----------------------------------------
    const verDocente = () => {
        setDocenteTemporal(docenteX)
        history.push("/Docente/Perfil docente")
    }

    return (
        <>
            {docente ? <NavbarDocente /> : <Navbar />}

            {linkIncorrecto ?
                <>
                    Ups :( algo no anda bien con este material...
                </>
                :
                <>
                    <div className="row padre-verMateriales">
                        <div className="col s12">
                            <div className="card">

                                {/* Contenido de la carta */}
                                <div className="card-content">

                                    <div className="row">

                                        <div className="col s4">
                                            <div className="infoDocente">

                                                <h3>DOCENTE</h3>
                                                <p><strong>Nombre:</strong> <a href={`/Docente/Perfil docente/?id_docente=${docenteX ? docenteX.id_docente : ""}`} className="linkDocente" onClick={verDocente}> {docenteX ? docenteX.nombre_completo : "Cargando..."}</a></p>
                                                <p><strong>Areas del conocimiento:</strong> {docenteX ? docenteX.areas_conocimiento : "Cargando..."}</p>
                                                <p><strong>Materias:</strong> {docenteX ? docenteX.materia : "Cargando..."}</p>
                                                <p><strong>Correo:</strong> {docenteX ? docenteX.correo : "Cargando..."}</p>

                                            </div>
                                        </div>

                                        <div className="col s4">
                                            <div className="infoMaterial">

                                                <h3>MATERIAL</h3>
                                                <p><strong>Titulo:</strong> {materialActual ? materialActual.titulo_material : "Cargando..."}</p>
                                                <p><strong>Fecha:</strong> {materialActual ? materialActual.fecha_material.split("T")[0] : "Cargando..."}</p>
                                                <p><strong>Link de este material</strong></p>
                                                <p>{materialActual ? <a href={`/ver material/?id_docente=${materialActual.DOCENTES_id_docente}&id_material=${materialActual.id}`}>
                                                    {`${ACTUAL_HOTS}/?id_docente=${materialActual.DOCENTES_id_docente}&id_material=${materialActual.id}`}
                                                </a> : "Cargando..."}</p>

                                            </div>
                                        </div>

                                        {/* Acciones de la carta */}

                                        <div className="col s4">
                                            <div className="padre-btn-descargar-verMaterial">
                                                {materialActual ? <a className="btn btn-descargar-verMaterial"
                                                    href={linkMaterial}>Descargar</a> : ""}

                                            </div>
                                        </div>

                                    </div>

                                </div>

                                {/* Aqui se muestra el pdf */}
                                <div className="card-image">
                                    <>
                                        {/* aqui se hace la peticion para pedir el archivo */}
                                        {materialActual ? <iframe src={materialActual ? "http://docs.google.com/gview?url="
                                            + linkMaterial
                                            + "&embedded=true" : ""} width="100%" height="700px" frameBorder="0" ></iframe> : ""}
                                    </>

                                    <span className="card-title pie-de-pdf">Vista previa MATERIAL GESTOR ©</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </>}

        </>
    );
}

export default VerMaterial;
