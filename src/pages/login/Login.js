import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "../../images/Logo.svg";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
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
          <Button 
          className="btn btn-ingresar" 
          type="submit" 
          disabled={!validateForm()}
          >
            Ingresar
          </Button>
        </Form>
      </div>
    </div>
  );
}
