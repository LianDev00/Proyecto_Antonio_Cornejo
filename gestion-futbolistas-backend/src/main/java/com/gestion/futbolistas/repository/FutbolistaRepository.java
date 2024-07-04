package com.gestion.futbolistas.repository;

import com.gestion.futbolistas.model.Futbolista;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FutbolistaRepository extends JpaRepository<Futbolista, Long> {

}
