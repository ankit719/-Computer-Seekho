package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.Qualification;


public interface QualificationManager 
{
	void addQualification(Qualification p);
	List<Qualification> getQualification();
	void delete(int id);
	void update(Qualification qualification,int id);
	Optional<Qualification> getQualification(int id);
	void updateQualification(Qualification qualification);
	
}
	

