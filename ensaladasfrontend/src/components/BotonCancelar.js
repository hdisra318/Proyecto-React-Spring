import { Link } from "react-router-dom";

export default function BotonCancelar({ruta}) {

    return (
        <div className="d-flex">
            <Link
                className="btn btn-danger"
                to={ruta}
            >
                Cancelar
            </Link>
        </div>
    );
}