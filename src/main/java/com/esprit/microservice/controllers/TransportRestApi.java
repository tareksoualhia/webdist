package com.esprit.microservice.controllers;

import java.util.List;

import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.esprit.microservice.Repositories.TransportRepository;
import com.esprit.microservice.entities.Transport;

import com.esprit.microservice.services.Transportservice;
import com.esprit.microservice.services.ITransportservice;


import com.fasterxml.jackson.databind.JsonMappingException;



@CrossOrigin(origins ="http://localhost:4200")
@RestController
@RequestMapping(value = "/api/transport")
public class TransportRestApi {
	private String title = "Hello,I'm the transport Microservice";
	@Autowired
	Transportservice transportService;
	@Autowired
	public TransportRepository transportRepository;

	@PostMapping("/add")
	@ResponseBody
	public ResponseEntity<Response>  addTransport(@RequestPart("file") MultipartFile file,@RequestParam("transport") String a)throws JsonParseException, JsonMappingException, Exception {
		 return transportService.add(file,a);
	}
	
	
	@PostMapping("/edit")
	@ResponseBody
	public ResponseEntity<Response>  updateTransport( @RequestPart("file") MultipartFile file,@RequestParam("transport") String a)throws JsonParseException, JsonMappingException, Exception {
		 return transportService.put(file,a);
	}
	
	
	

@RequestMapping("/hello")
	
	public String sayHello(){
		
		System.out.println(title);
		return title;
	}
@DeleteMapping("/delete/{id}")
@ResponseStatus(HttpStatus.OK)
public ResponseEntity<String> deleteTransport(@PathVariable(value = "id") int id) {

	return new ResponseEntity<String>(transportService.deleteTransport(id), HttpStatus.OK);
}

@GetMapping("/list")
@ResponseStatus(HttpStatus.OK)
public List<Transport> getTransports() {
	List<Transport> listTransport = (List<Transport>) transportRepository.findAll();
	return listTransport;

	
}

@GetMapping("/get/{id}")
@ResponseStatus(HttpStatus.OK)
public ResponseEntity<Transport> getByIdTransport(@PathVariable(value = "id") int id) {

	return new ResponseEntity<>(transportService.getByIdTransport(id), HttpStatus.OK);
}


}