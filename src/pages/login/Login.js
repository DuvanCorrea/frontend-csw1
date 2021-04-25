import React, { useContext, useEffect, useState } from "react";
import docenteContext from "../../context/docenteContext";
import postDocenteLogin from "../../servicios/login";
import Navbar from "../../components/navbar/Navbar";
import Cargando from "../../components/cargando/cargando";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import Logo from "../../images/Logo.svg";
import Form from "react-bootstrap/Form";
import "./Login.css";


export default function Login() {
  const { docente, setDocente } = useContext(docenteContext);
  const [password, setPassword] = useState("");
  const [valido, setValido] = useState(null);
  const [email, setEmail] = useState("");
  const [cargando, setCargando] = useState(false)
  const history = useHistory();

  useEffect(() => {
    setValido(null);
  }, [])

  function handleSubmit(event) {

    setCargando(true)

    // console.log("hola")
    // Hace peticion al servidor por medio del servicio creado
    // -------------------------------------------------------

    const credenciales = {
      correo: email,
      clave: password
    }

    // funcion auxiliar para hacer peticion, si no se usa 
    // devolveria una peticion pendiente, pero usando
    // async await se espera a que se resulva esa peticion
    // y solomostrara la data cuando este lista
    // ---------------------------------------------------

    const aux = async () => {
      const { data } = await postDocenteLogin({ credenciales })
      if (data) {
        if (data.valido === true) {
          setValido(true)

          // en la siguiente linea de codigo de guarda el docente 
          // en un estado global con el sigiente formato
          // {
          //   id,
          //   nombre,
          //   correo,
          //   nacimiento,
          //   areas,
          //   materia,
          // }
          // ----------------------------------------------------
          setDocente(data.docente)

          history.push("/Docente")
        } else {
          setValido(false)
        }
      } else {
        setValido(false)
      }
      setCargando(false)
    }

    aux()

    event.preventDefault();
  }


  if (docente && docente.id) {
    history.push("/Docente")
  }

  return (
    <><Navbar />
      <div className="row">

        <div className="col s3">

        </div>

        {/* Columna para el inicio de session */}
        <div className="col s6">
          <div className="contenerdor-login-a">
            <div className="contenedor-login">
              <img src={Logo} alt="Logo" />
              <p className="titulo-registo">MaterialGestor</p>
              <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email" className="form">
                  <span>Correo electrónico</span>
                  <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    className="browser-default input"
                    placeholder="Correo electronico"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group size="lg" controlId="password" className="form">
                  <span>Contraseña</span>
                  <Form.Control
                    type="password"
                    value={password}
                    className="browser-default input"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  className="btn btn-ingresar"
                  type="submit"
                  disabled={false}
                >
                  Ingresar
          </Button>
                <p>{valido === null || valido ? <></> : <span className="error">Correo o contraseña incorrectos</span>}</p>

              </Form>
            </div>
          </div>
        </div>

        {/* Columna para animaciones o videos */}
        <div className="col s3">
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MPhAmsVtgAs?rel=0&amp;autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe> */}
        </div>

      </div>

      {/* Cargando */}
      {cargando ? <Cargando /> : ""}
    </>
  );
}
