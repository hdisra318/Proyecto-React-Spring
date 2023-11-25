import "./inicio.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Inicio() {
  return (
    <>
        <Header user="Clientes"/>
        <main className="pt-4 pb-4">
            <h1 className="text-center mb-5">
                Bienvenido a <span className="fuente-cursiva">EnsaladasCiencias</span>
            </h1>

            <h2 className="text-center">¿A donde quieres ir?</h2>

            <div className="d-flex justify-content-center bg-dark bg-gradient m-5 rounded p-5">
            <div className="boton-menu boton-menu-1 bg-gradient m-4 me-5 rounded">
                <Link to="/menu" className="text-white btn">Menú de Ensaladas</Link>
            </div>
            <div className="boton-menu boton-menu-2 bg-gradient m-4 me-5 rounded">
                <Link to="/inventario" className="text-white btn">Inventario actual</Link>
            </div>
            <div className="boton-menu boton-menu-3 bg-gradient m-4 me-5 rounded">
                <Link to="/recetas" className="text-white btn">Recetas</Link>
            </div>
            <div className="boton-menu boton-menu-4 bg-gradient m-4 rounded">
                <Link to="/usuario" className="text-white btn">Usuarios</Link>
            </div>
            </div>
        </main>
    </>
  );
}
