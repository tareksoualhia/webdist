package com.esprit.microservice;

import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import com.esprit.microservice.Repositories.TransportRepository;
import com.esprit.microservice.entities.Transport;

@EnableEurekaClient
@SpringBootApplication
public class TransportApplication {

	public static void main(String[] args) {
		SpringApplication.run(TransportApplication.class, args);
	}
	@Bean
	ApplicationRunner init(TransportRepository repository) {
		return (args) -> {
		
		
			repository.findAll().forEach(System.out::println);
			
		};
	}
}
