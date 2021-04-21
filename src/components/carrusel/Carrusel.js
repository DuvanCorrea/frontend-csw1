<<<<<<< HEAD
// import React, { useState, useEffect } from "react";
// import "../../components/carrusel/Carrusel.css";
// import "../../components/carrusel/Complemento";
// import getMateriales from "../../servicios/getMateriales";

// const Carrusel = () => {
//   const [vector, setVector] = useState([]);

//   //Trae los datos de materiales
//   useEffect(() => {
//     const aux = async () => {
//       const { data } = await getMateriales();
//       setVector((e) => {
//         return data;
//       });
//     };
//     aux();
//   }, [setVector]);

//   return (
//     <div className="contenedor-carousel">
//       <div className="container">
//         <div className="row">
//           <div className="col s12">
//             <div className="carousel center-align">
//               {vector.map((element) => {
//                 return (
//                   <div className="carousel-item">
//                     <div className="informacion">
//                       <p>Titulo: {element.titulo_material}</p>
//                       <p>Docente: {element.link_material}</p>
//                       <p>Año: {element.fecha_material}</p>
//                       <p>Ubicación: {element.link_archivo_material}</p>
//                     </div>
//                     <div className="enlaces">
//                       <button className="btn">Descargar material</button>
//                       <a href="/#" className="ver">
//                         Ver reconocimientos
//                       </a>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
=======
import React from "react";
import "../../components/carrusel/Carrusel.css";
import "../../components/carrusel/Complemento";
import CardsCarrusel from "../cards/CardsCarrusel";

const Carrusel = ({ vectorMaterial }) => {
  return (
    <div className="contenedor-carousel">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="carousel center-align">
              
              <div className="carousel-item">
                
                <div className="informacion">
                  <p>Titulo: </p>
                  <p>Docente: </p> 
                  <p>Añoo: </p>
                  <p>Ubicación: </p>
                </div>
                <div className="enlaces">
                  <button className="btn">Descargar material</button>
                  <a href="/#" className="ver">
                    Ver reconocimientos
                  </a>
                </div>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
>>>>>>> 6a293e28f4da8f83a2c4651030fa4f911762e7d5

// export default Carrusel;
