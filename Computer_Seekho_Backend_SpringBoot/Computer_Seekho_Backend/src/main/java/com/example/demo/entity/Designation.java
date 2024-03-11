package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Designation")
public class Designation {
	private int Designation_Id;
	private String Designation;
	/**
	 * 
	 */
	public Designation() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param designation_Id
	 * @param designation
	 */
	public Designation(int designation_Id, String designation) {
		super();
		Designation_Id = designation_Id;
		Designation = designation;
	}
	/**
	 * @return the designation_Id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getDesignation_Id() {
		return Designation_Id;
	}
	/**
	 * @param designation_Id the designation_Id to set
	 */
	public void setDesignation_Id(int designation_Id) {
		Designation_Id = designation_Id;
	}
	/**
	 * @return the designation
	 */
	public String getDesignation() {
		return Designation;
	}
	/**
	 * @param designation the designation to set
	 */
	public void setDesignation(String designation) {
		Designation = designation;
	}
	@Override
	public String toString() {
		return "Designation [Designation_Id=" + Designation_Id + ", Designation=" + Designation + "]";
	}
	
	
}
