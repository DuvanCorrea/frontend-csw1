import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./components/navbar/Navbar.css";
import AcercaDe from "./pages/Acerca-de/AcercaDe";
import PrincipalDocente from './pages/Principal-docente/PrincipalDocente';
import Principal from "./pages/Principal/Principal";
import SubirMaterial from "./pages/Subir-material/SubirMaterial";
import SubirReconocimiento from './pages/Subir-reconocimiento/SubirReconocimiento';
import RegistroUsuario from './pages/Registro-usuario/RegistroUsuario';

function App() {
  return (
    <Router>
      <div className="Contenedor-app">
        <Route exact={true} path="/Docente/Subir material" component={SubirMaterial} />
        <Route exact={true} path="/Docente/Subir reconocimiento" component={SubirReconocimiento}/>
        <Route exact={true} path="/Registro usuario" component={RegistroUsuario} />
        <Route exact={true} path="/Acerca de" component={AcercaDe} />
        <Route exact={true} path="/Docente" component={PrincipalDocente} />
        <Route exact={true} path="/" component={Principal} />
      </div>
    </Router>
  );
}

export default App;
