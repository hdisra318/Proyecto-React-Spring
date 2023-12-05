import Header from "../components/Header";
import Ensalada from "../components/Ensalada";

import './menu.css';
import BotonRegresar from "../components/BotonRegresar";

export default function Menu() {

    return (
        <>
            <Header user="Clientes"/>
            <main className="pt-4 pb-4">
                <h1 className="text-center mb-4">Menú</h1>

                {/* Ensalada 1 */}
                <div className="primera-receta rounded container p-4">
                    <Ensalada ensalada="Ensalada Cesar"
                        costo={150}
                        imagen="./img/ensalada_cesar.jpeg"
                        alt="imagen de ensalada tipo cesar"
                        descripcion="Es una ensalada de lechuga romana y croûtons con jugo de limón, aceite de oliva, huevo, salsa Worcestershire,
                        anchoas, ajo, mostaza de Dijon, queso parmesano y pimienta negra. La ensalada César original no contiene pollo,
                        aunque se le suele agregar habitualmente."/>
                </div>

                {/* Ensalada 2*/}
                <div className="segunda-receta container rounded mt-5 p-4">
                    <Ensalada ensalada="Ensalda Rusa"
                        costo={80}
                        imagen="./img/ensalada_rusa.jpeg"
                        alt="imagen de ensalada tipo rusa"
                        descripcion="Esta ensalada de papas y verduras con un aderezo de mayonesa es muy conocida en Rusia, por toda Europa y 
                        también en América del Sur." />
                </div>

                {/* Ensalada 3*/}
                <div className="primera-receta container rounded mt-5 p-4">
                    <Ensalada ensalada="Ensalda Kartoffelsalat"
                        costo={120}
                        imagen="./img/ensalada_Kartoffelsalat.jpeg"
                        alt="imagen de ensalada tipo kartoffe"
                        descripcion="La Kartoffelsalat (en Austria denominada también Erdäpfelsalat) o ensalada de papas es uno de los platos más conocidos
                        en la cocina alemana. Se trata de un plato compuesto principalmente de varios tipos de papas cocidas acompañadas de 
                        diferentes ingredientes." />
                </div>

                <BotonRegresar  ruta="/" />
            </main>
        </>
    );
}