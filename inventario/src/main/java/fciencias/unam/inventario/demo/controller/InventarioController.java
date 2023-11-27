package fciencias.unam.inventario.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import fciencias.unam.inventario.demo.entity.Producto;
import fciencias.unam.inventario.demo.repository.InventarioRepository;


@Controller
@RequestMapping("/inventario")
@CrossOrigin(origins = "http://localhost:3000") // Para que las solicitudes se realicen desde dominios diferentes al del la carpeta 'inventario'
public class InventarioController {

    @Autowired
    private InventarioRepository repo;


    @GetMapping("/")
    public ResponseEntity<List<Producto>> index(Model model) {
        List<Producto> ingredientes=repo.findAll();
        model.addAttribute("ingredientes",ingredientes);
        return new ResponseEntity<>(ingredientes, HttpStatus.OK);
    } 
}
