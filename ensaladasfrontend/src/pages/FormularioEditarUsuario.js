import { useState, useEffect } from "react";
import { Navigate, useParams } from 'react-router-dom';

import Header from "../components/Header";

export default function FormularioEditarUsuario() {

    // Obteniendo el id del usuario de la ruta
    const { id_usuario } = useParams();

    const [redirect, setRedirect] = useState(false);

    // Usuario a actualizar
    const [usuario, setUsuario] = useState({
        nombre: '',
        curp: '',
        aPaterno: '',
        aMaterno: '',
        saldo: 0,
      });


      useEffect(() => {
        const obtenerDatosUsuario = async () => {
          try {
            const response = await fetch(`http://localhost:8080/usuario/formularioEditarUsuario/${id_usuario}`);
            const data = await response.json();
            setUsuario(data);
          } catch (error) {
            console.error('Error al obtener los datos del usuario', error);
          }
        };
    
        obtenerDatosUsuario();
      }, []);
    

    const handleChange = (e) => {
        // Maneja los cambios en los campos del formulario
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/usuario/formularioEditarUsuario/${id_usuario}`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(usuario)
    
        }).then(()=>{
            console.log("Usuario actualizado")
            setRedirect(true);
        }) 
    
    };


    if (redirect) {
        return <Navigate to="/usuario" />;
    }

    return (
        <>
            <Header user="Administrador" />

            <main className="pt-4 pb-4">
                <h1 className="text-center">Actualiza los datos del usuario</h1>

                <form onSubmit={handleSubmit} method="POST" className="mx-auto p-5 w-50">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            name="nombre"
                            required
                            value={usuario.nombre}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="curp" className="form-label">CURP</label>
                        <input
                            type="text"
                            className="form-control"
                            id="curp"
                            name="curp"
                            required
                            value={usuario.curp}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="aPaterno" className="form-label">Apellido paterno</label>
                        <input
                            type="text"
                            className="form-control"
                            id="aPaterno"
                            name="aPaterno"
                            required
                            value={usuario.aPaterno}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="aMaterno" className="form-label">Apellido materno</label>
                        <input
                            type="text"
                            className="form-control"
                            id="aMaterno"
                            name="aMaterno"
                            required
                            value={usuario.aMaterno}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="saldo" className="form-label">Saldo</label>
                        <input
                            type="number"
                            className="form-control"
                            id="saldo"
                            name="saldo"
                            min="0"
                            value={usuario.saldo}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="d-flex justify-content-end mt-5">
                        <button type="submit" className="btn btn-primary">Actualizar</button>
                    </div>

                </form>
            </main>
        </>
    );

}