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
import java.util.Arrays;

import fciencias.unam.inventario.demo.entity.Producto;
import fciencias.unam.inventario.demo.repository.ProductoRepository;
import jakarta.validation.Valid;

@Controller
@CrossOrigin(origins = "http://localhost:3000") // Para que las solicitudes se realicen desde dominios diferentes al del la carpeta 'producto'
@RequestMapping("/producto")
public class ProductoController {

    @Autowired
    private ProductoRepository repo;
    
    @ModelAttribute
    public void init(Model model) {
        Producto producto = new Producto();
        model.addAttribute("producto", producto);
    }

    // CREATE
    @PostMapping("/formularioAgregarIngrediente")
    public ResponseEntity<?> procesandoAgregarIngrediente(@RequestBody Producto nuevoIngrediente, BindingResult result) {

        System.out.println(nuevoIngrediente);

        if (result.hasErrors()) {
            System.out.println(result.getAllErrors());
        }

        Producto ingrediente = repo.save(nuevoIngrediente);
       
        return new ResponseEntity<>(ingrediente, HttpStatus.CREATED);

    }

    @GetMapping("/formularioEditarIngrediente")
    public String editarIngrediente() {
        return "producto/formularioEditarIngrediente";
    }

    // UPDATE
    @GetMapping("/formularioEditarIngrediente/{id}")
    public ResponseEntity<Producto> editarIngrediente(@PathVariable long id, Model model) {

        // Obteniedo usuario
        Producto ingrediente = repo.findById(id).orElse(null);
        System.out.println("Ingrediente: ");
        System.out.println(ingrediente);
        model.addAttribute("producto", ingrediente);
        model.addAttribute("id", id);

        return new ResponseEntity<>(ingrediente, HttpStatus.OK);
    }

    @PostMapping("/formularioEditarIngrediente/{id}")
    public String procesandoEditarIngrediente(@PathVariable long id, @Valid @RequestBody Producto ingrediente, BindingResult result) {

        System.out.println(ingrediente);
        if (result.hasErrors()) {
            return "producto/formularioEditarIngrediente";
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
        return "redirect:/inventario/";
    }

    @ModelAttribute("opcionesTipo")
    public List<String> getOpcionesTipo() {
        return Arrays.asList("solido", "liquido");
    }

    @ModelAttribute("opcionesMedida")
    public List<String> getOpcionesMedida() {
        return Arrays.asList("kg", "gr", "lb", "piezas");
    }

    // DELETE
    @DeleteMapping("/eliminarIngrediente/{id}")
    public ResponseEntity<String> eliminarIngrediente(@PathVariable long id) {
        repo.deleteById(id);
        return ResponseEntity.ok("Ingrediente eliminado exitosamente");
    }   
}
