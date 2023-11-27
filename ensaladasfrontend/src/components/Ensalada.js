/* Componente para una ensalada */
export default function Ensalada(props) {

    return (
        <>
            <h2>{props.ensalada}</h2>
            <p>Costo: <strong>${props.costo}</strong></p>
            <img src={props.imagen} alt={props.alt}
            className="mx-auto d-block rounded"/>
            <p className="mt-4">
                {props.descripcion}
            </p>
        </>
    );

}