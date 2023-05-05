package com.esprit.microservice.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
@Entity
public class Reservation implements Serializable {
	private static final long serialVersionUID = 3090249096008711398L;
	@Id
	@GeneratedValue
	private int id;
	private int duree;
	private String dateReservation, heureReservation;
	private int idProduct;
	
	private String hotel,maisonhote,transport,nom,prenom,email;
	
	
	public Reservation(int id, int duree, String dateReservation, String heureReservation, int idProduct, String hotel,
			String maisonhote, String transport, String nom, String prenom, String email) {
		super();
		this.id = id;
		this.duree = duree;
		this.dateReservation = dateReservation;
		this.heureReservation = heureReservation;
		this.idProduct = idProduct;
		this.hotel = hotel;
		this.maisonhote = maisonhote;
		this.transport = transport;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getHotel() {
		return hotel;
	}
	public void setHotel(String hotel) {
		this.hotel = hotel;
	}
	public String getMaisonhote() {
		return maisonhote;
	}
	public void setMaisonhote(String maisonhote) {
		this.maisonhote = maisonhote;
	}
	public String getTransport() {
		return transport;
	}
	public void setTransport(String transport) {
		this.transport = transport;
	}
	public Reservation(int id, int duree, String dateReservation, String heureReservation, int idProduct) {
		super();
		this.id = id;
		this.duree = duree;
		this.dateReservation = dateReservation;
		this.heureReservation = heureReservation;
		this.idProduct = idProduct;
	}
	public int getIdProduct() {
		return idProduct;
	}
	public void setIdProduct(int idProduct) {
		this.idProduct = idProduct;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getDuree() {
		return duree;
	}
	public void setDuree(int duree) {
		this.duree = duree;
	}
	public String getDateReservation() {
		return dateReservation;
	}
	public void setDateReservation(String dateReservation) {
		this.dateReservation = dateReservation;
	}
	
	public String getHeureReservation() {
		return heureReservation;
	}
	public void setHeureReservation(String heureReservation) {
		this.heureReservation = heureReservation;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	@Override
	public String toString() {
		return "Reservation [id=" + id + ", duree=" + duree + ", dateReservation=" + dateReservation
				+ ", heureReservation=" + heureReservation + "]";
	}
	public Reservation(int id, int duree, String dateReservation, String heureReservation) {
		super();
		this.id = id;
		this.duree = duree;
		this.dateReservation = dateReservation;
		this.heureReservation = heureReservation;
	}
	public Reservation() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Reservation(String dateReservation) {
		super();
		this.dateReservation = dateReservation;
	}
	
}
