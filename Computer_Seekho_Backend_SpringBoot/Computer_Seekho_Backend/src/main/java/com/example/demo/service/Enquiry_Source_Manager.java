package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.demo.entity.Enquiry_Source;

@Component
public interface Enquiry_Source_Manager {
	void addEnquiry_Source(Enquiry_Source p);
	List<Enquiry_Source> getEnquiry_Source();
	void delete(int id);
	void update(Enquiry_Source c,int id);
	List<Enquiry_Source> getById(int id);
}
