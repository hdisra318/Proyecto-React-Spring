import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Inicio from './pages/Inicio';
import { Router, Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Menu from './pages/Menu';
import Recetas from './pages/Recetas';
import Receta from './pages/Receta';
import Usuario from './pages/Usuario';
import FormularioAgregarUsuario from './pages/FormularioAgregarUsuario';
import FormularioEditarUsuario from './pages/FormularioEditarUsuario';

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
    path: "/usuario/formularioEditarUsuario",
    element: <FormularioEditarUsuario />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router}/>
  </>
);


