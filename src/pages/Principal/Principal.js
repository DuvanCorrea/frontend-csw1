import React from "react";
import Carrusel from "../../components/carrusel/Carrusel";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";

const Principal = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <p className="Sub-titulo">Materiales Publicados</p>
      <Carrusel />
    </>
  );
};

export default Principal;
