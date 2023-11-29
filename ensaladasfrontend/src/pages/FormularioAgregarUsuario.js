import Header from "../components/Header";
import { useState } from "react";
import { Navigate } from 'react-router-dom';

export default function FormularioAgregarUsuario() {

    const [redirect, setRedirect] = useState(false);

    // Estado para almacenar los datos del nuevo usuario
    const [usuario, setUsuario] = useState({
        nombre: '',
        curp: '',
        aPaterno: '',
        aMaterno: '',
        saldo: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/usuario/formularioAgregarUsuario",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(usuario)
    
        }).then(()=>{
            console.log("Usuario agregado")
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
                <h1 className="text-center">Escribe los datos del nuevo usuario</h1>

                <form onSubmit={handleClick} method="POST" className="mx-auto p-5 w-50">
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
                        <button type="submit" className="btn btn-success">Registrar</button>
                    </div>

                </form>
            </main>
        </>
    );

}