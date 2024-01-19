import "./inicio.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Inicio() {
  return (
    <>
        <Header/>

        <main className="py-4 container h-90">
            <div className="d-flex align-items-center h-90">
                <div className="col text-center">
                    <h1 className="mb-4 display-2">
                        Bienvenido a <span className="fuente-cursiva">EnsaladasCiencias</span>
                    </h1>
                    <p className="lead">¡Las mejores Ensaladas de la Facultad de Ciencias!</p>

                    <div className="d-flex justify-content-end">
                        <div className="btn boton bg-gradient m-4 me-5 rounded">
                            <Link to="/acercade" className="text-white btn">Conócenos</Link>
                        </div>
                    </div>
                </div>

                <div className="col d-flex h-90 justify-content-center align-items-center">
                    <img src="/img/ensaladas_hero.jpg"
                        className="rounded make_bigger"
                    />
                </div>
            </div>
        </main>
        
        {/* <main className="pt-4 pb-4">
            

            <h2 className="text-center">¿A donde quieres ir?</h2>

            <div className="contenedor-menu d-flex justify-content-center bg-dark bg-gradient m-5 rounded p-5">
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
        </main> */}
    </>
  );
}
