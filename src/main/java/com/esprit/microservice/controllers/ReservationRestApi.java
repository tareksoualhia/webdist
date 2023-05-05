package com.esprit.microservice.controllers;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.esprit.microservice.entities.Reservation;
import com.esprit.microservice.services.Reservationservice;



@RestController
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping(value = "/api/reservation")
public class ReservationRestApi {
	private String title = "Hello,I'm the reservation Microservice";
	@Autowired
	Reservationservice reservationService;

	@RequestMapping("/hello")
	public String sayHello() {

		System.out.println(title);
		return title;
	}
	
	@PostMapping("/add")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Reservation> createReservation(@RequestBody Reservation a) {

		return new ResponseEntity<>(reservationService.addReservation(a), HttpStatus.OK);
	}

	@GetMapping("/list")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<List<Reservation>> getReservations() {

		return new ResponseEntity<>(reservationService.getAllReservation(), HttpStatus.OK);
	}
	
	@GetMapping("/get/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Reservation> getByIdReservation(@PathVariable(value = "id") int id) {

		return new ResponseEntity<>(reservationService.getByIdReservation(id), HttpStatus.OK);
	}

	@PutMapping("/edit")
	@ResponseStatus(HttpStatus.OK)
	public Reservation updateReservation(@RequestBody Reservation a) {

		return reservationService.updateReservation(a);
	}

	@DeleteMapping("/delete/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<String> deleteReservation(@PathVariable(value = "id") int id) {

		return new ResponseEntity<String>(reservationService.deleteReservation(id), HttpStatus.OK);
	}

}