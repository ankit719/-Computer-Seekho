package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Faculty;
import com.example.demo.repository.FacultyRepository;

@Service

public class FacultyManagerImplimentation implements FacultyManager {

	@Autowired
	FacultyRepository repository;
	@Override
	public void addFaculty(Faculty p) {
		repository.save(p);
		
	}

	@Override
	public List<Faculty> getFaculty() {
		return repository.findAll();
	}

	@Override
	public void delete(int id) {
		repository.deleteById(id);
		
	}

	@Override
	public void update(Faculty f, int id) {
		repository.update(f.getUsername(),f.getRole(),f.getPassword(),
				f.getName(),f.getDesignation(),f.getQualification(),
				f.getExperience(),f.getContact_no(),f.getEmail(),
				f.getPhoto(),f.getLocation_id(),f.getJoining_Date(),
				id);
	}
	
	@Override
	public Optional<Faculty> logIn(Faculty f) {
		
		Optional<Faculty> fac = repository.LogIn(f.getUsername(), f.getPassword());
	     //return (fac != null) ? fac : NULL;
		 return fac;
	}
	
	@Override
	public Optional<Faculty> getFaculty(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}

}
