import React, { useState, useEffect, useContext } from "react";
// import Carrusel from "../../components/carrusel/Carrusel";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import docenteContext from "../../context/docenteContext"
import { useHistory } from "react-router";
import getMateriales from '../../servicios/getMateriales';
import CardPrincipal from "../../components/cards/CardPrincipal"

import "./Principal.css"


const Principal = () => {

  const { docente, setMateriales, materiales } = useContext(docenteContext)
  const history = useHistory()

  //Trae los datos de materiales
  useEffect(() => {
    const aux = async () => {
      const { data } = await getMateriales();
      setMateriales(data)
    };
    aux();
  }, []);

  if (docente && docente.id) {
    history.push("/Docente")
  }

  return (
    <>
      <Navbar />
      <Banner />
      <p className="Sub-titulo">Materiales Publicados</p>
      {/* TABLA DE MATERIALES */}
      {materiales ? <div className="contenedor-tabla container"><table className="table-list-products">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Fecha</th>
          </tr>
        </thead>

        <tbody>
          {materiales.map((item) => {
            return <CardPrincipal key={item.id} {...item} />;
          })}
        </tbody>
      </table> </div>: ""}
    </>
  );
};

export default Principal;
