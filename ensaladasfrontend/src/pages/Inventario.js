import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BotonRegresar from "../components/BotonRegresar";

import Header from "../components/Header";
import BotonEliminar from "../components/BotonEliminar";
import "./inventario.css";

export default function Inventario() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/inventario/")
      .then((res) => res.json())
      .then((result) => {
        setProductos(result);
      })
      .catch((error) =>
        console.error("Error al obtener los productos:", error)
      );
  }, []);

  return (
    <>
      <Header user="Administrador" />

      <main className="pt-4 pb-4">
        <h1 className="mb-4">Ingredientes registrados</h1>

        <div className="inventario inventario-margen">
          <table className="table">
            <thead className="table-success">
              <tr>
                <th scope="col">Nombre del ingrediente</th>
                <th scope="col">Tipo ingrediente</th>
                <th scope="col">Medida</th>
                <th scope="col">Stock</th>
                <th scope="col">Costo</th>
                <th scope="col">Fecha de Adquisicion</th>
                <th scope="col">Fecha de Caducidad</th>
                <th scope="col">Nombre del Proveedor</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Comentarios</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr>
                  <th scope="row">{producto.nombreProducto}</th>
                  <td>{producto.tipoProducto}</td>
                  <td>{producto.medida}</td>
                  <td>{producto.stock}</td>
                  <td>${producto.costo}</td>
                  <td>{producto.fechaAdquision}</td>
                  <td>{producto.fechaCaducidad}</td>
                  <td>{producto.nombreProveedor}</td>
                  <td>{producto.descripcion}</td>
                  <td>{producto.comentarios}</td>
                  <td>
                    <Link
                      className="btn btn-primary"
                      to={`/producto/formularioEditarIngrediente/${producto.idProducto}`}
                    >
                      Editar Ingrediente
                    </Link>
                  </td>
                  <td>
                    <BotonEliminar
                      id={producto.idProducto}
                      tipo="ingrediente"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-end mt-5 receta-boton pt-5">
          {/* Crea un enlace de navegación entre las vistas (o componentes) */}
          <Link
            className="btn btn-success ps-4 pe-4"
            to="/producto/formularioAgregarIngrediente"
          >
            Agregar ingrediente
          </Link>
        </div>

        <BotonRegresar  ruta="/" />
      </main>
    </>
  );
}
