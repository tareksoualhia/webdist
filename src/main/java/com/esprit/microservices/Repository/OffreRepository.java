package com.esprit.microservices.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.esprit.microservices.Entity.Offre;

public interface OffreRepository extends JpaRepository<Offre, Integer> {

}
