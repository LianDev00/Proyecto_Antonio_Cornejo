package com.gestion.futbolistas.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "futbolistas")
public class Futbolista {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nombres")
    private String nombres;

    @Column(name = "apellidos")
    private String apellidos;

    @Column(name = "fecha_nacimiento")
    @Temporal(TemporalType.DATE)
    private Date fechaNacimiento;

    @Column(name = "caracteristicas")
    private String caracteristicas;

    @Column(name = "posicion")
    @Enumerated(EnumType.STRING)
    private Posicion posicion;

    public enum Posicion {
        Arquero,
        Defensa,
        Mediocampista,
        Delantero
    }
}
