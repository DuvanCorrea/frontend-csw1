import NavbarDocente from "../../components/navbar_docente/NavbarDocente";
import React, { useEffect, useContext, useState } from "react";
import docenteContext from "../../context/docenteContext";
import getMaterial from "../../servicios/getMaterial";
import Navbar from "../../components/navbar/Navbar";
import getDocente from "../../servicios/getDocente";
import { API_URL } from "../../servicios/config"
import { useHistory } from "react-router";
import "./verMaterial.css";

//Lo que se renderisa
function VerMaterial() {

    // variaables
    // ----------
    const { setDocenteTemporal, docente } = useContext(docenteContext);
    const [materialActual, setMaterialActual] = useState();
    const [linkMaterial, setLinkMaterial] = useState("");
    const [docenteX, setDocenteX] = useState();
    const history = useHistory();
    let id_docente_param = null
    let id_material_param = null

    useEffect(() => {

        // Se valida si ingreso con la url externa
        // ---------------------------------------
        const parametros = window.location.search
        const urlParams = new URLSearchParams(parametros)
        console.log(urlParams.get("id_docente"))
        console.log(urlParams.get("id_material"))
        id_docente_param = urlParams.get("id_docente")
        id_material_param = urlParams.get("id_material")

        console.log(id_docente_param && id_material_param)

        if (id_docente_param && id_material_param) {
            const auxDocente = async () => {
                const { data } = await getDocente({ id_docente: id_docente_param })
                console.log("doce", data)
                if (data) {
                    setDocenteX("data", data)
                }
            }
            auxDocente();

            const auxMaterial = async () => {
                const { data } = await getMaterial({ id_material: id_material_param })
                if (data) {
                    setMaterialActual(data)
                    setLinkMaterial(`${API_URL}/api/material/documento/${data.link_archivo_material.split("/")[data.link_archivo_material.split("/").length - 1]}`)
                }

            }
            auxMaterial()
        } else {
            return (<>404</>)
        }

    }, []);

    // Se hace una copia temporal de un docente
    // para visualizar su perfil
    // ----------------------------------------
    const verDocente = () => {
        setDocenteTemporal(docenteX)
        history.push("/Docente/Perfil docente")
    }


    // if (material === null || material === undefined) {
    //     history.push("/")
    // }

    return (
        <>
            {docente ? <NavbarDocente /> : <Navbar />}
            <div className="row padre-verMateriales">
                <div className="col s12">
                    <div className="card">



                        {/* Contenido de la carta */}
                        <div className="card-content">

                            <div className="row">

                                <div className="col s4">
                                    <div className="infoDocente">

                                        <h3>DOCENTE</h3>
                                        <strong>Nombre:</strong> <a className="linkDocente" onClick={verDocente}> {docenteX ? docenteX.nombre_completo : "loading..."}</a>
                                        <p><strong>Correo:</strong> {docenteX ? docenteX.correo : "loading..."}</p>

                                    </div>
                                </div>

                                <div className="col s4">
                                    <div className="infoMaterial">

                                        <h3>MATERIAL</h3>
                                        <p><strong>Titulo:</strong> {materialActual ? materialActual.titulo_material : "loading..."}</p>
                                        <p><strong>Fecha:</strong> {materialActual ? materialActual.fecha_material.split("T")[0] : "loading..."}</p>

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

        </>
    );
}

export default VerMaterial;
