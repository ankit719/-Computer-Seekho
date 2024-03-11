package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="company")
public class Company {

	private int company_id;
	private String company_name;
	private String logo;
	private String location;
	private int total_placement;
	
	public Company() {
		super();
	}
	public Company(int company_id, String company_name, String logo, String location, int total_placement) {
		super();
		this.company_id = company_id;
		this.company_name = company_name;
		this.logo = logo;
		this.location = location;
		this.total_placement = total_placement;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getCompany_id() {
		return company_id;
	}
	public void setCompany_id(int company_id) {
		this.company_id = company_id;
	}
	public String getCompany_name() {
		return company_name;
	}
	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}
	public String getLogo() {
		return logo;
	}
	public void setLogo(String logo) {
		this.logo = logo;
	}
	
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public int getTotal_placement() {
		return total_placement;
	}
	public void setTotal_placement(int total_placement) {
		this.total_placement = total_placement;
	}
	@Override
	public String toString() {
		return "Company [company_id=" + company_id + ", company_name=" + company_name + ", logo=" + logo
				+ ", location_id=" + location + ", total_placement=" + total_placement + "]";
	}
	
	
}
