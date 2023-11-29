import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inicio from './pages/Inicio';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Menu from './pages/Menu';
import Recetas from './pages/Recetas';
import Receta from './pages/Receta';
import Usuario from './pages/Usuario';
import FormularioAgregarUsuario from './pages/FormularioAgregarUsuario';
import FormularioEditarUsuario from './pages/FormularioEditarUsuario';
import Inventario from "./pages/Inventario";
import FormularioAgregarIngrediente from './pages/FormularioAgregarIngrediente';
import FormularioEditarIngrediente from './pages/FormularioEditarIngrediente';

// Para manejar las rutas con React para que la carga inicial de la aplicación sea más rapida 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>
  },
  {
    path: "/menu",
    element: <Menu/>
  },
  {
    path: "/recetas",
    element: <Recetas/>
  },
  {
    path: "/recetas/receta1",
    element: <Receta numero={1}/>
  },
  {
    path: "/recetas/receta2",
    element: <Receta numero={2}/>
  },
  {
    path: "/recetas/receta3",
    element: <Receta numero={3}/>
  },
  {
    path: "/usuario",
    element: <Usuario />
  },
  {
    path: "/usuario/formularioAgregarUsuario",
    element: <FormularioAgregarUsuario />
  },
  {
    path: "/usuario/formularioEditarUsuario/:id_usuario",
    element: <FormularioEditarUsuario />
  },
  {
    path: "/inventario",
    element: <Inventario />
  },
  {
    path: "/producto/formularioAgregarIngrediente",
    element: <FormularioAgregarIngrediente />
  },
  {
    path: "/producto/formularioEditarIngrediente/:id_producto",
    element: <FormularioEditarIngrediente />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router}/>
  </>
);


