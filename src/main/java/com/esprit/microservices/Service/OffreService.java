package com.esprit.microservices.Service;

import java.io.File;
import java.util.List;

import javax.servlet.ServletContext;
import javax.ws.rs.core.Response;

import java.util.Optional;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.esprit.microservices.Entity.Offre;
import com.esprit.microservices.Repository.OffreRepository;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class OffreService {

	@Autowired
	public OffreRepository offrerepo;
	
	@Autowired
    ServletContext context;

//	public Offre addoffre(Offre mh) {
//
//		return offrerepo.save(mh);
//	}
	public ResponseEntity<Response> add(MultipartFile file, String Offre) throws JsonParseException, JsonMappingException, Exception
    {

        System.out.println("Ok .............");
        Offre s = new ObjectMapper().readValue(Offre, Offre.class);
        boolean isExit = new File(context.getRealPath("/offre/Images/")).exists();
        if (!isExit)
        {
            new File (context.getRealPath("/offre/Images/")).mkdir();
            System.out.println("mkdir success.............");
        }
        String filename = file.getOriginalFilename();
        String newFileName = FilenameUtils.getBaseName(filename)+"."+FilenameUtils.getExtension(filename);
        File serverFile = new File (context.getRealPath("/offre/Images/"+File.separator+newFileName));
        try
        {
            System.out.println("Image");
            FileUtils.writeByteArrayToFile(serverFile,file.getBytes());

        }catch(Exception e) {
            e.printStackTrace();
        }


        s.setImage(newFileName);

        Offre art = offrerepo.save(s);



        if (art != null)
        {
            return new ResponseEntity<Response>( HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<Response>(HttpStatus.BAD_REQUEST);
        }



    }

	public List<Offre> Alloffre() {
		List<Offre> offres = (List<Offre>) offrerepo.findAll();

		return offres;

	}

	
	public ResponseEntity<Response> put( MultipartFile file, String Offre)
			throws JsonParseException, JsonMappingException, Exception {

			
	        System.out.println("Ok .............");
	        Offre a = new ObjectMapper().readValue(Offre, Offre.class);
	        boolean isExit = new File(context.getRealPath("/offre/Images/")).exists();
	        if (!isExit)
	        {
	            new File (context.getRealPath("/offre/Images/")).mkdir();
	            System.out.println("mkdir success.............");
	        }
	        String filename = file.getOriginalFilename();
	        String newFileName = FilenameUtils.getBaseName(filename)+"."+FilenameUtils.getExtension(filename);
	        File serverFile = new File (context.getRealPath("/offre/Images/"+File.separator+newFileName));
	        try
	        {
	            System.out.println("Image");
	            FileUtils.writeByteArrayToFile(serverFile,file.getBytes());

	        }catch(Exception e) {
	            e.printStackTrace();
	        }


	        a.setImage(newFileName);

	        Offre art = offrerepo.save(a);



	        if (art != null)
	        {
	        	   
	            return new ResponseEntity<Response>( HttpStatus.OK);
	        }
	        else
	        {
	            return new ResponseEntity<Response>(HttpStatus.BAD_REQUEST);
	        }



	}

	public Offre getByIdoffre(int id) {
		Offre r =  offrerepo.findById(id).get();

		return r;
	}
	//public Offre updateoffre(int id, Offre newoffre) {
	//	if (offrerepo.findById(id).isPresent()) {
	//		Offre existingoffre = offrerepo.findById(id).get();
	//		existingoffre.setNom(newoffre.getNom());
	//		existingoffre.setType(newoffre.getType());
	//		existingoffre.setDatedebut(newoffre.getDatedebut());
	//		existingoffre.setImage(newoffre.getImage());
	//		existingoffre.setDatefin(newoffre.getDatefin());
	//		existingoffre.setPrix(newoffre.getPrix());
	//		existingoffre.setDescription(newoffre.getDescription());
	//		return offrerepo.save(existingoffre);
	//	} else
	//		return null;
	//}

	public String deleteoffre(int id) {
		if (offrerepo.findById(id).isPresent()) {
			offrerepo.deleteById(id);
			return "offre  supprimé";
		} else
			return "offre non supprimé";
	}

}
