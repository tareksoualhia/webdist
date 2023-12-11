package com.esprit.microservice.services;

import java.io.File;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esprit.microservice.Repositories.TransportRepository;
import com.esprit.microservice.services.ITransportservice;
import com.esprit.microservice.entities.Transport;
import javax.servlet.ServletContext;
//import javax.xml.ws.Response;
import javax.ws.rs.core.Response;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
///import org.omg.CORBA.IntHolder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;




@Service
public class Transportservice implements ITransportservice  {
	@Autowired
private TransportRepository transportRepository;
	@Autowired
    ServletContext context;
	

	
	public ResponseEntity<Response> put( MultipartFile file, String transport)
			throws JsonParseException, JsonMappingException, Exception {

			
	        System.out.println("Ok .............");
	        Transport a = new ObjectMapper().readValue(transport, Transport.class);
	        boolean isExit = new File(context.getRealPath("/transport/Images/")).exists();
	        if (!isExit)
	        {
	            new File (context.getRealPath("/transport/Images/")).mkdir();
	            System.out.println("mkdir success.............");
	        }
	        String filename = file.getOriginalFilename();
	        String newFileName = FilenameUtils.getBaseName(filename)+"."+FilenameUtils.getExtension(filename);
	        File serverFile = new File (context.getRealPath("/transport/Images/"+File.separator+newFileName));
	        try
	        {
	            System.out.println("Image");
	            FileUtils.writeByteArrayToFile(serverFile,file.getBytes());

	        }catch(Exception e) {
	            e.printStackTrace();
	        }


	        a.setImage(newFileName);

	        Transport art = transportRepository.save(a);



	        if (art != null)
	        {
	        	   
	            return new ResponseEntity<Response>( HttpStatus.OK);
	        }
	        else
	        {
	            return new ResponseEntity<Response>(HttpStatus.BAD_REQUEST);
	        }



	}
	
	 public ResponseEntity<Response> add(MultipartFile file, String transport) throws JsonParseException, JsonMappingException, Exception
	    {
			
	        System.out.println("Ok .............");
	        Transport a = new ObjectMapper().readValue(transport, Transport.class);
	        boolean isExit = new File(context.getRealPath("/transport/Images/")).exists();
	        if (!isExit)
	        {
	            new File (context.getRealPath("/transport/Images/")).mkdir();
	            System.out.println("mkdir success.............");
	        }
	        String filename = file.getOriginalFilename();
	        String newFileName = FilenameUtils.getBaseName(filename)+"."+FilenameUtils.getExtension(filename);
	        File serverFile = new File (context.getRealPath("/transport/Images/"+File.separator+newFileName));
	        try
	        {
	            System.out.println("Image");
	            FileUtils.writeByteArrayToFile(serverFile,file.getBytes());

	        }catch(Exception e) {
	            e.printStackTrace();
	        }


	        a.setImage(newFileName);

	        Transport art = transportRepository.save(a);



	        if (art != null)
	        {
	        	   
	            return new ResponseEntity<Response>( HttpStatus.OK);
	        }
	        else
	        {
	            return new ResponseEntity<Response>(HttpStatus.BAD_REQUEST);
	        }



	    }
	
	 

		public String deleteTransport(int id) {

			if (transportRepository.findById(id).isPresent()) {
				transportRepository.deleteById(id);
				return "Moyen de Transport supprimé";
			}
			else
				return " Moyen de Transport non supprimé";
		}

		
		
		
		public List<Transport> getAllTransport() {

			return transportRepository.findAll();
		}
		public Transport getByIdTransport(int id) {
			Transport r = transportRepository.findById(id).get();

			return r;
		}


	
		
	

}
