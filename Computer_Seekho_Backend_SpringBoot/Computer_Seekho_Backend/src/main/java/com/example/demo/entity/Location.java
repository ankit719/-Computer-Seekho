package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "Location")
public class Location {
	private int Location_Id;
	private String City;
	private String Country;
	private String Landmark;
	private String pincode;
	/**
	 * 
	 */
	public Location() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Location(int location_Id, String city, String country, String landmark, String pincode) {
		super();
		Location_Id = location_Id;
		City = city;
		Country = country;
		Landmark = landmark;
		this.pincode = pincode;
	}
	/**
	 * @return the location_Id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getLocation_Id() {
		return Location_Id;
	}
	/**
	 * @param location_Id the location_Id to set
	 */
	public void setLocation_Id(int location_Id) {
		Location_Id = location_Id;
	}
	/**
	 * @return the city
	 */
	public String getCity() {
		return City;
	}
	/**
	 * @param city the city to set
	 */
	public void setCity(String city) {
		City = city;
	}
	/**
	 * @return the country
	 */
	public String getCountry() {
		return Country;
	}
	/**
	 * @param country the country to set
	 */
	public void setCountry(String country) {
		Country = country;
	}
	/**
	 * @return the landmark
	 */
	public String getLandmark() {
		return Landmark;
	}
	/**
	 * @param landmark the landmark to set
	 */
	public void setLandmark(String landmark) {
		Landmark = landmark;
	}
	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	/**
	 * @return the pincode
	 */
	
	@Override
	public String toString() {
		return "Location [Location_Id=" + Location_Id + ", City=" + City + ", Country=" + Country + ", Landmark="
				+ Landmark + ", pincode=" + pincode + "]";
	}
}
