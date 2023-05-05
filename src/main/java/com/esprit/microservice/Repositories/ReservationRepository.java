package com.esprit.microservice.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.esprit.microservice.entities.Reservation;





public interface ReservationRepository extends JpaRepository<Reservation,Integer>  {

}
