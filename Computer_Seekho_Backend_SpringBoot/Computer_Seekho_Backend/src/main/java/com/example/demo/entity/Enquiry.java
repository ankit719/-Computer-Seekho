package com.example.demo.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Enquiry")
    public class Enquiry 
    {

	@Override
	public String toString() {
		return "Enquiry [EnquireerName=" + EnquireerName + ", Qualification=" + Qualification + ", Contact_No="
				+ Contact_No + ", Email=" + Email + ", Enquiry_Date=" + Enquiry_Date + ", Enquiry_Source_Id="
				+ Enquiry_Source + ", Student_Name=" + Student_Name + ", Location=" + Location
				+ ", Enquireer_Query=" + Enquireer_Query + ", Closure_Id=" + Closure + ", Next_Followup_Date="
				+ Next_Followup_Date + ", Course=" + Course + ", Staff_Id=" + Staff_Id + ", Date_Of_Birth="
				+ Date_Of_Birth + ", Other_Closure_Reason=" + Other_Closure_Reason + ", Enquiry_Id=" + Enquiry_Id + "]";
	}
	   public Enquiry(int enquiry_Id, String enquireerName, String qualification, String contact_No, String email,
			Date enquiry_Date, String enquiry_Source, String student_Name, String location, String enquireer_Query,
			String closure, Date next_Followup_Date, String course, int staff_Id, Date date_Of_Birth,
			String other_Closure_Reason) {
		super();
		Enquiry_Id = enquiry_Id;
		EnquireerName = enquireerName;
		Qualification = qualification;
		Contact_No = contact_No;
		Email = email;
		Enquiry_Date = enquiry_Date;
		Enquiry_Source = enquiry_Source;
		Student_Name = student_Name;
		Location = location;
		Enquireer_Query = enquireer_Query;
		Closure = closure;
		Next_Followup_Date = next_Followup_Date;
		Course = course;
		Staff_Id = staff_Id;
		Date_Of_Birth = date_Of_Birth;
		Other_Closure_Reason = other_Closure_Reason;
	}
	public Enquiry() {
		super();
	}
	private int Enquiry_Id;
	private String EnquireerName;
	private String Qualification;
    private String Contact_No;
    private String Email;
    private Date Enquiry_Date;
    private String Enquiry_Source;
    private String Student_Name;
    private String Location;
    private String Enquireer_Query;
    private String Closure;
    private Date Next_Followup_Date;
    private String Course;
    
    public String getCourse() {
		return Course;
	}
	public void setCourse(String course) {
		Course = course;
	}
	private int Staff_Id;
    private Date Date_Of_Birth;
    private String Other_Closure_Reason;
	
	
	    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    	public int getEnquiry_Id() {
			return Enquiry_Id;
		}
		public void setEnquiry_Id(int enquiry_Id) {
			Enquiry_Id = enquiry_Id;
		}
		public String getEnquireerName() {
			return EnquireerName;
		}
		public void setEnquireerName(String enquireerName) {
			EnquireerName = enquireerName;
		}
		public String getQualification() {
			return Qualification;
		}
		public void setQualification(String qualification) {
			Qualification = qualification;
		}
		public String getContact_No() {
			return Contact_No;
		}
		public void setContact_No(String contact_No) {
			Contact_No = contact_No;
		}
		public String getEmail() {
			return Email;
		}
		public void setEmail(String email) {
			Email = email;
		}
		public Date getEnquiry_Date() {
			return Enquiry_Date;
		}
		public void setEnquiry_Date(Date enquiry_Date) {
			Enquiry_Date = enquiry_Date;
		}
		public String getEnquiry_Source() {
			return Enquiry_Source;
		}
		public void setEnquiry_Source(String enquiry_Source_Id) {
			Enquiry_Source = enquiry_Source_Id;
		}
		public String getStudent_Name() {
			return Student_Name;
		}
		public void setStudent_Name(String student_Name) {
			Student_Name = student_Name;
		}
		
		public String getLocation() {
			return Location;
		}
		public void setLocation(String location) {
			Location = location;
		}
		public String getEnquireer_Query() {
			return Enquireer_Query;
		}
		public void setEnquireer_Query(String enquireer_Query) {
			Enquireer_Query = enquireer_Query;
		}
		public String getClosure() {
			return Closure;
		}
		public void setClosure(String closure) {
			Closure = closure;
		}
		public Date getNext_Followup_Date() {
			return Next_Followup_Date;
		}
		public void setNext_Followup_Date(Date next_Followup_Date) {
			Next_Followup_Date = next_Followup_Date;
		}
		
		public int getStaff_Id() {
			return Staff_Id;
		}
		public void setStaff_Id(int staff_Id) {
			Staff_Id = staff_Id;
		}
		public Date getDate_Of_Birth() {
			return Date_Of_Birth;
		}
		public void setDate_Of_Birth(Date date_Of_Birth) {
			Date_Of_Birth = date_Of_Birth;
		}
		public String getOther_Closure_Reason() {
			return Other_Closure_Reason;
		}
		public void setOther_Closure_Reason(String other_Closure_Reason) {
			Other_Closure_Reason = other_Closure_Reason;
		}
		
	
	
	
}
