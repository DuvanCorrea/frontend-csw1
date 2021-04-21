import React, { useState, useEffect, useContext } from "react";
import Carrusel from "../../components/carrusel/Carrusel";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import docenteContext from "../../context/docenteContext"
import { useHistory } from "react-router";
import getMateriales from '../../servicios/getMateriales';


const Principal = () => {
  const [vectorMaterial, setVectorMaterial] = useState([
    {
        "id": 5,
        "titulo_material": "material1",
        "link_material": "no asignado",
        "fecha_material": "2021-04-12T00:00:00.000Z",
        "link_archivo_material": "no asignado",
        "DOCENTES_id_docente": 2,
        "publicado": "2021-04-16T00:00:00.000Z"
    }
]);

  

  //Trae los datos de materiales
  useEffect(() => {
    
    const aux = async () => {
      const { data } = await getMateriales();
      setVectorMaterial(data);
    };
    aux();
  },[]);

  useEffect(() => {
    console.log(vectorMaterial)
  },[vectorMaterial]);


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
<<<<<<< HEAD
      {/* <Carrusel /> */}
=======
      {
        vectorMaterial.length > 0 ?  <Carrusel vectorMaterial={vectorMaterial}/> : null
      }
>>>>>>> 6a293e28f4da8f83a2c4651030fa4f911762e7d5
    </>
  );
};

export default Principal;
