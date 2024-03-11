package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "PRN_Generator")
public class PRNGenerator {
	
	private int PRN;
	private int Student_Id;
	/**
	 * 
	 */
	public PRNGenerator() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param prn
	 * @param student_Id
	 */
	public PRNGenerator(int prn, int student_Id) {
		super();
		PRN = prn;
		Student_Id = student_Id;
	}
	/**
	 * @return the prn
	 */
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getPRN() {
		return PRN;
	}
	/**
	 * @param prn the prn to set
	 */
	public void setPRN(int prn) {
		PRN = prn;
	}
	/**
	 * @return the student_Id
	 */
	public int getStudent_Id() {
		return Student_Id;
	}
	/**
	 * @param student_Id the student_Id to set
	 */
	public void setStudent_Id(int student_Id) {
		Student_Id = student_Id;
	}
	
	@Override
	public String toString() {
		return "PRNGenerator [PRN=" + PRN + ", Student_Id=" + Student_Id + "]";
	}

	
}
