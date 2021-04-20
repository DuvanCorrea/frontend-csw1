import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "../../images/Logo.svg";
import "./Login.css";
import postDocenteLogin from "../../servicios/login";
import { useHistory } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valido, setValido] = useState(null)

  const history = useHistory()

  useEffect(() => {
    setValido(null)
  }, [])

  function handleSubmit(event) {
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
      console.log(data)
      if (data) {
        if (data.valido === true) {
          setValido(true)
          history.push("/Docente")
        }
      } else {
        setValido(false)
      }

    }

    aux()

    event.preventDefault();
  }

  return (
    <div className="contenerdor-login-a">
      <div className="contenedor-login">
        <img src={Logo} alt="Logo" />
        <p className="titulo-registo">MaterialGestor</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email" className="form">
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
            <Form.Control
              type="password"
              value={password}
              className="browser-default input"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <p>{valido === null || valido ? <></> : <p>Correo o contraseña incorrectos</p>}</p>
          <Button
            className="btn btn-ingresar"
            type="submit"
            disabled={false}
          >
            Ingresar
          </Button>
        </Form>
      </div>
    </div>
  );
}
