package com.gsviagem.pacotes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gsviagem.pacotes.entities.Pacotes;


@Repository
public interface PacotesRepository extends JpaRepository<Pacotes, Long> {

}
