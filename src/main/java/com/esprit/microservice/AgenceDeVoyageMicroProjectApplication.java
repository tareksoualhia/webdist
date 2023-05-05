package com.esprit.microservice;

import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import com.esprit.microservice.Repositories.ReservationRepository;
import com.esprit.microservice.entities.Reservation;

@EnableEurekaClient
@SpringBootApplication
public class AgenceDeVoyageMicroProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgenceDeVoyageMicroProjectApplication.class, args);
	}
	@Bean
	 ApplicationRunner init(ReservationRepository repository){
		return args ->{
			Stream.of("28/09/2022","29/09/2022").forEach(dateReservation ->{
				repository.save(new Reservation(dateReservation));
			});
			repository.findAll().forEach(System.out::println);
		};
	}
}
