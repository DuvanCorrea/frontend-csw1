import React from 'react';
import { Link } from 'react-router-dom';
import IconoSubirMaterial from '../../images/IconoSubirMaterial.svg';
import Banner from "../../components/banner/Banner";
import './PrincipalDocente.css';

function PrincipalDocente() {
    return (
            <>  
                <Banner />
                <div className = "contenedor-docente">
                    <div className = "contenedor-informacion uno">
                        <img src = { IconoSubirMaterial } 
                        alt = "Subir material" 
                        className = "icon"/>
                            <p className = "titulo sub">Subir</p>
                            <p className = "titulo">Información</p>    
                            <Link to = "/Subir material">
                                <p className = "enlaces-p">Material</p> 
                            </Link> 
                            <Link to = "/Acerca de">
                                <p className = "enlaces-p">Reconocimiento</p>
                            </Link>
                    </div>

                    <div className = "contenedor-informacion dos">
                        <img src = { IconoSubirMaterial } 
                        alt = "Generar listados" 
                        className = "icon"/>
                            <p className = "titulo sub">Generar</p>
                            <p className = "titulo">Listados</p>    
                            <Link to = "/Subir material">
                                <p className = "enlaces-p">Materiales diseñados</p> 
                            </Link> 
                            <Link to = "/Acerca de">
                                <p className = "enlaces-p">Reconocimiento</p>
                            </Link>
                    </div>

                </div>
            </>
    )
}

export default PrincipalDocente;
