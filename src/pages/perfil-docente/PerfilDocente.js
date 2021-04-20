import React, { useEffect, useState } from "react";
import NavbarDocente from "../../components/navbar_docente/NavbarDocente";
import UsuarioIcon from "../../images/UsuarioIcon.svg";
import getMateriales from "../../servicios/getMateriales";
import Cards from '../../components/cards/Cards';
import "./PerfilDocente.css";

//Lo que se renderisa
function PerfilDocente() {
  const [vector, setVector] = useState([]);

  useEffect(() => {
    const aux = async () => {
      const { data } = await getMateriales();
      setVector(e => {
        return data
      });
    };
    aux();
  }, [setVector]);

  console.log('este si',vector)

  return (
    <>
      <NavbarDocente />
      <div className="contenedor-perfil" >
        <div className="contenedor-perfil-docente">
          <h2 className="titulos-perfil">Perfil docente</h2>
          <img src={UsuarioIcon} alt="Logo" />
          <p>Nombre: Jose Maria Castaño</p>
          <p>Materia: Ciencisas Siciales</p>
          <p>Enforque material: Animales</p>
          <p></p>
        </div>
      
        <div className="contenedor-materiales">
          <h2>Materiales diseñados</h2>
          {
          vector.map((element) => {
            return (
              <div>
                <Cards key={element.id}{...element}/>
              </div>
            )
          })}
        </div>

        <div className="contenedor-reconocimientos">
          <h2>Reconocimientos</h2>
        </div>
      </div>
    </>
  );
}

export default PerfilDocente;
