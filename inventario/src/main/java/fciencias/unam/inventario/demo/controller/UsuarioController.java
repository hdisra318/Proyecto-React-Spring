package fciencias.unam.inventario.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;

import fciencias.unam.inventario.demo.entity.Usuario;
import fciencias.unam.inventario.demo.repository.UsuarioRepository;
import jakarta.validation.Valid;

@Controller
@CrossOrigin // Para que las solicitudes se realicen desde dominios diferentes al del la carpeta 'inventario'
@RequestMapping("/usuario")
public class UsuarioController {
    
    @Autowired
    private UsuarioRepository repo;

    // READ
    @GetMapping("/")
    public ResponseEntity<List<Usuario>> index(Model model) {
        List<Usuario> usuarios = repo.findAll();
        model.addAttribute("usuarios", usuarios);
       return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }

    // CREATE
    // @GetMapping("/formularioAgregarUsuario")
    // public String agregarUsuario(Model model) {
    //     model.addAttribute("usuario", new Usuario());
    //     return "usuario/formularioAgregarUsuario";
    // }

    @PostMapping("/formularioAgregarUsuario")
    public ResponseEntity<?> procesandoAgregarUsuario(@RequestBody Usuario nuevoUsuario, BindingResult result) {

        System.out.println(nuevoUsuario);
        if (result.hasErrors()) {
            System.out.println("Ocurrio un error");
        }
        Usuario usuario = repo.save(nuevoUsuario);
        System.out.println(usuario);
        return new ResponseEntity<>(usuario, HttpStatus.CREATED);

    }

    // UPDATE
    @GetMapping("/formularioEditarUsuario/{id}")
    public String editarUsuario(@PathVariable long id, Model model) {

        // Obteniedo usuario
        Usuario usuario = repo.findById(id).orElse(null);

        model.addAttribute("usuario", usuario);
        model.addAttribute("id", id);

        return "usuario/formularioEditarUsuario";
    }

    @PostMapping("/formularioEditarUsuario/{id}")
    public String procesandoEditarUsuario(@PathVariable long id, @Valid @ModelAttribute Usuario usuario, BindingResult result) {

        System.out.println(usuario);
        if (result.hasErrors()) {
            return "usuario/formularioEditarUsuario";
        }

        // Actualizando los datos
        Usuario usuarioActual = repo.findById(id).orElse(null);
        usuarioActual.setCurp(usuario.getCurp());
        usuarioActual.setNombre(usuario.getNombre());
        usuarioActual.setAPaterno(usuario.getAPaterno());
        usuarioActual.setAMaterno(usuario.getAMaterno());
        usuarioActual.setSaldo(usuario.getSaldo());

        repo.save(usuarioActual);
        return "redirect:/usuario/";
    }

    // DELETE
    @DeleteMapping("/eliminarUsuario/{id}")
    public ResponseEntity<String> eliminarUsuario(@PathVariable long id) {
        repo.deleteById(id);
        return ResponseEntity.ok("Usuario eliminado exitosamente");
    }

}
