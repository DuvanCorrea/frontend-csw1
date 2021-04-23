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
    const { material, setDocenteTemporal, docente } = useContext(docenteContext)
    const [materialActual, setMaterialActual] = useState()
    const [docenteX, setDocenteX] = useState()
    const history = useHistory()

    console.log("material", material)

    useEffect(() => {
        if (material) {
            const auxDocente = async () => {
                const { data } = await getDocente({ id_docente: material.id_docente })
                setDocenteX(data)
            }
            auxDocente()
            const auxMaterial = async () => {
                const { data } = await getMaterial({ id_material: material.id_material })
                setMaterialActual(data)
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


    if (material === null || material === undefined) {
        history.push("/")
    }

    return (
        <>
            {docente ? <NavbarDocente /> : <Navbar />}
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <>
                                {/* aqui se hace la peticion para pedir el archivo */}
                                {materialActual ? <iframe src={materialActual ? "http://docs.google.com/gview?url="
                                    + API_URL
                                    + "/api/material/documento/"
                                    + materialActual.link_archivo_material.split("/")[materialActual.link_archivo_material.split("/").length - 1]
                                    + "&embedded=true" : ""} width="100%" height="700px" frameborder="0" ></iframe> : ""}
                            </>

                            <span class="card-title">Card Title</span>
                        </div>
                        <div class="card-content">
                            <div className="infoDocente">
                                <h3>DOCENTE</h3>
                                Nombre: <a className="linkDocente" onClick={verDocente}> {docenteX ? docenteX.nombre_completo : "loading..."}</a>
                                <p>Correo: {docenteX ? docenteX.correo : "loading..."}</p>
                            </div>
                            <div className="infoMaterial">
                                <h3>MATERIAL</h3>
                                <p>Titulo: {materialActual ? materialActual.titulo_material : "loading..."}</p>
                                <p>Fecha: {materialActual ? materialActual.fecha_material : "loading..."}</p>
                            </div>
                        </div>
                        <div class="card-action">
                            {materialActual ? <a className="btn btn-cards superc"
                                href={`${API_URL}/api/material/documento/${materialActual.link_archivo_material.split("/")[materialActual.link_archivo_material.split("/").length - 1]}`}>Descargar</a> : ""}

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default VerMaterial;
