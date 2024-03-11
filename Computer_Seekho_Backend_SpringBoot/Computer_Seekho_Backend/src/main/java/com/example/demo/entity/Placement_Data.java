package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Placement_Data")
public class Placement_Data {
	private int Placement_Data_Id;
	private int P_Id;
	private String PRN;
	private int Company_Id;
	private String Designation;
	private int Batch_Id;
	private String Status;
	
	public Placement_Data() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Placement_Data(int placement_Data_Id, int p_Id, String prn, int company_Id, String designation,
			int batch_Id, String status) {
		super();
		Placement_Data_Id = placement_Data_Id;
		P_Id = p_Id;
		PRN = prn;
		Company_Id = company_Id;
		Designation = designation;
		Batch_Id = batch_Id;
		Status = status;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getPlacement_Data_Id() {
		return Placement_Data_Id;
	}

	public void setPlacement_Data_Id(int placement_Data_Id) {
		Placement_Data_Id = placement_Data_Id;
	}

	public int getP_Id() {
		return P_Id;
	}

	public void setP_Id(int p_Id) {
		P_Id = p_Id;
	}


	public String getPRN() {
		return PRN;
	}

	public void setPRN(String pRN) {
		PRN = pRN;
	}

	public int getCompany_Id() {
		return Company_Id;
	}

	public void setCompany_Id(int company_Id) {
		Company_Id = company_Id;
	}

	public String getDesignation() {
		return Designation;
	}

	public void setDesignation(String designation) {
		Designation = designation;
	}

	public int getBatch_Id() {
		return Batch_Id;
	}

	public void setBatch_Id(int batch_Id) {
		Batch_Id = batch_Id;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	@Override
	public String toString() {
		return "Placement_Data [Placement_Data_Id=" + Placement_Data_Id + ", P_Id=" + P_Id + ", PRN="
				+ PRN + ", Company_Id=" + Company_Id + ", Designation=" + Designation + ", Batch_Id="
				+ Batch_Id + ", Status=" + Status + "]";
	}
	
	
}
