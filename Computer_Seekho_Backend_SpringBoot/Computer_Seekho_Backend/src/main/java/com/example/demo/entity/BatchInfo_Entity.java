package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Batch_Info")
public class BatchInfo_Entity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int Batch_Info_Id;
	int BatchId;
	int Staff_Id;
	String Subject;
	
		
	@Override
	public String toString() {
		return "BatchInfo_Entity [Batch_Info_Id=" + Batch_Info_Id + ", BatchId=" + BatchId + ", Staff_Id=" + Staff_Id
				+ ", Subject=" + Subject + "]";
	}
	
	
	public int getBatch_Info_Id() {
		return Batch_Info_Id;
	}
	public void setBatch_Info_Id(int batch_Info_Id) {
		Batch_Info_Id = batch_Info_Id;
	}
	public int getBatchId() {
		return BatchId;
	}
	public void setBatchId(int batchId) {
		BatchId = batchId;
	}
	public int getStaff_Id() {
		return Staff_Id;
	}
	public void setStaff_Id(int staff_Id) {
		Staff_Id = staff_Id;
	}
	public String getSubject() {
		return Subject;
	}
	public void setSubject(String subject) {
		Subject = subject;
	}
}
	
	
	
	
	
	
	
	
	
	
			
		

