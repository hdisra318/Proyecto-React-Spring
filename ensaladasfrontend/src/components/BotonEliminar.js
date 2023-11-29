export default function BotonEliminar({id, tipo}) {

    const handleClick = async () => {
        try {

          let response;

          if(tipo === "usuario"){
            // Realiza una solicitud DELETE al backend para eliminar un usuario
            response = await fetch(`http://localhost:8080/usuario/eliminarUsuario/${id}`, {
              method: 'DELETE',
            });
          } else if(tipo === "ingrediente") {
            // Realiza una solicitud DELETE al backend para eliminar un ingrediente
            response = await fetch(`http://localhost:8080/producto/eliminarIngrediente/${id}`, {
              method: 'DELETE',
            });

          }
          
          if (response.ok) {
            // Si la eliminación es exitosa, actualiza el estado o realiza alguna acción adicional
            console.log("Elemento eliminado");
            window.location.reload(); // Recarga la pagina
          } else {
            console.error('Error al eliminar el elemento');
          }
        } catch (error) {
          console.error('Error de red:', error);
        }
      };
    
      return (
        <button onClick={handleClick} className="btn btn-danger">
          Eliminar {tipo}
        </button>
      );


}