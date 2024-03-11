package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.demo.entity.Designation;

@Component
public interface DesignationManager {
	void addDesig(Designation d);
	List<Designation> getDesignation();
	void delete(int id);
	void update(Designation designation, int id);
	List<Designation> getById(int id);
}
