import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import NavbarDocente from "../../components/navbar_docente/NavbarDocente";
import docenteContext from "../../context/docenteContext";
import getDocente from "../../servicios/getDocente";
import getMaterial from "../../servicios/getMaterial";
import { API_URL } from "../../servicios/config"

import "./verMaterial.css";
import { useHistory } from "react-router";

//Lo que se renderisa
function VerMaterial() {

    // variaables
    // ----------
    const [docente, setDocente] = useState()
    const [materialActual, setMaterialActual] = useState()
    const { material } = useContext(docenteContext)
    const history = useHistory()

    console.log("material", material)

    useEffect(() => {
        if (material) {
            const auxDocente = async () => {
                const { data } = await getDocente({ id_docente: material.id_docente })
                setDocente(data)
            }
            auxDocente()
            const auxMaterial = async () => {
                const { data } = await getMaterial({ id_material: material.id_material })
                setMaterialActual(data)
            }
            auxMaterial()
        }

    }, []);

    if (material === null || material === undefined) {
        history.push("/")
    }

    return (
        <>
            <NavbarDocente />
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <iframe src={"http://docs.google.com/gview?url=" + API_URL + "/api/material/documento/10%20CA-ProblemasTemas6-10corr.pdf&embedded=true"} width="100%" height="700px" frameborder="0" ></iframe>
                            <span class="card-title">Card Title</span>
                        </div>
                        <div class="card-content">
                            <div className="infoDocente">
                                <h3>DOCENTE</h3>
                                <p>Nombre: {docente ? docente.nombre_completo : "loading..."}</p>
                                <p>Correo: {docente ? docente.correo : "loading..."}</p>
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
