import { useState, useEffect } from "react";
import { Navigate, useParams } from 'react-router-dom';

import Header from "../components/Header";

export default function FormularioEditarUsuario() {

    const { id_usuario } = useParams();
    console.log(id_usuario)

    const [redirect, setRedirect] = useState(false);

    // Usuario a actualizar
    const [usuario, setUsuario] = useState({
        nombre: '',
        curp: '',
        aPaterno: '',
        aMaterno: '',
        saldo: 0,
      });

    const handleChange = (e) => {
        // Maneja los cambios en los campos del formulario
        const { name, value } = e.target;
        setUsuario((prevUsuario) => ({ ...prevUsuario, [name]: value }));
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

            <main class="pt-4 pb-4">
                <h1 class="text-center">Actualiza los datos del usuario</h1>

                <form  method="POST" class="mx-auto p-5 w-50">
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
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

                    <div class="mb-3">
                        <label for="curp" class="form-label">CURP</label>
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

                    <div class="mb-3">
                        <label for="aPaterno" class="form-label">Apellido paterno</label>
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

                    <div class="mb-3">
                        <label for="aMaterno" class="form-label">Apellido materno</label>
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

                    <div class="mb-3">
                        <label for="saldo" class="form-label">Saldo</label>
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
                    
                    <div class="d-flex justify-content-end mt-5">
                        <button type="submit" class="btn btn-primary">Actualizar</button>
                    </div>

                </form>
            </main>
        </>
    );

}