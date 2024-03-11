package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;

@Entity
@Table(name="staff")
public class Faculty {
     private String username;
     private String role;
     private String password;
     private int staff_id;
     private String name;
     private String designation;
     private String qualification;
     private String experience;
     private String contact_no;
     private String email;
     private String photo;
     private int location_id;
     private Date joining_Date;
    
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getStaff_id() {
		return staff_id;
	}
	public void setStaff_id(int staff_id) {
		this.staff_id = staff_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public String getContact_no() {
		return contact_no;
	}
	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public int getLocation_id() {
		return location_id;
	}
	public void setLocation_id(int location_id) {
		this.location_id = location_id;
	}
	public Date getJoining_Date() {
		return joining_Date;
	}
	public void setJoining_Date(Date joining_Date) {
		this.joining_Date = joining_Date;
	}
	
	public Faculty() {
		super();
	}
	public Faculty(String username, String password, int staff_id, String name, String designation,
			String qualification, String experience, String contact_no, String email, String photo, int location_id,
			Date joining_Date, String role) {
		super();
		this.username = username;
		this.password = password;
		this.staff_id = staff_id;
		this.name = name;
		this.designation = designation;
		this.qualification = qualification;
		this.experience = experience;
		this.contact_no = contact_no;
		this.email = email;
		this.photo = photo;
		this.location_id = location_id;
		this.joining_Date = joining_Date;
		this.role = role;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
     
     
}
