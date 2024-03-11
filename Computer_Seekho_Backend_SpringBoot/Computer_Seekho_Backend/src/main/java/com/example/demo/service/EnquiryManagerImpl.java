package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Enquiry;
import com.example.demo.repository.EnquiryRepository;

@Service
public class EnquiryManagerImpl implements EnquiryManager {

	@Autowired
	EnquiryRepository repository;
	
	@Override
	public void addEnquiry(Enquiry enq) {
		// TODO Auto-generated method stub
		repository.save(enq);
	}

	@Override
	public List<Enquiry> getEnquiry() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	@Override
	public void update(Enquiry e, int id) {
		// TODO Auto-generated method stub
		repository.update(e.getEnquireerName(), e.getQualification(), e.getContact_No(), e.getEmail(), e.getEnquiry_Date(), e.getEnquiry_Source(), e.getStudent_Name(), e.getLocation(), e.getEnquireer_Query(), e.getClosure(), e.getNext_Followup_Date(), e.getCourse(), e.getStaff_Id(), e.getDate_Of_Birth(), e.getOther_Closure_Reason(), id);
	}
	@Override
	public Optional<Enquiry> getById(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}
	
	@Override
	public List<Enquiry> getbyname(String name) {
		// TODO Auto-generated method stub
		return repository.listname(name);
	}

	
	
	@Override
	public List<Enquiry> getLatestEnquiry() {
		// TODO Auto-generated method stub
		return repository.findLatestEnquiry();
	}
	@Override
	public List<Enquiry> getbycontact(String contact) {
		// TODO Auto-generated method stub
		return repository.listcontact(contact);
	}


}
