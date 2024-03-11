package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="Qualification")
public class Qualification 
{
public Qualification()
{
	super();
}
public Qualification(int Qualification_id, String Qualification)
{
	this.Qualification= Qualification;
	this.Qualification_id = Qualification_id;
	
}

private int Qualification_id;
private String Qualification;
/**
 * @return the qualification_id
 */
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
public int getQualification_id() {
	return Qualification_id;
}
/**
 * @param qualification_id the qualification_id to set
 */
public void setQualification_id(int qualification_id) {
	Qualification_id = qualification_id;
}
/**
 * @return the qualification
 */
public String getQualification() {
	return Qualification;
}
/**
 * @param qualification the qualification to set
 */
public void setQualification(String qualification) {
	Qualification = qualification;
}

@Override
public String toString() {
	return "Qualification [Qualification_id=" + Qualification_id + ", Qualification=" + Qualification + "]";
}






}
