package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;

import com.example.demo.entity.Enquiry;


@Component
public interface EnquiryManager {
	void addEnquiry(Enquiry enq);
	List<Enquiry> getEnquiry();
	void delete(int id);
	void update(Enquiry enq, int id);
	Optional<Enquiry> getById(int id);
	List<Enquiry> getbyname( String name);
	
	List<Enquiry> getLatestEnquiry();
	List<Enquiry> getbycontact(String contact);
}
