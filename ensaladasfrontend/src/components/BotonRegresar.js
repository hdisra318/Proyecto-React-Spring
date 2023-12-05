import { Link } from "react-router-dom";

export default function BotonRegresar({ruta}) {

    return (
        <>
            <Link
                className="btn btn-warning  mt-5 ms-5"
                to={ruta}
            >
                Regresar
            </Link>
        </>
    );
}