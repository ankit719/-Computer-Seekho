package com.example.demo.controller;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Enquiry;
import com.example.demo.service.EnquiryManager;

@RestController
@CrossOrigin("*")
public class EnquiryController {
	@Autowired
	EnquiryManager manager;
	
	@GetMapping(value = "/api/enquiry")
	public List<Enquiry> showEnquiry(){
		return manager.getEnquiry();
	}
	
	@GetMapping(value = "/api/enquiry/{id}")
	public Optional<Enquiry> getById(@PathVariable int id){
		return manager.getById(id);
		
	}
	
	@PostMapping(value = "/api/enquiry")
	public void addEnq(@RequestBody Enquiry enq) {
		manager.addEnquiry(enq);
	}
	
	@PutMapping(value = "/api/enquiry/{id}")
	public void update(@RequestBody Enquiry enq, @PathVariable int id) {
		manager.update(enq, id);
	}
	
	
	@DeleteMapping(value = "/api/enquiry/{id}")
	public void delete(@PathVariable int id) {
		manager.delete(id);
	}
	
	@GetMapping(value = "/api/GetEnquiriesByStudentName/{name}")
	 public List<Enquiry> getbyname(@PathVariable String name)
	 {
		return manager.getbyname(name);
	 }
	
	@GetMapping(value = "/api/findLatestEnquiry")
	 public List<Enquiry> findLatestEnquiry()
	 {
		return manager.getLatestEnquiry();
	 }
	
	
	@GetMapping(value="/api/enquiry/getbycontact/{contact}")
	public List<Enquiry>  getbycontact(@PathVariable String contact)
	{
		return manager.getbycontact(contact);
	}
	

	

}
