package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Enquiry_Source")
public class Enquiry_Source {
	private int Enquiry_Source_Id;
	private String Enquiry_Source;
	/**
	 * 
	 */
	public Enquiry_Source() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param enquiry_Source_Id
	 * @param enquiry_Source
	 */
	public Enquiry_Source(int enquiry_Source_Id, String enquiry_Source) {
		super();
		this.Enquiry_Source_Id = enquiry_Source_Id;
		this.Enquiry_Source = enquiry_Source;
	}
	
	/**
	 * @return the enquiry_Source_Id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getEnquiry_Source_Id() {
		return Enquiry_Source_Id;
	}
	/**
	 * @param enquiry_Source_Id the enquiry_Source_Id to set
	 */
	public void setEnquiry_Source_Id(int enquiry_Source_Id) {
		this.Enquiry_Source_Id = enquiry_Source_Id;
	}
	/**
	 * @return the enquiry_Source
	 */
	public String getEnquiry_Source() {
		return Enquiry_Source;
	}
	/**
	 * @param enquiry_Source the enquiry_Source to set
	 */
	public void setEnquiry_Source(String enquiry_Source) {
		this.Enquiry_Source = enquiry_Source;
	}
	
	
}
