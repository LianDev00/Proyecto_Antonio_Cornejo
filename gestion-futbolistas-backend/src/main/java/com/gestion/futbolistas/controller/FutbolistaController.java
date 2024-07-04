package com.gestion.futbolistas.controller;

import com.gestion.futbolistas.exception.ResourceNotFoundException;
import com.gestion.futbolistas.model.Futbolista;
import com.gestion.futbolistas.repository.FutbolistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class FutbolistaController {

    @Autowired
    private FutbolistaRepository futbolistaRepository;

    @GetMapping("/futbolista")
    public List<Futbolista> listarFutbolista(){
        return futbolistaRepository.findAll();
    }

    @PostMapping("/futbolista")
    public Futbolista guardarFutbolista(@RequestBody Futbolista futbolista) {
        return futbolistaRepository.save(futbolista);
    }

    @GetMapping("/futbolista/{id}")
    public ResponseEntity<Futbolista> listarFutbolistaPorId(@PathVariable Long id) {
        Futbolista futbolista = futbolistaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("El futbolista con ID: " + id + " no fue encontrado."));
        return  ResponseEntity.ok(futbolista);
    }

    @PutMapping("/futbolista/{id}")
    public ResponseEntity<Futbolista> actualizarFutbolista(@PathVariable Long id, @RequestBody Futbolista futbolistaRequest){
        Futbolista futbolista = futbolistaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("El futbolista con ID: " + id + " no due encontrado."));

        futbolista.setNombres(futbolistaRequest.getNombres());
        futbolista.setApellidos(futbolistaRequest.getApellidos());
        futbolista.setFechaNacimiento(futbolistaRequest.getFechaNacimiento());
        futbolista.setCaracteristicas(futbolistaRequest.getCaracteristicas());
        futbolista.setPosicion(futbolistaRequest.getPosicion());

        Futbolista futbolistaActualizado  = futbolistaRepository.save(futbolista);
        return ResponseEntity.ok(futbolistaActualizado);
    }

    @DeleteMapping("/futbolista/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarFutbolista(@PathVariable Long id){
        Futbolista futbolista = futbolistaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("El futbolista con ID: " + id + " no due encontrado."));

        futbolistaRepository.delete(futbolista);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
