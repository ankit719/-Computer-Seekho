package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.Faculty;

public interface FacultyManager {
	void addFaculty(Faculty p);
	List<Faculty> getFaculty();
	void delete(int id);
	void update(Faculty faculty,int id);
	public Optional<Faculty> logIn(Faculty f);
	Optional<Faculty> getFaculty(int id);
	
}
