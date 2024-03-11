package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ROLE")
public class Role_Entity {
	public Role_Entity() {
		super();
	}
	public Role_Entity(int role_id, String role)
	{
		super();
		this.role_id = role_id;
		this.role = role;
		
	}
	private int role_id;
	
	
	private String role;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getRole_id() {
		return role_id;
	}
	
	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}
	
	public String getRole() {
		return role;
	}
	
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "_Entity [role_id=" + role_id + ", role=" + role + "]";
	}
}
