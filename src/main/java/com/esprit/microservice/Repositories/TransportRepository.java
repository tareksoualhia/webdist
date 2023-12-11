package com.esprit.microservice.Repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.esprit.microservice.entities.Transport;





public interface TransportRepository extends JpaRepository<Transport,Integer>  {
	@Query("select m from Transport m where m.categorie like :categorie")
	public Page<Transport> TransportByCategorie(@Param("categorie") String m, Pageable pageable);

}
