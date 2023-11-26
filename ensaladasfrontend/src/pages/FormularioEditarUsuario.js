import { useState, useEffect } from "react";

import Header from "../components/Header";

export default function FormularioEditarUsuario({id_usuario}) {

    const [usuario, setUsuario] = useState({
        nombre: '',
        curp: '',
        aPaterno: '',
        aMaterno: '',
        saldo: 0,
      });

    
    useEffect(() => {
        // Realiza una solicitud para obtener los datos del usuario por su ID
        const obtenerUsuario = async () => {
          try {
            const response = await fetch(`http://localhost:8080/usuario/${id_usuario}`);
            const data = await response.json();
    
            // Actualiza el estado con los datos del usuario
            setUsuario(data);
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
            }
        };
    
        obtenerUsuario();
    }, [id_usuario]);


    const handleChange = (e) => {
        // Maneja los cambios en los campos del formulario
        const { name, value } = e.target;
        setUsuario((prevUsuario) => ({ ...prevUsuario, [name]: value }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Realiza una solicitud PUT al backend para actualizar el usuario
          const response = await fetch(`http://localhost:8080/usuario/${id_usuario}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
          });
    
          if (response.ok) {
            // Si la actualización es exitosa, puedes realizar alguna acción adicional
            console.log('Usuario actualizado exitosamente');
          } else {
            console.error('Error al actualizar el usuario');
          }
        } catch (error) {
          console.error('Error de red:', error);
        }
    };

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