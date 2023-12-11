package com.esprit.microservice.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
@Entity
public class Transport implements Serializable {
	private static final long serialVersionUID = 3090249096008711398L;
	@Id
	@GeneratedValue
	private int id;
	private String categorie,  image, modele, description;
	private int prix;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCategorie() {
		return categorie;
	}
	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}

	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getModele() {
		return modele;
	}
	public void setModele(String modele) {
		this.modele = modele;
	}
	public int getPrix() {
		return prix;
	}
	public void setPrix(int prix) {
		this.prix = prix;
	}
	
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}

	public Transport(int id, String categorie, String image, String modele, String description, int prix) {
		super();
		this.id = id;
		this.categorie = categorie;
		this.image = image;
		this.modele = modele;
		this.description = description;
		this.prix = prix;
	}
	public Transport() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Transport(String categorie) {
		super();
		this.categorie = categorie;
	}
	
	
	
}
