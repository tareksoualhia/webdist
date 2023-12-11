package com.esprit.microservice;

import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import com.esprit.microservice.Entity.Hotel;
import com.esprit.microservice.Repository.HotelRepository;


@EnableEurekaClient
@SpringBootApplication
public class AgenceDeVoyageMicroProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgenceDeVoyageMicroProjectApplication.class, args);
	}

	
	@Bean
	 ApplicationRunner init(HotelRepository repository){
		return args ->{
			Stream.of("Movenpick","Regency","hammamet").forEach(nom ->{
				repository.save(new Hotel(nom));
			});
			repository.findAll().forEach(System.out::println);
		};
	}
}
