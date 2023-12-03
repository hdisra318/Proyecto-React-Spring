package fciencias.unam.inventario.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;

import fciencias.unam.inventario.demo.entity.Usuario;
import fciencias.unam.inventario.demo.repository.UsuarioRepository;
import jakarta.validation.Valid;

@Controller
@CrossOrigin(origins = "http://localhost:3000") // Para que las solicitudes se realicen desde el dominio de la app hecha en React 
@RequestMapping("/usuario")
public class UsuarioController {
    
    @Autowired
    private UsuarioRepository repo;

    // READ
    @GetMapping("/")
    public ResponseEntity<List<Usuario>> index() {
        List<Usuario> usuarios = repo.findAll();
        // Regresa una respuesta HTTP con un estado 200 (OK) y un cuerpo que contiene la lista de usuarios
        return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }

    // CREATE
    @PostMapping("/formularioAgregarUsuario")
    public ResponseEntity<Usuario> procesandoAgregarUsuario(@RequestBody Usuario nuevoUsuario, BindingResult result) {

        System.out.println(nuevoUsuario);
        if (result.hasErrors()) {
            System.out.println(result.getAllErrors());
        }
        Usuario usuario = repo.save(nuevoUsuario);
        System.out.println(usuario);
        return new ResponseEntity<>(usuario, HttpStatus.CREATED);

    }

    // UPDATE
    @GetMapping("/formularioEditarUsuario/{id}")
    public ResponseEntity<Usuario> editarUsuario(@PathVariable long id) {

        // Obteniedo usuario
        Usuario usuario = repo.findById(id).orElse(null);
        return new ResponseEntity<>(usuario, HttpStatus.OK);
    }

    @PostMapping("/formularioEditarUsuario/{id}")
    public ResponseEntity<Usuario> procesandoEditarUsuario(@PathVariable long id, @Valid @RequestBody Usuario usuario, BindingResult result) {

        if (result.hasErrors()) {
            System.out.println(result.getAllErrors());
        }

        // Actualizando los datos
        Usuario usuarioActual = repo.findById(id).orElse(null);
        usuarioActual.setCurp(usuario.getCurp());
        usuarioActual.setNombre(usuario.getNombre());
        usuarioActual.setAPaterno(usuario.getAPaterno());
        usuarioActual.setAMaterno(usuario.getAMaterno());
        usuarioActual.setSaldo(usuario.getSaldo());

        repo.save(usuarioActual);
        return new ResponseEntity<>(usuario, HttpStatus.CREATED);
    }

    // DELETE
    @DeleteMapping("/eliminarUsuario/{id}")
    public ResponseEntity<String> eliminarUsuario(@PathVariable long id) {
        repo.deleteById(id);
        return ResponseEntity.ok("Usuario eliminado exitosamente");
    }

}
