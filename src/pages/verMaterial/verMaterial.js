import React, { useEffect } from "react";
import NavbarDocente from "../../components/navbar_docente/NavbarDocente";
import { API_URL } from "../../servicios/config"

import "./verMaterial.css";

//Lo que se renderisa
function VerMaterial({
    id = 10,
    titulo_material = "26 heroku-recovery-codes.txt",
    link_material = "",
    fecha_material = "",
    publicado = "false",
    link_archivo_material = "26 heroku-recovery-codes.txt",
    nombre_documento = "26 heroku-recovery-codes.txt"
}) {

    //Trae el material
    useEffect(() => {

    }, []);


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
                            <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default VerMaterial;
