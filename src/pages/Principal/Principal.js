import React from 'react';
import Carrusel from '../../components/carrusel/Carrusel';
import Banner from "../../components/banner/Banner";

const Principal = () => {
    return (
        <>
          <Banner/>
          <p className="Sub-titulo">Materiales Publicados</p>
          <Carrusel />  
        </>
    )
}

export default Principal;
