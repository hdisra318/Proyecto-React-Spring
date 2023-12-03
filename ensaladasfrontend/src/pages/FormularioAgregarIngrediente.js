import Header from "../components/Header";
import { useState } from "react";
import { Navigate } from 'react-router-dom';

export default function FormularioAgregarIngrediente() {

    const [redirect, setRedirect] = useState(false);

    // Estado para almacenar los datos del nuevo producto
    const [producto, setProducto] = useState({
        nombreProducto: '',
        tipoProducto: '',
        stock: 0,
        medida: '',
        costo: 0,
        fechaAdquision: '',
        fechaCaducidad: '',
        nombreProveedor: '',
        descripcion: '',
        comentarios: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        fetch("http://localhost:8080/producto/formularioAgregarIngrediente",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(producto)
    
        }).then(()=>{
            console.log("Producto agregado")
            setRedirect(true);
        }).catch((e) => {
            console.log("Ocurrio un error: "+e)
        })
    };

    if (redirect) {
        return <Navigate to="/inventario" />;
    }

    return (

        <>
            <Header user="Administrador" />

            <main className="pt-4 pb-4">
                <h1 className="text-center">Escribe los datos del nuevo ingrediente</h1>

                <form onSubmit={handleSubmit} method="POST" className="mx-auto p-5 w-50">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            required
                            name="nombreProducto"
                            value={producto.nombreProducto}
                            onChange={handleChange}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tipoProducto" className="form-label">Tipo producto</label><br/>
                        <select
                            required
                            name="tipoProducto"
                            id="tipoProducto"
                            value={producto.tipoProducto}
                            onChange={handleChange}
                            className="form-select"
                        >
                            <option value="">Escoge el tipo del producto</option>
                            <option value="solido">Sólido</option>
                            <option value="liquido">Líquido</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stock" className="form-label">Cantidad </label>
                        <input
                            type="number"
                            className="form-control"
                            id="stock"
                            required
                            name="stock"
                            value={producto.stock}
                            onChange={handleChange}
                            min={0}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="medida" className="form-label">Medida</label><br/>
                        <select
                            required
                            name="medida"
                            id="medida"
                            value={producto.medida}
                            onChange={handleChange}
                            className="form-select"
                        >
                            <option value="">Escoge la medida del producto</option>
                            <option value="kg">Kilogramos</option>
                            <option value="gr">Gramos</option>
                            <option value="lb">Libras</option>
                            <option value="piezas">Piezas</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="costo" className="form-label">Costo</label>
                        <input
                            type="number"
                            className="form-control"
                            id="costo"
                            required
                            name="costo"
                            value={producto.costo}
                            onChange={handleChange}
                            min={0}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fechaAdquision" className="form-label">Fecha de Adquisión</label>
                        <input
                            type="date"
                            className="form-control"
                            id="fechaAdquision"
                            value={producto.fechaAdquision}
                            onChange={handleChange}
                            required
                            name="fechaAdquision"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fechaCad" className="form-label">Fecha de Caducidad</label>
                        <input
                            type="date"
                            className="form-control"
                            id="fechaCad"
                            value={producto.fechaCaducidad}
                            onChange={handleChange}
                            required
                            name="fechaCaducidad"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nombreProveedor" className="form-label">Nombre del proveedor</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombreProveedor"
                            required
                            name="nombreProveedor"
                            value={producto.nombreProveedor}
                            onChange={handleChange}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">Descripción</label>
                        <textarea
                            required
                            name="descripcion"
                            className="form-control textarea-form"
                            id="descripcion"
                            cols="100"
                            rows="10"
                            value={producto.descripcion}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="comentarios" className="form-label">Comentarios</label>
                        <textarea
                            name="comentarios"
                            className="form-control textarea-form"
                            id="comentarios"
                            cols="100"
                            rows="10"
                            value={producto.comentarios}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    
                    <div className="d-flex justify-content-end mt-5">
                        <button type="submit" className="btn btn-success">Registrar</button>
                    </div>

                </form>
            </main>
        
        </>

    );
}