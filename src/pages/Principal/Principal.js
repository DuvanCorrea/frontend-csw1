import React, { useContext } from "react";
import Carrusel from "../../components/carrusel/Carrusel";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";

import docenteContext from "../../context/docenteContext"
import { useHistory } from "react-router";

const Principal = () => {

  const { docente } = useContext(docenteContext)
  const history = useHistory()

  if (docente && docente.id) {
    history.push("/Docente")
  }

  return (
    <>
      <Navbar />
      <Banner />
      <p className="Sub-titulo">Materiales Publicados</p>
      {/* <Carrusel /> */}
    </>
  );
};

export default Principal;
