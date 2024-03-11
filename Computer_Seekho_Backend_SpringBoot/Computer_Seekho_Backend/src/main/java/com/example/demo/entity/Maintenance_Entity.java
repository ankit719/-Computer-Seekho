package com.example.demo.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "MAINTENANCE")
public class Maintenance_Entity {
	private int maintenance_id;
	private int staff_id;
	private String table_name;
	private int record_id;
	//private  String reason;
	private Date changing_date;
	//private String note;
	
	public Maintenance_Entity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Maintenance_Entity(int maintenance_id, int staff_id, String table_name, int record_id, 
			Date changing_date, String note) {
		super();
		this.maintenance_id = maintenance_id;
		this.staff_id = staff_id;
		this.table_name = table_name;
		this.record_id = record_id;
		
		this.changing_date = changing_date;
		
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getMaintenance_id() {
		return maintenance_id;
	}

	@Override
	public String toString() {
		return "Maintenance_Entity [maintenance_id=" + maintenance_id + ", staff_id=" + staff_id + ", table_name="
				+ table_name + ", record_id=" + record_id + ",  changing_date=" + changing_date
				+ "]";
	}

	public void setMaintenance_id(int maintenance_id) {
		this.maintenance_id = maintenance_id;
	}

	public int getStaff_id() {
		return staff_id;
	}

	public void setStaff_id(int staff_id) {
		this.staff_id = staff_id;
	}

	public String getTable_name() {
		return table_name;
	}

	public void setTable_name(String table_name) {
		this.table_name = table_name;
	}

	public int getRecord_id() {
		return record_id;
	}

	public void setRecord_id(int record_id) {
		this.record_id = record_id;
	}

	

	public Date getChanging_date() {
		return changing_date;
	}

	public void setChanging_date(Date changing_date) {
		this.changing_date = changing_date;
	}

	

}
