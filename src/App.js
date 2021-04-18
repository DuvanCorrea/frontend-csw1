import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./components/navbar/Navbar.css";
import AcercaDe from "./pages/Acerca-de/AcercaDe";
import PrincipalDocente from "./pages/Principa _docente/PrincipalDocente";
import Navbar from "./components/navbar/Navbar";
import Principal from "./pages/Principal/Principal";
import SubirMaterial from "./pages/Subir-material/SubirMaterial";

function App() {
  return (
    <Router>
      <div className="Contenedor-app">
        <Navbar />     
        
        <Route exact={ true } path="/Acerca de" component = { AcercaDe } />
        <Route exact={ true } path="/Docente" component = { PrincipalDocente }/>
        <Route exact={true} path="/Subir material" component={SubirMaterial}/>
        <Route exact={true} path="/" component={Principal}/>
      </div>
    </Router>
  );
}

export default App;
