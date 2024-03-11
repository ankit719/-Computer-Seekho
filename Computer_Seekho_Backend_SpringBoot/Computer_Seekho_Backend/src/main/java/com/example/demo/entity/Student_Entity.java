package com.example.demo.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "STUDENT")
public class Student_Entity {
	

	
	private int student_id;
	private String student_name;
	private int enquiry_id;
	private int batch_id;
	private Date registration_date;
	private int payment_id;
	private String photo;
	private String contact_no;
	private String email;
	private String gender;
	private int location_id;
	private Date date_of_birth;
	private String qualification;
	private int course_id;
	private double total_fees;
	private double fees_paid;
	public Student_Entity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Student_Entity(int student_id, String student_name, int enquiry_id, int batch_id, Date registration_date,
			int payment_id, String photo, String contact_no, String email, String gender, int location_id,
			Date date_of_birth, String qualification, int course_id, double total_fees, double fees_paid) {
		super();
		this.student_id = student_id;
		this.student_name = student_name;
		this.enquiry_id = enquiry_id;
		this.batch_id = batch_id;
		this.registration_date = registration_date;
		this.payment_id = payment_id;
		this.photo = photo;
		this.contact_no = contact_no;
		this.email = email;
		this.gender = gender;
		this.location_id = location_id;
		this.date_of_birth = date_of_birth;
		this.qualification = qualification;
		this.course_id = course_id;
		this.total_fees = total_fees;
		this.fees_paid = fees_paid;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getStudent_id() {
		return student_id;
	}
	@Override
	public String toString() {
		return "Student_Entity [student_id=" + student_id + ", student_name=" + student_name + ", enquiry_id="
				+ enquiry_id + ", batch_id=" + batch_id + ", registration_date=" + registration_date + ", payment_id="
				+ payment_id + ", photo=" + photo + ", contact_no=" + contact_no + ", email=" + email + ", gender="
				+ gender + ", location_id=" + location_id + ", date_of_birth=" + date_of_birth + ", qualification="
				+ qualification + ", course_id=" + course_id + ", total_fees=" + total_fees + ", fees_paid="
				+ fees_paid + "]";
	}
	public void setStudent_id(int student_id) {
		this.student_id = student_id;
	}
	public String getStudent_name() {
		return student_name;
	}
	public void setStudent_name(String student_name) {
		this.student_name = student_name;
	}
	public int getEnquiry_id() {
		return enquiry_id;
	}
	public void setEnquiry_id(int enquiry_id) {
		this.enquiry_id = enquiry_id;
	}
	public int getBatch_id() {
		return batch_id;
	}
	public void setBatch_id(int batch_id) {
		this.batch_id = batch_id;
	}
	public Date getRegistration_date() {
		return registration_date;
	}
	public void setRegistration_date(Date registration_date) {
		this.registration_date = registration_date;
	}
	public int getPayment_id() {
		return payment_id;
	}
	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
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
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getLocation_id() {
		return location_id;
	}
	public void setLocation_id(int location_id) {
		this.location_id = location_id;
	}
	public Date getDate_of_birth() {
		return date_of_birth;
	}
	public void setDate_of_birth(Date date_of_birth) {
		this.date_of_birth = date_of_birth;
	}
	
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public int getCourse_id() {
		return course_id;
	}
	public void setCourse_id(int course_id) {
		this.course_id = course_id;
	}
	public double getTotal_fees() {
		return total_fees;
	}
	public void setTotal_fees(double total_fees) {
		this.total_fees = total_fees;
	}
	public double getFees_paid() {
		return fees_paid;
	}
	public void setFees_paid(double fees_paid) {
		this.fees_paid = fees_paid;
	}



		
	
}
