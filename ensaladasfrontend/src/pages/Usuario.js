import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

import "./usuario.css";
import BotonEliminar from "../components/BotonEliminar";
import BotonRegresar from "../components/BotonRegresar";

export default function Usuario() {
  const [usuarios, setUsuarios] = useState([]);

  // Obteniendo los usuarios
  useEffect(() => {
    fetch("http://localhost:8080/usuario/")
      .then((res) => res.json())
      .then((result) => {
        setUsuarios(result);
      })
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  return (
    <>
      <Header user="Administrador" />

      <main className="pt-4 pb-4">
        <h1 className="mb-4"> Usuarios registrados</h1>

        <div className="usuarios">
          <table className="table">
            <thead className="table-success">
              <tr>
                <th scope="col">Nombre del usuario</th>
                <th scope="col">CURP</th>
                <th scope="col">Apellido paterno</th>
                <th scope="col">Apellido materno</th>
                <th scope="col">Saldo</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr>
                  <th scope="row">{usuario.nombre}</th>
                  <td>{usuario.curp}</td>
                  <td>{usuario.aPaterno}</td>
                  <td>{usuario.aMaterno}</td>
                  <td>{usuario.saldo}</td>
                  <td>
                    <Link
                      className="btn btn-primary"
                      to={`formularioEditarUsuario/${usuario.id_usuario}`}
                    >
                      Editar usuario
                    </Link>
                  </td>
                  <td>
                    <BotonEliminar id={usuario.id_usuario} tipo="usuario" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-end mt-5 receta-boton">
          <Link
            className="btn btn-success ps-4 pe-4"
            to="formularioAgregarUsuario"
          >
            Agregar usuario
          </Link>
        </div>

        <BotonRegresar  ruta="/" />
      </main>
    </>
  );
}
