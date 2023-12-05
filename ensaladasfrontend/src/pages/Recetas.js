import Header from "../components/Header";
import { Link } from "react-router-dom";
import BotonRegresar from "../components/BotonRegresar";

export default function Recetas() {

    return (
        <>
            <Header user="Clientes"/>

            <main className="pt-4 pb-4">
                <h1 className="text-center mb-5">Bienvenido a <span className="fuente-cursiva">EnsaladasCiencias</span></h1>

                <h2 className="text-center">Escoge una receta a ver</h2>
            
                <div className="contenedor-menu d-flex bg-dark justify-content-center bg-gradient m-5 rounded p-5">
                    <div className="boton-menu boton-menu-1 boton-menu-receta-1 m-4 me-5 rounded">
                        <Link to="/recetas/receta1" className="text-white btn">Receta 1</Link>
                    </div>
                    <div className="boton-menu boton-menu-3 boton-menu-receta-3 m-4 me-5 rounded">
                        <Link to="/recetas/receta2" className="text-white btn">Receta 2</Link>
                    </div>
                    <div className="boton-menu boton-menu-2 boton-menu-receta-2 m-4 rounded">
                        <Link to="/recetas/receta3" className="text-white btn">Rectea 3</Link>
                    </div>
                </div>

                <BotonRegresar  ruta="/" />
            </main>
        </>
    );


}