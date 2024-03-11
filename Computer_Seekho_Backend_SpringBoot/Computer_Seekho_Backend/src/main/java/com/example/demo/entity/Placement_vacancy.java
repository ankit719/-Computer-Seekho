package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table(name = "placement_vacancy")
public class Placement_vacancy {

	public Placement_vacancy()
	{
		super();
	}
	
	private int P_id;
	private int Vacancy;
	private int Company_id;
	private String Location;
	
	public Placement_vacancy(int P_id,int Vacancy, int Company_id,String Location)
	{
		super();
		this. Location= Location;
		this.Company_id = Company_id;
		this.Vacancy= Vacancy;
		this.P_id= P_id;
		
	}
	
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getP_id() {
		return P_id;
	}

	/**
	 * @param p_id the p_id to set
	 */
	public void setP_id(int p_id) {
		P_id = p_id;
	}

	/**
	 * @return the vacancy
	 */
	public int getVacancy() {
		return Vacancy;
	}

	/**
	 * @param vacancy the vacancy to set
	 */
	public void setVacancy(int vacancy) {
		Vacancy = vacancy;
	}

	/**
	 * @return the comapny_id
	 */
	public int getCompany_id() {
		return Company_id;
	}

	/**
	 * @param comapny_id the comapny_id to set
	 */
	public void setCompany_id(int comapny_id) {
		Company_id = comapny_id;
	}

	/**
	 * @return the location_id
	 */
	



	@Override
	public String toString() {
		return "Placement_vacancy [P_id=" + P_id + ", Vacancy=" + Vacancy + ", Company_id=" + Company_id
				+ ", Location_id=" + Location + "]";
	}



	public String getLocation() {
		return Location;
	}



	public void setLocation(String location) {
		Location = location;
	}
	
}



