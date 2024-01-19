import './header.css';

import { Link } from 'react-router-dom';

function Header({user=""}) {
  return (
    <header className="bg-dark pt-1 pb-1 ps-3 pe-3">
      <nav className="navbar d-flex">
        <h2 className="display-6 m-0 fuente-cursiva">
          <Link to="/" className="text-white text-decoration-none">
            EnsaladasCiencias
          </Link>
        </h2>

        <p className="usuario m-0">{user}</p>

        <div className='contenedor-menu d-flex justify-content-center'>
            <div className="">
                <Link to="/menu" className="text-white btn h_color">Menú de Ensaladas</Link>
            </div>
            <div className="">
              <Link to="/inventario" className="text-white btn h_color">Inventario actual</Link>
            </div>
            <div className="">
              <Link to="/recetas" className="text-white btn h_color">Recetas</Link>
            </div>
            <div className="">
              <Link to="/usuario" className="text-white btn h_color">Usuarios</Link>
            </div>
        </div>
      </nav>
      
    </header>
  );
}

export default Header;
