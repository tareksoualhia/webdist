package com.esprit.microservices.Entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Offre implements Serializable {

	@Id
	@GeneratedValue
	private int idOffre;
	private String nom;
    private String type;
    private String datedebut;
    private String image;
    private String datefin;
    private int prix ;
    private String description ;
	public int getIdOffre() {
		return idOffre;
	}
	public void setIdOffre(int idOffre) {
		this.idOffre = idOffre;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getDatedebut() {
		return datedebut;
	}
	public void setDatedebut(String datedebut) {
		this.datedebut = datedebut;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getDatefin() {
		return datefin;
	}
	public void setDatefin(String datefin) {
		this.datefin = datefin;
	}
	public int getPrix() {
		return prix;
	}
	public void setPrix(int prix) {
		this.prix = prix;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Offre(int idOffre, String nom, String type, String datedebut, String image, String datefin, int prix,
			String description) {
		super();
		this.idOffre = idOffre;
		this.nom = nom;
		this.type = type;
		this.datedebut = datedebut;
		this.image = image;
		this.datefin = datefin;
		this.prix = prix;
		this.description = description;
	}
	public Offre() {
		super();
	
	}
	@Override
	public String toString() {
		return "Offre [idOffre=" + idOffre + ", nom=" + nom + ", type=" + type + ", datedebut=" + datedebut + ", image="
				+ image + ", datefin=" + datefin + ", prix=" + prix + ", description=" + description + "]";
	}

	

}
