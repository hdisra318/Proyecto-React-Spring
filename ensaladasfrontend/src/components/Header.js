import './header.css';

import { Link } from 'react-router-dom';

function Header({user}) {
  return (
    <header className="bg-dark d-flex justify-content-between align-items-center pt-1 pb-1 ps-3 pe-3">
      <nav className="navbar">
        <h2 className="display-6 m-0 fuente-cursiva">
          <Link to="/" className="text-white text-decoration-none">
            EnsaladasCiencias
          </Link>
        </h2>
      </nav>
      <p className="text-white m-0">{user}</p>
    </header>
  );
}

export default Header;
