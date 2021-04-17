import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Carrusel from './components/carrusel/Carrusel';

function App() {
  return (
    <div className = "Contenedor-app">
    <Navbar />   
    <Banner />
    <p className = "Sub-titulo">Materiales Publicados</p>
    <Carrusel />
    </div>
  );
}

export default App;
