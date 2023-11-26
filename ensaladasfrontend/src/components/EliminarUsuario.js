import { Navigate } from 'react-router-dom';


export default function EliminarUsuario({id_usuario}) {

    const handleClick = async () => {
        try {
          // Realiza una solicitud DELETE al backend para eliminar el usuario
          const response = await fetch(`http://localhost:8080/usuario/eliminarUsuario/${id_usuario}`, {
            method: 'DELETE',
          });
    
          if (response.ok) {
            // Si la eliminación es exitosa, actualiza el estado o realiza alguna acción adicional
            console.log("Usuario eliminado");
            window.location.reload();
          } else {
            console.error('Error al eliminar el usuario');
          }
        } catch (error) {
          console.error('Error de red:', error);
        }
      };
    
      return (
        <button onClick={handleClick} className="btn btn-danger">
          Eliminar Usuario
        </button>
      );


}