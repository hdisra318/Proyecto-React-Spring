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

import fciencias.unam.inventario.demo.entity.Producto;
import fciencias.unam.inventario.demo.repository.ProductoRepository;
import jakarta.validation.Valid;

@Controller
@CrossOrigin(origins = "http://localhost:3000") // Para que las solicitudes se realicen desde el dominio de la app hecha en React 
@RequestMapping("/producto")
public class ProductoController {

    @Autowired
    private ProductoRepository repo;

    // CREATE
    @PostMapping("/formularioAgregarIngrediente")
    public ResponseEntity<Producto> procesandoAgregarIngrediente(@RequestBody Producto nuevoIngrediente, BindingResult result) {

        System.out.println(nuevoIngrediente);

        if (result.hasErrors()) {
            System.out.println(result.getAllErrors());
        }

        Producto ingrediente = repo.save(nuevoIngrediente);
        return new ResponseEntity<>(ingrediente, HttpStatus.CREATED);

    }

    // UPDATE
    @GetMapping("/formularioEditarIngrediente/{id}")
    public ResponseEntity<Producto> editarIngrediente(@PathVariable long id) {

        // Obteniedo usuario
        Producto ingrediente = repo.findById(id).orElse(null);
        return new ResponseEntity<>(ingrediente, HttpStatus.OK);
    }

    @PostMapping("/formularioEditarIngrediente/{id}")
    public ResponseEntity<Producto> procesandoEditarIngrediente(@PathVariable long id, @Valid @RequestBody Producto ingrediente, BindingResult result) {

        if (result.hasErrors()) {
            System.out.println(result.getAllErrors());
        }

        // Actualizando los datos
        Producto ingredienteActual = repo.findById(id).orElse(null);
        ingredienteActual.setNombreProveedor(ingrediente.getNombreProveedor());
        ingredienteActual.setNombreProducto(ingrediente.getNombreProducto());
        ingredienteActual.setCosto(ingrediente.getCosto());
        ingredienteActual.setStock(ingrediente.getStock());
        ingredienteActual.setMedida(ingrediente.getMedida());
        ingredienteActual.setFechaAdquision(ingrediente.getFechaAdquision());
        ingredienteActual.setFechaCaducidad(ingrediente.getFechaCaducidad());
        ingredienteActual.setTipoProducto(ingrediente.getTipoProducto());
        ingredienteActual.setDescripcion(ingrediente.getDescripcion());
        ingredienteActual.setComentarios(ingrediente.getComentarios());

        repo.save(ingredienteActual);

        return new ResponseEntity<>(ingredienteActual, HttpStatus.CREATED);
    }

    // DELETE
    @DeleteMapping("/eliminarIngrediente/{id}")
    public ResponseEntity<String> eliminarIngrediente(@PathVariable long id) {
        repo.deleteById(id);
        return ResponseEntity.ok("Ingrediente eliminado exitosamente");
    }   
}
